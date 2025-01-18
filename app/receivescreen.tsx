import { View, Text, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import QRCode from 'react-native-qrcode-svg';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import IconButton from "@/components/ui/button/IconButton";
import HeaderComponent from "@/components/ui/header/HeaderComponent";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

const ReceiveScreen = () => {
  const { back } = useRouter();
  const onPressClose = () => back();

  const address = "0x85d9D9436065cA8b6EF505DB98654BAa72e1A255";

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
        <View style={styles.qrCodeContainer}>
          <QRCode
            value={address} // The wallet ID to encode in the QR code
            size={200}       // Size of the QR code
            color="black"    // QR code color
            backgroundColor="white" // Background color
          />
          <Text style={styles.addres}>
            0x85d9D9436065cA8b6EF505DB98654BAa72e1A255
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainer}>
            <ThemedView style={styles.buttonStyles}>
                <AntDesign name="copy1" size={26} color="black" />
            </ThemedView>
            <ThemedText type="textSMSemibold">Copy</ThemedText>
          </View>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  qrCodeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: 280,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 5,
  },
  addres: {
    fontSize: 16,
    fontWeight: '600',
    color: "gray",
    textAlign: 'center',
    paddingTop: 20
    // width: "80%"
  },
   buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 20
  },
  buttonStyles: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    // backgroundColor: 'lightgrey',
    backgroundColor: Colors.light.greyExtraLight1,
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 4
  }
});