export type CoinType = {
  chain: {
    title: string,
    symbol: string,
  },
  cryptoNativeValue: string,
  quantity: string,
}

export type NftType = {
  chain: {
    title: string,
    symbol: string,
  },
  cryptoNativeValue: string,
  quantity: string,
  tokenId: string,
  metadataUrl: string,
  nftImageUrl: string,
};

export type WalletType = {
  walletName: string;
  walletId: string;
  chain: string;
  amount: number;
  coins?: CoinType[];
  nfts?: NftType[];
}

export const walletsAdded: WalletType[] = [
  { 
    walletName: 'Ethereum', 
    walletId: '0x1234567890',  
    chain: 'eth', 
    amount: 20.0, 
    coins: [
      { chain: { title: 'Ethereum', symbol: 'ETH' }, cryptoNativeValue: '3431.10', quantity: '0.0001' },
      { chain: { title: 'Ethereum', symbol: 'ETH' }, cryptoNativeValue: '3431.10', quantity: '0.0001' },
      { chain: { title: 'Solana', symbol: 'SOL' }, cryptoNativeValue: '150.25', quantity: '0.5' },
      { chain: { title: 'Binance Smart Chain', symbol: 'BNB' }, cryptoNativeValue: '450.75', quantity: '1.2' }
    ],
    nfts: [
      { chain: { title: 'Ethereum', symbol: 'ETH' }, 
        cryptoNativeValue: '3431.10', 
        quantity: '0.0001', 
        tokenId  : '0x1234567890', 
        metadataUrl: 'https://www.google.com', 
        nftImageUrl: 'https://www.google.com' 
        }, 
      { chain: { title: 'Solana', symbol: 'SOL' }, 
        cryptoNativeValue: '150.25', 
        quantity: '0.5', 
        tokenId  : '0x1234567890', 
        metadataUrl: 'https://www.google.com', 
        nftImageUrl: 'https://www.google.com' 
        },
      { chain: { title: 'Binance Smart Chain', symbol: 'BNB' }, 
        cryptoNativeValue: '450.75', 
        quantity: '1.2', 
        tokenId  : '0x1234567890', 
        metadataUrl: 'https://www.google.com', 
        nftImageUrl: 'https://www.google.com' 
      }
    ]
  },
  { walletName: 'Solana', walletId: '0x1234567891',  chain: 'sol', amount: 10.0, coins: [], nfts: [] },
];