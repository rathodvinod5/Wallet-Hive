import { Keypair } from "@solana/web3.js";
import { Wallet } from "ethers";

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

export const generateNewWalletOnEthereum = () => {
    // Generate a new Ethereum wallet
  const wallet = Wallet.createRandom();

  if(!wallet.mnemonic) return;

  console.log("Ethereum Wallet Created:");
  console.log("Public Address:", wallet.address);
  console.log("Private Key:", wallet.privateKey);
  console.log("Mnemonic Phrase:", wallet.mnemonic.phrase);
}