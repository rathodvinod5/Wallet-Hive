import { ethers, isAddress, type Wallet } from "ethers";
import { Keypair, PublicKey } from "@solana/web3.js";
import bs58 from "bs58";

export function isValidAddress(address: string, chain: string): boolean | string {
  try {
    if (chain.toLowerCase() === "ethereum" || chain.toLowerCase() === "evm") {
      return isAddress(address); // ✅ Ethereum, Polygon, BSC, Avalanche
    } else if (chain.toLowerCase() === "solana" || chain.toLowerCase() === "sol") {
      new PublicKey(address); // Will throw an error if invalid
      return true; // ✅ Solana
    }
    return false; // ❌ Unsupported chain
  } catch (e) {
    return false; // ❌ Invalid address
  }
}

export function isSecretKey(privateKey: string, chain: string): Wallet | boolean | null | string {
  try {
    if (chain.toLowerCase() === "ethereum" || chain.toLowerCase() === "evm") {
      return new ethers.Wallet(privateKey); // ✅ Ethereum, Polygon, BSC, Avalanche
    } else if (chain.toLowerCase() === "solana" || chain.toLowerCase() === "sol") {
      // new PublicKey(address); // Will throw an error if invalid
      // return true; // ✅ Solana

      // Generate the Keypair from the secret key
      const secretKey = bs58.decode(privateKey);
      const keypair = Keypair.fromSecretKey(new Uint8Array(secretKey));

      // Get the public key (wallet address)
      const publicKey = keypair.publicKey.toBase58();
      console.log('public key for secretkey: ', publicKey);
      return publicKey;
    }
    return false; // ❌ Unsupported chain
  } catch (e) {
    return false; // ❌ Invalid address
  }
}