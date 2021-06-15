export type Token = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
};

export enum AssetType {
  AAVE,
  COMPOUND,
}

export enum InsuranceType {
  COVER,
  OPYN,
}

export type SaveToken = {
  address: string;
  label: string;
  color: string;
  expiry: number;
  token: Token;
  underlyingToken: Token;
  assetType: AssetType;
  assetToken: Token;
  assetRate: number;
  insuranceType: InsuranceType;
  insuranceToken: Token;
  insuranceRate: number;
  yieldRate: number;
};

export type SupportedSaveToken = {
  color: string;
};

export type SaveTokenFlavors = {
  [chainId: number]: SaveToken[];
};
