import gql from 'fake-tag';
import {
  GetSaveTokensDocument,
  GetSaveTokensQuery,
  GetSaveTokensQueryVariables,
  SaveTokenDetailsFragment,
} from 'graphql/autogen/types';
import { clients } from 'graphql/client';
import { SaveTokenDetails } from 'graphql/fragments';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
gql`
  query GetSaveTokens {
    saveTokens {
      ...SaveTokenDetails
    }
  }
  ${SaveTokenDetails}
`;

export const getSaveTokens = async (
  chainId: number,
): Promise<SaveTokenDetailsFragment[]> => {
  const { data, error } = await clients[chainId]
    .query<GetSaveTokensQuery, GetSaveTokensQueryVariables>(
      GetSaveTokensDocument,
    )
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return null;
  }

  return data?.saveTokens || [];
};
