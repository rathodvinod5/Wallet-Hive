const allImages: { [key: string]: string } = {
  ethereum: require('../../assets/images/crypto-logos/ethereum.svg'),
  solana: require('../../assets/images/crypto-logos/solana.svg'),
//   btc: require('../assets/images/btc.png'),
//   usdt: require('../assets/images/usdt.png'),
//   dai: require('../assets/images/dai.png'),
//   usdc: require('../assets/images/usdc.png'),
}
export default function getImages(chain: keyof typeof allImages) {
    console.log('chain: ', chain);
    return allImages[chain] ? allImages[chain] : allImages['eth'];
}