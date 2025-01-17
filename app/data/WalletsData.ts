
export type WalletType = {
  walletName: string;
  walletId: string;
  chain: string;
  amount: number;
  nfts: string[];
}

export const walletsAdded: WalletType[] = [
  { walletName: 'Ethereum', walletId: '0x1234567890',  chain: 'eth', amount: 20.0, nfts: [] },
  { walletName: 'Solana', walletId: '0x1234567890',  chain: 'sol', amount: 10.0, nfts: [] },
];