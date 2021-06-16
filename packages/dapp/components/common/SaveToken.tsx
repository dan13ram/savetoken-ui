import { Text, TextProps } from '@chakra-ui/react';
import { useSave } from 'contexts/SaveContext';
import React from 'react';

export const SaveToken: React.FC<TextProps & { symbol?: string }> = ({
  symbol: inputSymbol,
  ...props
}) => {
  const { symbol: saveTokenSymbol } = useSave();
  const symbol = inputSymbol || saveTokenSymbol;

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
