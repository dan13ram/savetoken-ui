import { IconProps, Tooltip as ChakraTooltip } from '@chakra-ui/react';
import { InfoIcon } from 'icons/InfoIcon';
import React from 'react';

export const Tooltip: React.FC<IconProps & { title: string }> = ({
  title,
  ...props
}) => (
  <ChakraTooltip label={title}>
    <InfoIcon
      color="grey4"
      _hover={{ color: 'grey2' }}
      boxSize="0.625rem"
      {...props}
    />
  </ChakraTooltip>
);
