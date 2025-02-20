import HeaderComponent from '@/components/ui/header/HeaderComponent';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import IconButton from '@/components/ui/button/IconButton';
import { useAppContext } from '@/app/context/ParentContext';
import { useRouter } from 'expo-router';


const WalletModalContents = ({
  onPressClose,
  onPressAdd,
}: {
  onPressClose: () => void,
  onPressAdd: () => void,
}) => {
  const { back } = useRouter();
  const { walletsAdded, walletsRemoved, onChangeWallet, onSelectRemovedItem } = useAppContext();

  const onSelectWalletModal = (walletId: string) => {
    onChangeWallet(walletId);
    back();
  }

  return(
    <View style={styles.container}>
      <HeaderComponent
        title='Wallets' 
        leftItem={(
          <IconButton onPress={onPressClose}>
            <Entypo name="cross" size={28} color="gray" />
          </IconButton>
        )}
        rightItem={(
          <IconButton onPress={onPressAdd}>
            <Entypo name="plus" size={24} color="gray" />
          </IconButton>
        )}
      />

      <ThemedView style={styles.contentContainer}>
        {walletsAdded ? (
          <View style={{ width: '100%' }}>
            <ThemedText style={styles.titleSmall}>Wallets</ThemedText>
            {walletsAdded?.map((wallet, index) => (
              <TouchableOpacity 
                key={'added-wallet-item-'+index+wallet.walletId} 
                style={styles.itemLayout}
                activeOpacity={0.9}
                onPress={() => onSelectWalletModal(wallet.walletId)}
              >
                <View style={styles.itemLeftContainer} />
                <View style={styles.middleContainer}>
                  <ThemedText type="textSMSemibold">{wallet.walletName}</ThemedText>
                  <Text>{wallet.walletId}</Text>
                </View>
                <Entypo name="dots-three-vertical" size={22} color="gray" />
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <ThemedText style={[styles.titleSmall, { fontSize: 18 }]}>
              No Active wallets found
            </ThemedText>
            <ThemedText style={[styles.titleSmall, { paddingBottom: 50 }]}>
              Please add new wallets or {'\n'} restore from removed list
            </ThemedText>
          </View>
        )}

        {walletsRemoved ? (
          <View style={{ width: '100%' }}>
            <ThemedText style={styles.titleSmall}>Removed Earlier</ThemedText>
            {walletsRemoved?.map((wallet, index) => (
              <TouchableOpacity 
                key={'removed-wallet-item-'+index+wallet.walletId} 
                style={styles.itemLayout}
                activeOpacity={0.9}
                onPress={() => onSelectRemovedItem(wallet)}
              >
                <View style={styles.itemLeftContainer} />
                <View style={styles.middleContainer}>
                  <ThemedText type="textSMSemibold">{wallet.walletName}</ThemedText>
                  <Text>{wallet.walletId}</Text>
                </View>
                <Entypo name="dots-three-vertical" size={22} color="gray" />
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </ThemedView>
    </View>
  );
};

export default WalletModalContents;

const styles = StyleSheet.create({
  container: {  
    flex: 1, 
    // height: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleSmall: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 30,
  },
  contentContainer: {
    flex: 1,
    // height: '100%',
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  itemLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    marginVertical: 4
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