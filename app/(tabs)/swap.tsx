import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import TabContainer from "../modules/swap-module/TabContainer";
import useSwapContoller from "../modules/swap-module/useSwapController";
import SingleSwapContainer from "../modules/swap-module/SingleSwapContainer";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { useAppContext } from "../context/ParentContext";

const SwapScreen = () => {
  const { currentTabIndex, onChangeTabIndex, toTokenValue,
    fromTokenValue, onChangeFromTokenValue, onChangeToTokenValue } = useSwapContoller();

  const { fromCoin, toCoin } = useAppContext();

  const isActive = fromCoin && toCoin;

  return(
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TabContainer
          currentTabIndex={currentTabIndex}
          onChangeTabIndex={onChangeTabIndex}
         />
        <View style={styles.contentContainer}>
          {currentTabIndex === 0 ? (
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={styles.swapTopContainer}>
                <SingleSwapContainer
                  coinOrToken={fromCoin}
                  tokenValue={fromTokenValue}
                  enableTextInput={true}
                  onChangeTextInput={onChangeFromTokenValue}
                  source="from"
                />
                <SingleSwapContainer
                  coinOrToken={toCoin}
                  tokenValue={toTokenValue}
                  enableTextInput={false}
                  onChangeTextInput={onChangeToTokenValue}
                  source="to"
                />
                <View style={styles.swapIconFixedContainer}>
                  <MaterialCommunityIcons 
                    name="swap-vertical-variant" 
                    size={28} 
                    color="gray"
                  />
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.buttonStyles, {
                  backgroundColor: isActive ? "teal" : Colors.light.greyExtraLight1
                }]}
                disabled={!isActive}
              >
                <ThemedText 
                  type="textSMSemibold" 
                  style={[styles.buttonText, {
                    color: isActive ? "white" : 'gray'
                  }]}
                >
                  Continue
                </ThemedText>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text>Hot tokens</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

export default SwapScreen;

const [ WIDTH, HEIGHT ] = [40, 40];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  swapTopContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10
  },
  swapIconFixedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH,
    height: HEIGHT,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -(WIDTH / 2),
    marginTop: -(HEIGHT / 2),
    borderRadius: WIDTH / 2,
    backgroundColor: 'rgb(242, 242, 242)',
  },
  buttonStyles: {
    width: '100%',
    height: 48,
    borderRadius: 48 / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  buttonText: {
  }
});