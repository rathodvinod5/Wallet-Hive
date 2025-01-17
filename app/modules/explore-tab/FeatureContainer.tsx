import { View, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import IconButton from "@/components/ui/button/IconButton";
import Foundation from '@expo/vector-icons/Foundation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from "@/constants/Colors";

const FeatureContainer = () => {
  return(
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <IconButton onPress={() => {}}>
          <ThemedView style={styles.buttonStyles}>
            <AntDesign name="arrowup" size={26} color="gray" />
          </ThemedView>
        </IconButton>
        <ThemedText type="textSMSemibold">Send</ThemedText>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton onPress={() => {}}>
          <ThemedView style={styles.buttonStyles}>
            <AntDesign name="arrowdown" size={26} color="gray" />
          </ThemedView>
        </IconButton>
        <ThemedText type="textSMSemibold">Receive</ThemedText>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton onPress={() => {}}>
          <ThemedView style={styles.buttonStyles}>
            <Foundation name="credit-card" size={26} color="gray" />
          </ThemedView>
        </IconButton>
        <ThemedText type="textSMSemibold">Buy</ThemedText>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton onPress={() => {}}>
          <ThemedView style={styles.buttonStyles}>
            <MaterialIcons name="history" size={26} color="gray" />
          </ThemedView>
        </IconButton>
        <ThemedText type="textSMSemibold">History</ThemedText>
      </View>
    </View>
  );
}

export default FeatureContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginTop: 30
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },
  buttonStyles: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    // backgroundColor: 'lightgrey',
    backgroundColor: Colors.light.greyExtraLight1,
    justifyContent: 'center',
    alignItems: "center"
  }
});