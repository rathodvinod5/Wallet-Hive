import { ethers, isAddress, type Wallet } from "ethers";
import { PublicKey } from "@solana/web3.js";

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

export function isSecretKey(privateKey: string, chain: string): Wallet | boolean | null {
  try {
    if (chain.toLowerCase() === "ethereum" || chain.toLowerCase() === "evm") {
      return new ethers.Wallet(privateKey);; // ✅ Ethereum, Polygon, BSC, Avalanche
    } else if (chain.toLowerCase() === "solana" || chain.toLowerCase() === "sol") {
      // new PublicKey(address); // Will throw an error if invalid
      // return true; // ✅ Solana
    }
    return false; // ❌ Unsupported chain
  } catch (e) {
    return false; // ❌ Invalid address
  }
}