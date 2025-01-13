import { useState } from "react";
import { NativeSyntheticEvent, StyleProp, StyleSheet, TextInput, TextInputChangeEventData, 
  TextStyle, View, ViewStyle } from "react-native";
import Feather from '@expo/vector-icons/Feather';

const SearchInput = ({
  customContainerCss,
  customTextInputCss,
}: {
  customContainerCss?: StyleProp<ViewStyle>,
  customTextInputCss?: StyleProp<TextStyle>
}) => {
  const [inputValue, setInputValue] = useState("");
  
  const handleOnChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setInputValue(e.nativeEvent.text);
  }

  return(
    <View style={[styles.container, customContainerCss]}>
      <TextInput
        placeholder="Search"
        value={inputValue}
        onChange={handleOnChange}
        style={[styles.textInput, customTextInputCss]}
      />
      <View style={styles.iconContainer}>
        <Feather name="search" size={24} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    height: 44,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 22,
  },
  textInput: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 24,
    fontSize: 16,
    fontWeight: '600',
    color: 'gray'
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 12,
    bottom: 0,
  },
});

export default SearchInput;

