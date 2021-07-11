import { Text, TextProps } from '@chakra-ui/react';
import { useSave } from 'contexts/SaveContext';
import React from 'react';

export const SaveToken: React.FC<TextProps & { symbol?: string }> = ({
  symbol: inputSymbol,
  ...props
}) => {
  const { tokenSymbol } = useSave();
  const symbol = inputSymbol || tokenSymbol;

  return (
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
};
