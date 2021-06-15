import { Address } from '@graphprotocol/graph-ts';
import { Token } from '../types/schema';
import { ERC20Metadata } from '../types/SaveTokenFactory/ERC20Metadata';

export function getToken(tokenAddress: Address): Token {
  let token = Token.load(tokenAddress.toHexString());
  if (token == null) {
    token = new Token(tokenAddress.toHexString());
  }
  let erc20 = ERC20Metadata.bind(tokenAddress);
  let symbol = erc20.try_symbol();
  let name = erc20.try_name();
  let decimals = erc20.try_decimals();

  token.symbol = symbol.reverted ? '' : symbol.value;
  token.name = name.reverted ? '' : name.value;
  token.decimals = decimals.reverted ? 0 : decimals.value;
  return token as Token;
}
