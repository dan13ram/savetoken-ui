import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

export const SaveToken: React.FC<TextProps & { symbol?: string }> = ({
  symbol = 'DAI',
  ...props
}) => (
  <Text {...props}>
    <Text as="span" fontFamily="body">
      save
    </Text>
    <Text
      as="span"
      fontFamily="grotesk"
      fontWeight="bold"
      textTransform="uppercase"
    >
      {symbol}
    </Text>
  </Text>
);
