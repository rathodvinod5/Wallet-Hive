import { Connection, PublicKey } from '@solana/web3.js';
import { ethers, type Provider } from 'ethers';

export enum AddressObjectEnum {
  WALLET = "address",
  CONTRACT = "contract"
};

export const validateEthAddress = (address: string) => {

  async function isEthereumWallet(provider: Provider, address: string) {
    const code = await provider.getCode(address);
    return code === "0x"; // If no bytecode, it's a wallet
  }
    
  const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`);
  // const address = "0x32Be343B94f860124dC4fEe278FDCBD38C102D88";
  
  return isEthereumWallet(provider, address).then(isWallet => {
    console.log(isWallet ? "Wallet Address" : "Smart Contract Address");
    return isWallet ? AddressObjectEnum.WALLET : AddressObjectEnum.CONTRACT;
  });
}

export const validateSolAddress = (address: string) => {

  async function isSolanaWallet(address: string) {
    const connection = new Connection("https://api.devnet.solana.com");
    const publicKey = new PublicKey(address);
    const accountInfo = await connection.getAccountInfo(publicKey);
  
    if (!accountInfo) {
      return false; // Address doesn't exist on the blockchain
    }
  
    return accountInfo.executable === false; // Non-executable accounts are wallets
  }
  
  // const address = "5iXsDdVyk9FhbuTw2ftoqRtbYt1J9pVTeZ1gL7v9v3x5";
  isSolanaWallet(address).then(isWallet => {
    console.log(isWallet ? "Wallet Address" : "Program Address");
    return isWallet ? AddressObjectEnum.WALLET : AddressObjectEnum.CONTRACT;
  });
}