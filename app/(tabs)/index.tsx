import { Image, StyleSheet, Platform, Text, Modal, View, 
  TouchableOpacity, VirtualizedList } from 'react-native';
// import { Link } from "expo-router";
import Screen from '@/components/Screen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SearchInput from '@/components/ui/search-input/SearchInput';
import { ThemedText } from '@/components/ThemedText';
import BalanceParentContainer from '../modules/explore-tab/BalanceParentContainer';
import FeatureContainer from '../modules/explore-tab/FeatureContainer';
import CryptoNFTTabContainer from '../modules/explore-tab/CryptoNFTTabContainer';
import useParentController from '../modules/explore-tab/ParentController';
import ModalHandler from '../modules/explore-tab/ModalHandler';
import WalletModalContents from '../modules/explore-tab/WalletModalContents';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import ManageCrypto from '../ManageCrypto';


export default function HomeScreen() {
  const { showWalletModal, toggleWalletModal, showManageCryptoModal, 
    toggleManageCryptoModal } = useParentController();

  return(
    <Screen>
      <View style={styles.parentContainer}>
        <ModalHandler 
          isVisible={showWalletModal || showManageCryptoModal}
          onClose={showWalletModal ? toggleWalletModal : toggleManageCryptoModal}
        >
          {showWalletModal ? (
            <WalletModalContents 
              onPressClose={toggleWalletModal} 
              onPressAdd={() => {}} 
            />
          ) : (
            <ManageCrypto
              onPressClose={toggleManageCryptoModal} 
              onPressAdd={() => {}} 
            />
          )}
        </ModalHandler>

        <View style={styles.topContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={{ padding: 8 }}
          >
            <MaterialIcons name="settings" size={26} color="black" />
          </TouchableOpacity>
          <ThemedText type="textMDSemibold">Home</ThemedText>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={toggleManageCryptoModal}
            style={{ padding: 8 }}
          >
            <AntDesign name="pluscircle" size={26} color="gray" />
          </TouchableOpacity>
          {/* <Link href={'/modal'}></Link> */}
        </View>

        <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={<View />}
        >
          <View style={styles.contentContainer}>
            <SearchInput />
            <BalanceParentContainer 
              onPressOpenWalletModal={toggleWalletModal} 
            />
            <FeatureContainer />
            <CryptoNFTTabContainer />
          </View>
        </ParallaxScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // paddingHorizontal: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '600'
  },
  contentContainer: {
    flex: 1,
    paddingTop: 20,
    // paddingHorizontal: 20
  }
});
