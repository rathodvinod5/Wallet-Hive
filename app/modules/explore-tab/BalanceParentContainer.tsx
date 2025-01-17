import { ThemedText } from "@/components/ThemedText";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import useExploreTabController from "@/hooks/useExploreTabController";
import IconButton from "@/components/ui/button/IconButton";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";


const BalanceParentContainer = ({
  onPressOpenWalletModal
}: {
  onPressOpenWalletModal: () => void
}) => {
  const { showBalance } = useExploreTabController();

  return(
    <View style={styles.container}>
      <View>
        <Link
          href={"/walletmodal"} 
          // activeOpacity={0.8} 
          // onPress={onPressOpenWalletModal}
        >
          <View style={styles.innLeftContainer}>
            {showBalance ? (
              <Ionicons name="eye" size={24} color="gray" />
            ) : (
              <Ionicons name="eye-off" size={24} color="gray" />
            )}
            <ThemedText type="textSMSemibold" style={styles.walletChainName}>
              Etherum Wallet
            </ThemedText>
            <Entypo name="select-arrows" size={16} color="gray" />
          </View>
        </Link>
        <ThemedText type="textELSemibold">$0.00</ThemedText>
      </View>
      <View style={styles.rightContainer}>
        <Link href="/copyaddressscreen">
          <ThemedView style={styles.buttonStyles}>
            <MaterialIcons name="content-copy" size={20} color="gray" />
          </ThemedView>
        </Link>
        <IconButton onPress={() => {}}>
          <ThemedView style={styles.buttonStyles}>
            <MaterialCommunityIcons name="line-scan" size={20} color="gray" />
          </ThemedView>
        </IconButton>
        {/* <IconButton onPress={() => {}}>
          <ThemedView style={styles.buttonStyles}>
            <MaterialIcons name="notifications" size={20} color="gray" />
          </ThemedView>
        </IconButton> */}
      </View>
    </View>
  );
}

export default BalanceParentContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  innLeftContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10
  },
  walletChainName: {
    color: 'gray',
    marginHorizontal: 8
  },
  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightgrey',
    backgroundColor: Colors.light.greyExtraLight1,
    padding: 6,
    borderRadius: 6,
  }
});