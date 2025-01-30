import { ethers, Mnemonic } from "ethers";
import { Keypair } from "@solana/web3.js";
// @ts-ignore
import bip39 from "react-native-bip39";

// Function to identify blockchain based on mnemonic
const identifyBlockchain = async (mnemonic: string) => {
  // Validate Mnemonic
  const isValid = await bip39.validateMnemonic(mnemonic);
  if (!isValid) {
    return { error: "Invalid Mnemonic" };
  }

  // ETHEREUM (BIP-44 Path: m/44'/60'/0'/0/0)
  const ethWallet = ethers.Wallet.fromPhrase(mnemonic);
  const ethAddress = ethWallet.address;
  console.log("ethAddress: ", ethAddress);

  // SOLANA (BIP-44 Path: m/44'/501'/0'/0')
  //   const seed = utils.mnemonicToSeedSync(mnemonic).slice(0, 32); // Convert mnemonic to seed
  const seed = await bip39.mnemonicToSeed(mnemonic); // Convert mnemonic to seed
  const solanaSeed = new Uint8Array(seed.slice(0, 32)); // Ensure seed is 32 bytes for Solana
  const solKeypair = Keypair.fromSeed(solanaSeed);

  // const seed = Mnemonic.fromPhrase(mnemonic).computeSeed();
  // // Ensure seed is 32 bytes for Solana
  // const solanaSeed = seed.slice(0, 32); // ✅ Get the first 32 bytes
  // // Generate Solana Keypair
  // const solanaKeypair = Keypair.fromSeed(solanaSeed);
  const solAddress = solKeypair.publicKey.toBase58();
  console.log('sol address: ', solAddress);

  return {
    ethereum: ethAddress,
    solana: solAddress,
  };
};

// Example Usage
const mnemonic = "your 12/24-word mnemonic here";
identifyBlockchain(mnemonic).then(console.log);
