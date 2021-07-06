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
  const insuranceType = getInsuranceType(nameParts[2]);
  const expiry = new Date(
    Number.parseInt(nameParts[6], 10),
    MONTHS.indexOf(nameParts[5]),
    Number.parseInt(nameParts[4], 10),
  );

  const label = `${symbol} x ${nameParts[1]} x ${nameParts[2]}`;

  return {
    address,
    label,
    expiry: expiry.getTime(),
    assetType,
    insuranceType,
    underlyingToken: underlyingToken as Token,
    insuranceToken: insuranceToken as Token,
    assetToken: assetToken as Token,
    token: token as Token,
    assetRate: 10.5,
    insuranceRate: 3.1,
    yieldRate: 7.4,
    ...supportedSaveToken,
  };
};

export const getSaveTokenFlavors = async (
  chainId: number,
): Promise<SaveToken[]> => {
  const saveTokens = await getSaveTokens(chainId);
  const supportedSaveTokens = SAVE_TOKENS_FLAVOURS[chainId];
  return saveTokens
    .map(saveToken => {
      const supportedSaveToken = supportedSaveTokens[saveToken.address];
      if (supportedSaveToken) {
        try {
          return parseSaveToken(saveToken, supportedSaveToken);
        } catch (error) {
          logError(error);
          return undefined;
        }
      } else {
        return undefined;
      }
    })
    .filter(saveToken => !!saveToken)
    .sort((a, b) => (a.yieldRate > b.yieldRate ? 1 : -1));
};
