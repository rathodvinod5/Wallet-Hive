const allImages: { [key: string]: string } = {
  ethereum: require('../../assets/images/crypto-logos/ethereum.svg'),
  solana: require('../../assets/images/crypto-logos/solana.svg'),
  bitcoin: require('../../assets/images/crypto-logos/bitcoin-btc-logo.svg'),
  cardano: require('../../assets/images/crypto-logos/cardano-ada-logo.svg'),
  polkadot: require('../../assets/images/crypto-logos/polkadot-new-dot-logo.svg'),
}
export default function getImages(chain: keyof typeof allImages) {
    return allImages[chain] ? allImages[chain] : allImages['eth'];
}