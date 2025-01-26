import { ThemedText } from "@/components/ThemedText";
import TabButton from "@/components/ui/button/TabButton";
import useExploreTabController from "@/hooks/useExploreTabController";
import { View, StyleSheet, FlatList } from "react-native";
import { transactionListData, TransactionObjType } from "@/app/data/DATA";
import { Link } from "expo-router";
import { useAppContext } from "@/app/context/ParentContext";
import { CoinType } from "@/app/data/WalletsData";

const CryptoNFTTabContainer = () => {
  const { activeTab, onChangeTab } = useExploreTabController();
  const { selectedWallet } = useAppContext();
  const { coins, nfts } = selectedWallet || { coins: [], nfts: [] };

  return(
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TabButton 
          index={0} 
          title="Crypto" 
          isActive={activeTab === 0} 
          onPressHandler={onChangeTab} 
        />
        <TabButton 
          index={1} 
          title="NFT's" 
          isActive={activeTab === 1} 
          onPressHandler={onChangeTab}
        />
      </View>

      {coins && coins.length > 0 && activeTab === 0 ? (
        <View>
          {coins?.map((coin, index) => <RenderCoinItem key={index} item={coin} />)}
        </View>
       ) : nfts && nfts.length > 0 && activeTab === 1 ? (
        <View>
          {nfts?.map((coin, index) => <RenderCoinItem key={index} item={coin} />)}
        </View>
       ) : (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <ThemedText type="textMDSemibold">No data</ThemedText>
        </View>
      )}
      
      {/* <FlatList
        data={transactionListData}
        keyExtractor={(item, index) => 'list-item-'+index} 
        renderItem={(item) => <RenderItem item={item.item} />}
        contentContainerStyle={styles.flatlistContainer}
      /> */}
    </View>
  );
}

export default CryptoNFTTabContainer;

// export const RenderFlatlistForCoinAndNFT = () => {
//   return(
//     <FlatList
//       data={transactionListData}
//       keyExtractor={(item, index) => 'list-item-'+index} 
//       renderItem={(item) => <RenderItem item={item.item} />}
//       contentContainerStyle={styles.flatlistContainer}
//     />
//   );
// }

export const RenderCoinItem = ({ item } : { item: CoinType }) => {
  return(
    <View style={{ marginVertical: 8 }}>
      <Link href={"/coindetailsscreen"}>
        <View style={styles.listItemObject}>
          <View style={styles.itemLeftContainer}>
          </View>
          <View style={styles.itemRightContainer}>
            <View style={styles.recordContainer}>
              <ThemedText type="textSMSemibold">{item.chain.title}</ThemedText>
              <ThemedText type="textSMSemibold">{item.quantity}</ThemedText>
            </View>
            <View style={styles.recordContainer}>
              <ThemedText type="textSMSemibold">{item.cryptoNativeValue}</ThemedText>
              <ThemedText type="textSMSemibold">{`$0.00`}</ThemedText>
            </View>
          </View>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },
  activeBottomLine: {
    width: 30,
    height: 4,
    backgroundColor: 'slateblue'
  },
  listItemObject: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    gap: 4
  },
  flatlistContainer: { 
    width: '100%', 
    // borderWidth: 1, 
    marginTop: 20 
  },
  itemLeftContainer: {
    padding: 4,
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: 'lightgrey'
  },
  itemRightContainer: {
    flex: 1,
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});