export type IncDecStatusType = "INC" | "DEC";

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
      title: "Etherum",
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
      title: "Etherum",
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
      title: "Etherum",
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
      title: "Etherum",
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