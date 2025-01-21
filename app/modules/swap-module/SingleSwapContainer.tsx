import { StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from "@/constants/Colors";

const SingleSwapContainer = ({
  token,
  tokenValue,
  enableTextInput = false,
  onChangeTextInput,
}: {
  token: string,
  tokenValue: string,
  enableTextInput?: boolean,
  onChangeTextInput: (text: string) => void
}) => {
  return(
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftContainer}>
          <Text style={styles.smallTextStyles}>From</Text>
          <FontAwesome6 name="ethereum" size={14} color={Colors.light.blackNew} />
          <Text style={styles.smallTextStyles}>Ethereum</Text>
          <FontAwesome6 name="angle-down" size={14} color={'gray'} />
        </View>
        <View style={styles.topRightContainer}>
          <FontAwesome6 name="gas-pump" size={14} color={'gray'} />
          <Text style={styles.smallTextStyles}>0</Text>
        </View>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.topLeftContainer}>
          <View style={styles.imageContainer} />
          <Text style={styles.currStyles}>SOL</Text>
          <Entypo name="chevron-right" size={22} color="gray" />
        </View>
        <View style={styles.topRightContainer}>
          <TextInput
            placeholder=""
            value={tokenValue || "0"}
            style={[styles.currStyles, { color: 'gray', fontSize: 28 }]} 
            onChangeText={enableTextInput ? onChangeTextInput : undefined}
            keyboardType="number-pad"
          />
          {/* <Text >0</Text> */}
        </View>
      </View>
    </View>
  );
}


export default SingleSwapContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.greyExtraLight1,
    borderRadius: 10,
    // height: 140,
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 22,
    flexDirection: 'column',
    gap: 20
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeftContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 6
  },
  topRightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 8
  },
  smallTextStyles: {
    fontSize: 14,
    fontWeight: '600',
    color: 'gray'
  },
  imageContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'lightgrey',
    borderRadius: 48 / 2,
  },
  currStyles: {
    fontSize: 26,
    fontWeight: '600',
    color: Colors.light.blackNew,
    marginLeft: 6
  }
});