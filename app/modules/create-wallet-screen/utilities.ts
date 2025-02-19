import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Wallet } from "ethers";

export const generateNewWalletOnEthereum = () => {
    // Generate a new Ethereum wallet
  const wallet = Wallet.createRandom();
  if(!wallet.mnemonic) return;
  console.log("Ethereum Wallet Created:");
  console.log("Public Address:", wallet.address);
  console.log("Private Key:", wallet.privateKey);
  console.log("Mnemonic Phrase:", wallet.mnemonic.phrase);
}

export const generateNewWalletOnSolana = () => {
  // Generate a new keypair
  const keypair = Keypair.generate();

  // Get the public and private keys
  const publicKey = keypair.publicKey.toBase58();
  const secretKey = Buffer.from(keypair.secretKey).toString("hex");

  console.log("Solana Wallet Created:");
  console.log("Public Key (Wallet Address):", publicKey);
  console.log("Secret Key (Private Key):", secretKey);
}


export async function createSolanaWallet() {
  // Step 1: Generate a 12-word mnemonic phrase
  const mnemonic = bip39.generateMnemonic();

  // Step 2: Convert mnemonic into a seed
  const seed = await bip39.mnemonicToSeed(mnemonic);

  // Step 3: Derive a private key using Solana's standard derivation path
  const derivationPath = "m/44'/501'/0'/0'"; // Standard Solana path
  const derivedSeed = derivePath(derivationPath, seed.toString("hex")).key;

  // Step 4: Generate a Keypair from the derived seed
  const keypair = Keypair.fromSeed(derivedSeed);

  // Step 5: Display mnemonic and wallet details
  console.log("✅ New Solana Wallet Created:");
  console.log("Mnemonic Phrase:", mnemonic);
  console.log("Public Address:", keypair.publicKey.toBase58());

  return { mnemonic, publicKey: keypair.publicKey.toBase58() };
}