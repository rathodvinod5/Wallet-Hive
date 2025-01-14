import { ThemedText } from "@/components/ThemedText";
import { View, Text, StyleSheet, Switch, Image } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { Colors } from "@/constants/Colors";
const Crypto = require('../../../assets/images/CryptoWallet.svg');

const AddWalletModalContent = () => {
  return(
    <View style={styles.container}>
      <Image 
        source={Crypto} 
        alt="wallet-svg" 
        width={100} 
        height={60} 
      />
      {/* <Crypto style={{ width: 100, height: 60 }} /> */}
      <View style={styles.listItemObject}>
        <View style={styles.itemLeftContainer} />
        <View style={styles.itemRightContainer}>
          <ThemedText type="textSMSemibold">Create New Wallet</ThemedText>
          <ThemedText type="textSM" style={{ color: 'grey' }}>
            Secrete phase
          </ThemedText>
        </View>
        <Feather name="chevron-right" size={28} color="gray" />
      </View>
      <View style={styles.listItemObject}>
        <View style={styles.itemLeftContainer} />
        <View style={styles.itemRightContainer}>
          <ThemedText type="textSMSemibold">Add Existing Wallet</ThemedText>
          <ThemedText type="textSM" style={{ color: 'grey' }}>
            Secrete phase
          </ThemedText>
        </View>
        <Feather name="chevron-right" size={28} color="gray" />
      </View> 
    </View>
  );
}

export default AddWalletModalContent;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  listItemObject: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    gap: 4,
    backgroundColor: Colors['light']['greyExtraLight'], // '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6
  },
  flatlistContainer: { 
    width: '100%', 
    marginTop: 20 
  },
  itemLeftContainer: {
    padding: 4,
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: 'lightgray'
  },
  itemRightContainer: {
    flex: 1,
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});