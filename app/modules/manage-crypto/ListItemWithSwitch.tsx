import { useState } from "react";
import { Switch, View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { TransactionObjType } from "@/app/data/DATA";
import { Colors } from "@/constants/Colors";

type RenderItemProps<T> = {
  item: T;
  // handleIsSelected: () => void,
};

export default function ListItemWithSwitch<T>({ 
  item, 
  // handleIsSelected, 
}: RenderItemProps<T & TransactionObjType>){
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleIsEnabled = () => {
    setIsEnabled(!isEnabled);
  }

  return(
    <View style={styles.listItemObject}>
      <View style={styles.itemLeftContainer} />
      <View style={styles.itemRightContainer}>
        <View style={styles.recordContainer}>
          <ThemedText type="textSMSemibold">{item.chain.title}</ThemedText>
          <ThemedText type="textSMSemibold">{item.transactionAmount}</ThemedText>
        </View>
        <ThemedText type="textSMSemibold">{item.chain.title}</ThemedText>
      </View>
      <Switch
        trackColor={{false: 'lightgray', true: 'blue'}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="gray"
        onChange={toggleIsEnabled}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItemObject: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    gap: 4,
    backgroundColor: Colors.light.greyExtraLight1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6
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