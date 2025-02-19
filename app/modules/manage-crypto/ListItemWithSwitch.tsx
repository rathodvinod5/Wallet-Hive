import { useState } from "react";
import { Switch, View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { AllowedChainsType } from "@/app/data/DATA";
import { Colors } from "@/constants/Colors";

type RenderItemProps<T> = {
  item: T;
  handleIsSelected: () => void,
};

export default function ListItemWithSwitch<T>({ 
  item, 
  handleIsSelected, 
}: RenderItemProps<T & AllowedChainsType>){
  const [isEnabled, setIsEnabled] = useState(item.isEnabled);

  const toggleIsEnabled = () => {
    setIsEnabled(!isEnabled);
    handleIsSelected();
  }

  return(
    <View style={styles.listItemObject}>
      <View style={styles.itemLeftContainer} />
      <View style={styles.itemRightContainer}>
        <View style={styles.recordContainer}>
          <ThemedText type="textSMSemibold">{item.title}</ThemedText>
        </View>
        <ThemedText type="textSMSemibold">{item.symbol}</ThemedText>
      </View>
      <Switch
        trackColor={{false: Colors.light.greyExtraLight1, true: 'blue'}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor={Colors.light.greyExtraLight1}
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
    // marginVertical: 8,
    gap: 4,
    // backgroundColor: Colors.light.greyExtraLight1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8
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