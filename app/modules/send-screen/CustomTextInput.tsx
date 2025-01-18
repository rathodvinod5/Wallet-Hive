import SearchInput from "@/components/ui/search-input/SearchInput";
import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, StyleProp, ViewStyle, KeyboardTypeOptions } from "react-native";

type CustomTextInputWithLabelProps = {
  label: string;
  placeHolderText?: string;
  renderItemDirection?: 'left' | 'right';
  renderItem?: React.ReactNode;
  containerCustomStyles?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined
}

const CustomTextInputWithLabel = ({
  label,
  placeHolderText="Send",
  renderItemDirection='left',
  renderItem,
  containerCustomStyles,
  onChangeText,
  keyboardType,
}: CustomTextInputWithLabelProps) => {
  return(
    <View style={[styles.container]}>
      <Text style={styles.labelStyles}>{label}</Text>
      <View style={[styles.inputContainer, containerCustomStyles]}>
        {renderItem && renderItemDirection === 'left' ? renderItem : null}
        <SearchInput
          customContainerCss={styles.customContainerStyles}
          customTextInputCss={{ paddingLeft: 10, }}
          onUpdateTextInput={onChangeText}
          showSearchIcon={false}
          placeHolderText={placeHolderText}
          keyboardType={keyboardType}
        />
        {renderItem && renderItemDirection === 'right' ? renderItem : null}
      </View>
    </View>
  );
}

export default CustomTextInputWithLabel;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    gap: 6
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.light.greyExtraLight1
  },
  labelStyles: {
    fontSize: 18,
    fontWeight: '600',
    color: 'grey'
  },
  customContainerStyles: { borderRadius: 4, flex: 1,  backgroundColor: 'transparent'}
});