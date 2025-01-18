import { useEffect, useState } from "react";
import { NativeSyntheticEvent, StyleProp, StyleSheet, TextInput, TextInputChangeEventData, 
  TextStyle, View, ViewStyle } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { Colors } from "@/constants/Colors";

const SearchInput = ({
  customContainerCss,
  customTextInputCss,
  onUpdateTextInput,
  placeHolderText="Search",
  showSearchIcon=true,
}: {
  customContainerCss?: StyleProp<ViewStyle>,
  customTextInputCss?: StyleProp<TextStyle>,
  onUpdateTextInput?: (text: string) => void,
  placeHolderText?: string,
  showSearchIcon?: boolean,
}) => {
  const [inputValue, setInputValue] = useState("");
  
  const handleOnChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setInputValue(e.nativeEvent.text);
  }

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if(onUpdateTextInput) onUpdateTextInput(inputValue);
    }, 300);

    return () => {
      clearTimeout(debounceTimer); // Cleanup the timer on unmount or inputValue change
    };
  }, [inputValue]);

  return(
    <View style={[styles.container, { 
      paddingLeft: showSearchIcon ? 20 : 0,
      }, customContainerCss]}
    >
      <TextInput
        placeholder={placeHolderText}
        value={inputValue}
        onChange={handleOnChange}
        style={[styles.textInput, customTextInputCss]}
      />
      {showSearchIcon ? (
        <View style={styles.iconContainer}>
          <Feather name="search" size={24} color="gray" />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors['light']['greyExtraLight1'], // '#D3D3D3',
    height: 44,
    // paddingLeft: 20,
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

