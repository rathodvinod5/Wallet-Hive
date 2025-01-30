import { isAddress } from "ethers";
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