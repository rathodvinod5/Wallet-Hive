import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { AllChainsType } from "@/app/data/DATA";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";


export const ContentContainer = ({
  items,
  handleIsSelected,
}: {
  items: AllChainsType[] | null,
  handleIsSelected: (item: AllChainsType) => void
}) => {

  return(
    <FlatList
      data={items}
      keyExtractor={(item, index) => 'list-item-'+index} 
      renderItem={(item) => (
        <TouchableOpacity 
          activeOpacity={0.9} 
          onPress={() => handleIsSelected(item.item)}
        >
         <RenderItem item={item.item} />
       </TouchableOpacity>
      )}
      contentContainerStyle={styles.flatlistContainer}
    />
  );
}

export const RenderItem = ({ 
    item, 
  } : {
    item: AllChainsType, 
}) => {
  return(
    <View style={{ marginVertical: 3 }}>
      <View style={styles.listItemObject}>
        <View style={styles.itemLeftContainer}>
        </View>
        <View style={styles.itemRightContainer}>
          <View style={styles.recordContainer}>
            <ThemedText type="textSMSemibold" style={styles.textColor}>{item.chain.symbol}</ThemedText>
            <ThemedText type="textSMSemibold" style={styles.textColor}>{item.quantity}</ThemedText>
          </View>
          <View style={styles.recordContainer}>
            <ThemedText style={{ fontSize: 16, color: 'gray' }}>{item.chain.title}</ThemedText>
            <ThemedText type="textSMSemibold" style={styles.textColor}>{`$0.00`}</ThemedText>
          </View>
        </View>
      </View>
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
  },
  textColor: {
    color: Colors.light.blackNew
  }
});