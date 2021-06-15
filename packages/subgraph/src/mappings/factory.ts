import { SaveToken } from '../types/schema';
import { SaveTokenCreated as SaveTokenCreatedEvent } from '../types/SaveTokenFactory/SaveTokenFactory';
import { SaveToken as SaveTokenContract } from '../types/SaveTokenFactory/SaveToken';
import { getToken } from './helpers';

export function handleSaveTokenCreated(event: SaveTokenCreatedEvent): void {
  let txHash = event.transaction.hash;
  let address = event.params.addr;
  let saveToken = new SaveToken(address.toHexString());
  saveToken.address = address;
  saveToken.creationTx = txHash;
  saveToken.factoryAddress = event.address;

  let saveTokenInstance = SaveTokenContract.bind(address);

  let addressesResult = saveTokenInstance.getAddresses();

  let token = getToken(address);
  token.save();

  let underlyingToken = getToken(addressesResult.value0);
  underlyingToken.save();

  let assetAdapter = addressesResult.value1;

  let assetToken = getToken(addressesResult.value2);
  assetToken.save();

  let insuranceAdapter = addressesResult.value3;

  let insuranceToken = getToken(addressesResult.value4);
  insuranceToken.save();

  saveToken.token = token.id;
  saveToken.underlyingToken = underlyingToken.id;
  saveToken.assetAdapter = assetAdapter;
  saveToken.assetToken = assetToken.id;
  saveToken.insuranceAdapter = insuranceAdapter;
  saveToken.insuranceToken = insuranceToken.id;

  saveToken.save();
}
