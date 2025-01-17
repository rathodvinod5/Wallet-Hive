import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import IconButton from '@/components/ui/button/IconButton';
import HeaderComponent from "@/components/ui/header/HeaderComponent";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

const CoinDetailsScreen = () => {
   const { back } = useRouter();
  const onPressClose = () => back();

  return(
    <View style={styles.container}>
      <SafeAreaView>
      <HeaderComponent
        customTitleComponent={(
          <View style={{ alignItems: 'center' }}>
            <ThemedText style={styles.titleStyles}>ETH</ThemedText>
            <View style={styles.headerInnContainer}>
              <Text style={styles.headingStyles}>COIN</Text>
              <Text style={styles.headingStyles}>Ethereum</Text>
            </View>
          </View>
        )}
        leftItem={(
          <IconButton onPress={onPressClose}>
            <Ionicons name="arrow-back-outline" size={28} color="gray" />
          </IconButton>
        )}
      />
      </SafeAreaView>
    </View>
  );
}

export default CoinDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleStyles: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light.blackNew,
    marginBottom: 4
  },
  headerInnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  headingStyles: {
    color: 'grey'
  }
});