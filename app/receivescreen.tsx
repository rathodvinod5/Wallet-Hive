import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import QRCode from 'react-native-qrcode-svg';
import Ionicons from '@expo/vector-icons/Ionicons';
import IconButton from "@/components/ui/button/IconButton";
import HeaderComponent from "@/components/ui/header/HeaderComponent";

const ReceiveScreen = () => {
  const { back } = useRouter();
  const onPressClose = () => back();

  return(
    <View style={styles.container}>
      <HeaderComponent
        title="Receive" 
        leftItem={(
          <IconButton onPress={onPressClose}>
            <Ionicons name="arrow-back-outline" size={28} color="gray" />
          </IconButton>
        )}
      />

      <View style={styles.innContainer}>
        <QRCode
          value={"0x85d9D9436065cA8b6EF505DB98654BAa72e1A255"} // The wallet ID to encode in the QR code
          size={200}       // Size of the QR code
          color="black"    // QR code color
          backgroundColor="white" // Background color
        />
      </View>
    </View>
  );
}

export default ReceiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  innContainer: {
    flex: 1,
  }
});