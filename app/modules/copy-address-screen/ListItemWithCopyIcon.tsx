import { View, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { WalletType } from "@/app/data/WalletsData";
import { ThemedView } from "@/components/ThemedView";
import IconButton from "@/components/ui/button/IconButton";
import * as Clipboard from "expo-clipboard";

type RenderItemProps<T> = {
  item: T;
};

export default function ListItemWithCopyIcon<T>({ 
  item, 
}: RenderItemProps<T & WalletType>){

  const copyToClipboard = async () => {
    try {
      Clipboard.setStringAsync(item.walletId);
      // fetchCopiedText();
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    console.log(text);
  };

  return(
    <View style={styles.listItemObject}>
      <View style={styles.itemLeftContainer} />
      <View style={styles.itemRightContainer}>
        <ThemedText type="textSMSemibold">{item.walletName}</ThemedText>
        <ThemedText style={{ fontSize: 12 }}>{item.walletId}</ThemedText>
      </View>
      <IconButton onPress={copyToClipboard}>
        <ThemedView style={styles.buttonStyles}>
          <MaterialIcons name="content-copy" size={20} color="gray" />
        </ThemedView>
      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemObject: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  itemLeftContainer: {
    padding: 4,
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: 'lightgray'
  },
  itemRightContainer: {
    flex: 1,
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.greyExtraLight1,
    padding: 6,
    borderRadius: 6,
  }
});