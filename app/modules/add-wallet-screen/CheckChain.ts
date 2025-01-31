import { ethers, Mnemonic } from "ethers";
import { Keypair } from "@solana/web3.js";
// @ts-ignore
import * as bip39 from "bip39";
import * as Crypto from "expo-crypto";

// Convert a string to a hash (entropy) and then generate mnemonic
const stringToMnemonic = async (inputString: string) => {
  // Hash the input string to generate entropy
  const hash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    inputString
  );

  // Convert the hash (SHA256 output) to Buffer
  const buffer = Buffer.from(hash, "hex");

  // Generate mnemonic from entropy (buffer)
  const mnemonic = bip39.entropyToMnemonic(buffer);
  return mnemonic;
};


// Function to identify blockchain based on mnemonic
export const identifyBlockchain = async (mnemonicString: string) => {
  const mnemonic = await stringToMnemonic(mnemonicString);

  const isValid = bip39.validateMnemonic(mnemonic);
  if (!isValid) {
    throw new Error("Invalid Mnemonic");
  }

  // ETHEREUM (BIP-44 Path: m/44'/60'/0'/0/0)
  const ethWallet = ethers.Wallet.fromPhrase(mnemonicString);
  const ethAddress = ethWallet.address;

  // SOLANA (BIP-44 Path: m/44'/501'/0'/0')
  const seed = bip39.mnemonicToSeedSync(mnemonicString)
  const solanaSeed = new Uint8Array(seed.slice(0, 32)); // Ensure seed is 32 bytes for Solana
  const solKeypair = Keypair.fromSeed(solanaSeed);
  const solAddress = solKeypair.publicKey.toBase58();

  return {
    ethereum: ethAddress,
    solana: solAddress,
  };
};
