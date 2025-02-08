import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, 
  SystemProgram, Transaction, type PublicKeyData } from '@solana/web3.js';
import { ethers, type Provider } from 'ethers';
import * as bip39 from "bip39";
import * as Crypto from "expo-crypto";

export enum AddressObjectEnum {
  WALLET = "address",
  CONTRACT = "contract",
  PROGRAMME = "programme",
  DOESNOTEXISTS = "doesnotExists"
};

export type WalletStatus = {
  status: AddressObjectEnum;
  publicKey?: PublicKey | null;
  balance: number | null;
};

async function getBalance(provider: Provider, address: string) {
  const balance = await provider.getBalance(address);
  console.log(`Balance in Wei: ${balance.toString()}`);
  
  // Convert Wei to ETH
  const balanceInEth = ethers.formatEther(balance);
  console.log(`Balance in ETH: ${balanceInEth} ETH`);
  return balanceInEth;
}


export const validateEthAddress = (address: string) => {

  async function isEthereumWallet(provider: Provider, address: string) {
    const code = await provider.getCode(address);
    // return code === "0x"; // If no bytecode, it's a wallet
    let balance: string = "0.00";
    if(code === "0x") {
      balance = await getBalance(provider, address);
    }

    return {
      status: !code ? AddressObjectEnum.DOESNOTEXISTS 
        : code === "0x" ? AddressObjectEnum.WALLET : AddressObjectEnum.PROGRAMME,
      publicKey: null,
      balance: Number(balance),
    } as WalletStatus;
  }
    
  const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.SEPOLIA_KEY}`);
  
  return isEthereumWallet(provider, address).then(wallet => {
    // console.log(wallet ? "Wallet Address" : "Smart Contract Address");
    // return isWallet ? AddressObjectEnum.WALLET : AddressObjectEnum.CONTRACT;
    return wallet;
  });
}


export const validateSolAddress = (address: string, secretKey?: string) => {

  async function isSolanaWallet(address: string) {
    const connection = new Connection("https://api.devnet.solana.com");
    // if(secretKey) {
    //   const solanaSeed = new Uint8Array(secretKey); // Ensure seed is 32 bytes for Solana
    //   const solKeypair = Keypair.fromSeed(solanaSeed);
    // }
    const publicKey = new PublicKey(address);
    await connection.getLatestBlockhash();

    // airdropSOL(address, publicKey, 1) // Airdrops 2 SOL
    //   .then(signature => console.log("✅ Airdrop Successful! Tx:", signature))
    //   .catch(error => console.error("❌ Airdrop Failed:", error));

    await connection.getLatestBlockhash();
    // const balance = await connection.getBalance(publicKey);
    const accountInfo = await connection.getAccountInfo(publicKey);
    console.log('accountInfo: ', JSON.stringify(accountInfo, null, 2))
    // if (!accountInfo) {
    //   return false; // Address doesn't exist on the blockchain
    // }
    // return accountInfo.executable === false; // Non-executable accounts are wallets

    return {
      status: !accountInfo ? AddressObjectEnum.DOESNOTEXISTS 
        : accountInfo.executable === false ? AddressObjectEnum.WALLET : AddressObjectEnum.PROGRAMME,
      publicKey: publicKey,
      balance: accountInfo?.lamports,
    } as WalletStatus;
  }
  
  return isSolanaWallet(address).then(walletObj => {
    // console.log(isWallet ? "Wallet Address" : "Program Address");
    // return isWallet ? AddressObjectEnum.WALLET : AddressObjectEnum.PROGRAMME;
    return walletObj;
  });
}


export const airdropSOL = async (walletAddress: string, publicKey: PublicKey, amount = 1) => {
  try {
    const connection = new Connection("https://api.devnet.solana.com", {
      commitment: "confirmed",
    });

    // Convert wallet address to PublicKey
    // const publicKey = new PublicKey(walletAddress);

    // Airdrop request (amount in lamports)
    const signature = await connection.requestAirdrop(
      publicKey,
      amount * LAMPORTS_PER_SOL
    );

    // Use `getLatestBlockhash` and `confirmTransaction` in the new way
    const latestBlockhash = await connection.getLatestBlockhash();
    await connection.confirmTransaction({
      signature,
      blockhash: latestBlockhash.blockhash,
      lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
    });

    console.log(`✅ Airdropped ${amount} SOL to ${walletAddress}. Tx:`, signature);
    return signature;
  } catch (error) {
    // console.error("❌ Airdrop Failed:", error);
    throw error;
  }
};