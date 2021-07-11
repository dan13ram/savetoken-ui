import { SaveTokenDetailsFragment } from 'graphql/autogen/types';
import { getSaveTokens } from 'graphql/getSaveTokens';
import { SAVE_TOKENS_FLAVOURS } from 'utils/constants';
import { MONTHS } from 'utils/dateHelpers';
import { logError } from 'utils/helpers';
import {
  AssetType,
  InsuranceType,
  SaveToken,
  SupportedSaveToken,
  Token,
} from 'utils/types';

const getAssetType = (assetTypeName: string): AssetType => {
  switch (assetTypeName) {
    case 'Compound':
      return AssetType.COMPOUND;
    case 'Aave':
    default:
      return AssetType.AAVE;
  }
};

const getRewardToken = (assetTypeName: string): Token | null => {
  switch (assetTypeName) {
    case 'Compound':
      return {
        address: '0xc00e94cb662c3520282e6f5717214004a7f26888',
        symbol: 'COMP',
        name: 'Compound',
        decimals: 18,
      };
    case 'Aave':
    default:
      return null;
  }
};

const getInsuranceType = (insuranceTypeName: string): InsuranceType => {
  switch (insuranceTypeName) {
    case 'Opyn':
      return InsuranceType.OPYN;
    case 'Cover':
    default:
      return InsuranceType.COVER;
  }
};

const parseSaveToken = (
  chainId: number,
  saveToken: SaveTokenDetailsFragment,
  supportedSaveToken: SupportedSaveToken,
): SaveToken => {
  const {
    token,
    underlyingToken,
    assetToken,
    insuranceToken,
    address,
  } = saveToken;

  const { name } = token;
  const { symbol } = underlyingToken;

  const nameParts = name.split('_');

  if (nameParts.length < 7) {
    throw new Error(`Invalid SaveToken name: ${name} at ${address}`);
  }

  const assetType = getAssetType(nameParts[1]);
  const rewardToken = getRewardToken(nameParts[1]);
  const insuranceType = getInsuranceType(nameParts[2]);
  const expiry = new Date(
    Number.parseInt(nameParts[6], 10),
    MONTHS.indexOf(nameParts[5]),
    Number.parseInt(nameParts[4], 10),
  );

  const label = `${symbol} x ${nameParts[1]} x ${nameParts[2]}`;
  const assetRate = 5;
  const insuranceRate = 3;

  return {
    chainId,
    address,
    label,
    expiry: expiry.getTime(),
    assetType,
    insuranceType,
    underlyingToken: underlyingToken as Token,
    insuranceToken: insuranceToken as Token,
    assetToken: assetToken as Token,
    token: token as Token,
    rewardToken,
    assetRate,
    insuranceRate,
    yieldRate: assetRate - insuranceRate,
    ...supportedSaveToken,
  };
};

export const getSaveTokenFlavors = async (
  chainId: number,
): Promise<SaveToken[]> => {
  const saveTokens = await getSaveTokens(chainId);
  const supportedSaveTokens = SAVE_TOKENS_FLAVOURS[chainId];
  const parsedSaveTokens = saveTokens
    .map(saveToken => {
      const supportedSaveToken = supportedSaveTokens[saveToken.address];
      if (supportedSaveToken) {
        try {
          return parseSaveToken(chainId, saveToken, supportedSaveToken);
        } catch (error) {
          logError(error);
          return null;
        }
      } else {
        return null;
      }
    })
    .filter(saveToken => !!saveToken)
    .sort((a, b) => (a.yieldRate > b.yieldRate ? 1 : -1));

  // TODO: remove this after testing
  return [
    ...parsedSaveTokens,
    {
      ...parsedSaveTokens[0],
      label: `DAI x Compound x Opyn`,
      color: 'yellowPinkGradient',
      assetType: AssetType.COMPOUND,
      rewardToken: getRewardToken('Compound'),
    },
  ];
};
