import { View, StyleSheet, TouchableOpacity } from "react-native";
import useSwapContoller from "./useSwapController";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

const TabContainer = ({
  currentTabIndex,
  onChangeTabIndex = (index: number) => {},
}: {
    currentTabIndex: number,
    onChangeTabIndex: (index: number) => void,
}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          activeOpacity={0.9} 
          onPress={() => onChangeTabIndex(0)}
          style={styles.tabButtonStyles}
        >
          <ThemedText type="textSMSemibold" 
            style={[styles.tabTitle, { 
              color: currentTabIndex === 0 ? Colors.light.blackNew : "gray" 
            }]}
          >
            Swap
          </ThemedText>
          <View style={[styles.tabIndicator, { 
            backgroundColor: currentTabIndex === 0 ? 'teal' : "" 
            }]} 
          />
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={0.9} 
          onPress={() => onChangeTabIndex(1)}
          style={styles.tabButtonStyles}
        >
          <ThemedText type="textSMSemibold" 
            style={[styles.tabTitle, { 
              color : currentTabIndex === 1 ? Colors.light.blackNew : "gray" 
            }]}
          >
            Hot Tokens
          </ThemedText>
          <View style={[styles.tabIndicator, { 
            backgroundColor: currentTabIndex === 1 ? 'teal' : "" 
            }]} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TabContainer;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 20,
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  tabButtonStyles: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  tabTitle: {

  },
  tabIndicator: {
    height: 4,
    width: 30,
    borderRadius: 4
  }
});