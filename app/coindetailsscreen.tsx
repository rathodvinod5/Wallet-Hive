import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import IconButton from '@/components/ui/button/IconButton';
import HeaderComponent from "@/components/ui/header/HeaderComponent";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import FeatureContainer from "./modules/explore-tab/FeatureContainer";
import { ThemedView } from "@/components/ThemedView";

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

      <View style={styles.innContainer}>
        <View style={styles.imageContainer} />
        <ThemedText type="textELSemibold" style={styles.amountStyles}>
          0 ETH
        </ThemedText>
        <ThemedText style={styles.convertToDollarText}>0 ETH</ThemedText>
        <FeatureContainer />

        <View style={{ paddingTop: 20 }}>
          <View style={styles.listItemObject}>
            <View style={styles.itemLeftContainer} />
            <View style={styles.middleContainer}>
              <ThemedText type="textSMSemibold" style={{ lineHeight: 30 }}>Start earning</ThemedText>
              <ThemedText style={{ fontSize: 12 }}>Start earning on your ETH</ThemedText>
            </View>
            <IconButton onPress={() => {}}>
              <ThemedView style={styles.buttonStyles}>
                <FontAwesome name="angle-right" size={20} color="gray" />
              </ThemedView>
            </IconButton>
          </View>
        </View>
      </View>
      </SafeAreaView>
    </View>
  );
}

export default CoinDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center'
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
  },
  innContainer: { 
    flex: 1, 
    alignItems: 'center', 
    paddingTop: 30
  },
  imageContainer: {
    padding: 4,
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: 'lightgrey'
  },
  amountStyles : { marginTop: 14, marginBottom: 4 },
  convertToDollarText: {
    fontSize: 14,
    color: 'grey',
    lineHeight: 18
  },
  listItemObject: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.light.greyExtraLight1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 20,
  },
  itemLeftContainer: {
    padding: 4,
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: 'lightgray'
  },
  middleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    backgroundColor: "transparent",
    padding: 6,
    borderRadius: 6,
  }
});