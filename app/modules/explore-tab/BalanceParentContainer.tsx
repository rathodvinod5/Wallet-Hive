import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { ThemedText } from "@/components/ThemedText";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import useExploreTabController from "@/hooks/useExploreTabController";
import IconButton from "@/components/ui/button/IconButton";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useAppContext } from "@/app/context/ParentContext";


const BalanceParentContainer = ({
  onPressOpenWalletModal
}: {
  onPressOpenWalletModal: () => void
}) => {
  const { showBalance, onPressShowAndBalance } = useExploreTabController();
  const { selectedWallet } = useAppContext();

  return(
    <View style={styles.container}>
      <View>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <View>
            {showBalance ? (
              <IconButton onPress={onPressShowAndBalance}>
                <Ionicons name="eye" size={24} color="gray" />
              </IconButton>
              ) : (
                <IconButton onPress={onPressShowAndBalance}>
                  <Ionicons name="eye-off" size={24} color="gray" />
                </IconButton>
              )}
          </View>
          <Link href={"/walletmodal"}>
            <View style={styles.innLeftContainer}>
              <ThemedText type="textSMSemibold" style={styles.walletChainName}>
                {selectedWallet ? selectedWallet.walletName : "Select or add Wallet"}
              </ThemedText>
              <Entypo name="select-arrows" size={16} color="gray" />
            </View>
          </Link>
        </View>
        <View style={styles.amountContainer}>
          {selectedWallet || showBalance ? (
            <ThemedText type="textELSemibold">
              {selectedWallet && showBalance ? (Number(selectedWallet?.amount) / 1e9) : "0.00"}
            </ThemedText>
          ) : (
            <View style={styles.starTextCont}>
              <FontAwesome6 name="star-of-life" size={18} color="grey" />
              <FontAwesome6 name="star-of-life" size={18} color="grey" />
              <FontAwesome6 name="star-of-life" size={18} color="grey" />
              <FontAwesome6 name="star-of-life" size={18} color="grey" />
              <FontAwesome6 name="star-of-life" size={18} color="grey" />
            </View>
          )}
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Link href="/copyaddressscreen">
          <ThemedView style={styles.buttonStyles}>
            <MaterialIcons name="content-copy" size={20} color="gray" />
          </ThemedView>
        </Link>
        <Link href="/scanqrcodescreen">
          <ThemedView style={styles.buttonStyles}>
            <MaterialCommunityIcons name="line-scan" size={20} color="gray" />
          </ThemedView>
        </Link>
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
    backgroundColor: Colors.light.greyExtraLight1,
    padding: 6,
    borderRadius: 6,
  },
  amountContainer: {
    marginTop: 10
  },
  starTextCont: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2
  }
});