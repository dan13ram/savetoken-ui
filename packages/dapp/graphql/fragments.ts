import gql from 'fake-tag';

export const SaveTokenDetails = gql`
  fragment SaveTokenDetails on SaveToken {
    address: id
    token {
      address: id
      decimals
      name
      symbol
    }
    underlyingToken {
      address: id
      decimals
      name
      symbol
    }
    insuranceToken {
      address: id
      decimals
      name
      symbol
    }
    assetToken {
      address: id
      decimals
      name
      symbol
    }
  }
`;
