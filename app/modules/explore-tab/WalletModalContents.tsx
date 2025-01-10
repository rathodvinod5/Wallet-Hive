import HeaderComponent from '@/components/ui/header/HeaderComponent';
import { View, StyleSheet, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';


const WalletModalContents = () => {
  return(
    <View style={styles.container}>
      <HeaderComponent
        title='Wallets' 
        leftItem={<Entypo name="cross" size={28} color="gray" />}
        rightItem={<Entypo name="plus" size={24} color="gray" />}
      />

      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.titleSmall}>Wallets</ThemedText>
        <View style={styles.itemLayout}>
          <View style={styles.itemLeftContainer} />
          <View style={styles.middleContainer}>
            <Text>Ethereum</Text>
            <Text>0x...C800</Text>
          </View>
          <Entypo name="dots-three-vertical" size={22} color="gray" />
        </View>
      </ThemedView>
    </View>
  );
};

export default WalletModalContents;

const styles = StyleSheet.create({
  container: {   
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleSmall: {
    fontSize: 12,
  },
  contentContainer: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  itemLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLeftContainer: {
    padding: 4,
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: 'lightgrey'
  },
  middleContainer: {
    flex: 1,
    paddingHorizontal: 10
  }
});