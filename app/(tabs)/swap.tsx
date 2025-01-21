import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import TabContainer from "../modules/swap-module/TabContainer";
import useSwapContoller from "../modules/swap-module/useSwapController";
import SingleSwapContainer from "../modules/swap-module/SingleSwapContainer";

const SwapScreen = () => {
  const { currentTabIndex, onChangeToken, onChangeTabIndex, fromToken, toToken, toTokenValue,
    fromTokenValue, onChangeFromTokenValue, onChangeToTokenValue } = useSwapContoller();

  return(
    <View style={styles.container}>
      <SafeAreaView>
        <TabContainer
          currentTabIndex={currentTabIndex}
          onChangeTabIndex={onChangeTabIndex}
         />
        <View style={styles.contentContainer}>
          {currentTabIndex === 0 ? (
            <View style={styles.swapTopContainer}>
              <SingleSwapContainer
                token={fromToken}
                tokenValue={fromTokenValue}
                enableTextInput={true}
                onChangeTextInput={onChangeFromTokenValue}
              />
              <SingleSwapContainer
                token={toToken}
                tokenValue={toTokenValue}
                enableTextInput={false}
                onChangeTextInput={onChangeToTokenValue}
              />
              <View style={styles.swapIconFixedContainer}>
                <MaterialCommunityIcons 
                  name="swap-vertical-variant" 
                  size={28} 
                  color="gray"
                />
              </View>
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
  }
});