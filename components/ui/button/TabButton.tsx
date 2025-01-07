import { ThemedText } from "@/components/ThemedText";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const TabButton = ({
  index,
  title,
  isActive = false,
  onPressHandler,
}: {
  index: number,
  title: string,
  isActive: boolean,
  onPressHandler?: (index: number) => void
}) => {
  return(
    <View style={styles.buttonContainer} key={`tab-key-${index}`}>
      <TouchableOpacity 
        activeOpacity={0.8} 
        onPress={() => onPressHandler && onPressHandler(index)}
      >
        <ThemedText 
          type="textMDSemibold"
          style={{ color: isActive ? 'black' : 'grey' }}
        >
            {title}
        </ThemedText>
      </TouchableOpacity>
      <View style={isActive ? styles.activeBottomLine : styles.inactiveBottomLine} />
    </View>
  );
}

export default TabButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },
  activeBottomLine: {
    width: 30,
    height: 4,
    backgroundColor: 'slateblue'
  },
  inactiveBottomLine: {
    height: 4,
    backgroundColor: 'transparent'
  }
});