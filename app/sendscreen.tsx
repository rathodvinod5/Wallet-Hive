import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import IconButton from "@/components/ui/button/IconButton";
import HeaderComponent from "@/components/ui/header/HeaderComponent";
import { Link, useRouter } from "expo-router";
import useSendScreenController from "./modules/send-screen/useSendScreenController";
import CustomTextInputWithLabel from "./modules/send-screen/CustomTextInput";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";


const SendScreen = () => {
  const { toAddress, amount, onChangeToAddress, onChangeAmount } = useSendScreenController();
  const { back } = useRouter();
  const onPressClose = () => back();

  return(
    <View style={styles.container}>
      <HeaderComponent
        title='Send ETH' 
        leftItem={(
          <IconButton onPress={onPressClose}>
            <Ionicons name="arrow-back-outline" size={28} color="gray" />
          </IconButton>
        )}
      />

      <View style={styles.contentStyles}>
        <CustomTextInputWithLabel 
          label="Wallet Address"
          placeHolderText="Enter Address"
          onChangeText={onChangeToAddress}
          renderItemDirection="right"
          renderItem={(
            <View style={styles.rightContainer}>
              <IconButton onPress={() => {}}>
                <ThemedView style={styles.buttonStyles}>
                  <ThemedText type="textSMSemibold" style={{ color: 'teal' }}>Paste</ThemedText>
                </ThemedView>
              </IconButton>
              <Link href="/copyaddressscreen">
                <ThemedView style={styles.buttonStyles}>
                    <MaterialCommunityIcons name="line-scan" size={20} color="teal" />
                </ThemedView>
              </Link>
            </View>
          )}
        /> 
        <CustomTextInputWithLabel 
          label="Wallet Address"
          placeHolderText="Enter Address"
          onChangeText={onChangeAmount}
          keyboardType={"numeric"}
          renderItemDirection="right"
          renderItem={(
            <View style={styles.rightContainer}>
              <IconButton onPress={() => {}}>
                <ThemedView style={styles.buttonStyles}>
                  <ThemedText type="textSMSemibold" style={{ color: 'teal' }}>
                    ETH
                  </ThemedText>
                </ThemedView>
              </IconButton>
            </View>
          )}
        />

       <View style={styles.buttonContainer}>
        <TouchableOpacity 
            activeOpacity={0.9} 
            // disabled={!isReceivable}
            style={[styles.buttonStyle, {
              // backgroundColor: isReceivable ? "teal" : "lightgray",
              backgroundColor: toAddress && amount ? "teal" : "lightgray",
            }]}
          >
            <Text style={styles.buttonLabel}>Send</Text>
          </TouchableOpacity>
       </View>
      </View>
    </View>
  );
}

export default SendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentStyles: {
    flex: 1,
    flexDirection: 'column',
    gap: 28,
    marginTop: 40,
  },
  rightContainer: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 18,
    paddingRight: 10
  },
  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightgrey',
    backgroundColor: "transparent",
    flex: 1,
  },
  buttonContainer: { flex: 1, marginTop: 100 },
  buttonStyle: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light.blackNew,
  },
});