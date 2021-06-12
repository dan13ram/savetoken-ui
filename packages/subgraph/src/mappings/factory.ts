import { SaveToken } from '../types/schema';
import { SaveTokenCreated as SaveTokenCreatedEvent } from '../types/SaveTokenFactory/SaveTokenFactoryABI';

export function handleSaveTokenCreated(event: SaveTokenCreatedEvent): void {
  let txHash = event.transaction.hash;
  let address = event.params.addr;
  let saveToken = new SaveToken(address.toHexString());
  saveToken.address = address;
  saveToken.creationTx = txHash;
  saveToken.factoryAddress = event.address;
  saveToken.save();
}
