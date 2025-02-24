export type IncDecStatusType = "INC" | "DEC";

export type AllowedChainsType = {
  title: string,
  symbol: string,
  isEnabled: boolean,
};

export type AllChainsType = { 
  chain: {
    title: string,
    symbol: string,
  },
  cryptoNativeValue: string,
  quantity: string,
  dollarConversionValue: string,
}

export type TransactionObjType = {
  chain: {
    title: string,
    symbol: string,
  },
  cryptoNativeValue: string,
  transactionType: string,
  transactionAmount: string,
  transactionDate: string,
  transactionTime: string,
  transactionStatus: string,
  chainIncDecStatus: IncDecStatusType,
  isEnabled?: boolean,
};

export const transactionListData: TransactionObjType[] = [
  {
    chain: {
      title: "Ethereum",
      symbol: "ETH",
    },
    cryptoNativeValue: "3431.10",
    transactionType: "Sent",
    transactionAmount: "0.0001",
    transactionDate: "2021-09-21",
    transactionTime: "10:00 AM",
    transactionStatus: "Success",
    chainIncDecStatus: "DEC",
  },
  {
    chain: {
      title: "Ethereum",
      symbol: "ETH",
    },
    cryptoNativeValue: "3431.10",
    transactionType: "Received",
    transactionAmount: "0.0001",
    transactionDate: "2021-09-21",
    transactionTime: "10:00 AM",
    transactionStatus: "Success",
    chainIncDecStatus: "INC",
  },
  {
    chain: {
      title: "Solana",
      symbol: "SOL",
    },
    cryptoNativeValue: "251.10",
    transactionType: "Sent",
    transactionAmount: "0.0001",
    transactionDate: "2021-09-21",
    transactionTime: "10:00 AM",
    transactionStatus: "Success",
    chainIncDecStatus: "DEC",
  },
  {
    chain: {
      title: "Solana",
      symbol: "SOL",
    },
    cryptoNativeValue: "251.10",
    transactionType: "Received",
    transactionAmount: "0.0001",
    transactionDate: "2021-09-21",
    transactionTime: "10:00 AM",
    transactionStatus: "Success",
    chainIncDecStatus: "INC",
  },
  {
    chain: {
      title: "Ethereum",
      symbol: "ETH",
    },
    cryptoNativeValue: "3431.10",
    transactionType: "Sent",
    transactionAmount: "0.0001",
    transactionDate: "2021-09-21",
    transactionTime: "10:00 AM",
    transactionStatus: "Success",
    chainIncDecStatus: "DEC",
  },
  {
    chain: {
      title: "Ethereum",
      symbol: "ETH",
    },
    cryptoNativeValue: "3431.10",
    transactionType: "Received",
    transactionAmount: "0.0001",
    transactionDate: "2021-09-21",
    transactionTime: "10:00 AM",
    transactionStatus: "Success",
    chainIncDecStatus: "INC",
  },
  {
    chain: {
      title: "Solana",
      symbol: "SOL",
    },
    cryptoNativeValue: "251.10",
    transactionType: "Sent",
    transactionAmount: "0.0001",
    transactionDate: "2021-09-21",
    transactionTime: "10:00 AM",
    transactionStatus: "Success",
    chainIncDecStatus: "DEC",
  }
];

export const allChains: AllChainsType[] = [
  {
    chain: {
      title: "Ethereum",
      symbol: "ETH",
    },
    cryptoNativeValue: "3431.10",
    quantity: "0.0001",
    dollarConversionValue: "$0.00",
  },
  {
    chain: {
      title: "Solana",
      symbol: "SOL",
    },
    cryptoNativeValue: "251.10",
    quantity: "0.0001",
    dollarConversionValue: "$0.00",
  },
  {
    chain: {
      title: "Bitcoin",
      symbol: "BTC",
    },
    cryptoNativeValue: "45000.00",
    quantity: "0.0001",
    dollarConversionValue: "$4.50",
  },
  {
    chain: {
      title: "Cardano",
      symbol: "ADA",
    },
    cryptoNativeValue: "2.30",
    quantity: "100",
    dollarConversionValue: "$230.00",
  },
  {
    chain: {
      title: "Polkadot",
      symbol: "DOT",
    },
    cryptoNativeValue: "30.00",
    quantity: "10",
    dollarConversionValue: "$300.00",
  },
]

export const chainsAllowed: AllowedChainsType[] = [
  {
    title: "Ethereum",
    symbol: "ETH",
    isEnabled: false,
  },
  {
    title: "Solana",
    symbol: "SOL",
    isEnabled: false,
  }
];