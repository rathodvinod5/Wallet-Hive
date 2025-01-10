import { View, Text, StyleSheet, TouchableOpacity, StyleProp, TextStyle } from 'react-native';

export type HeaderContainerProps = {
  leftItem?: React.ReactNode;
  onPressLeftItem?: () => void;
  title: string;
  rightItem?: React.ReactNode;
  onPressRightItem?: () => void;
  titleCustomStyle?: StyleProp<TextStyle>;
};

const HeaderComponent = ({
  leftItem,
  onPressLeftItem,
  title,
  rightItem,
  onPressRightItem,
  titleCustomStyle,
}: HeaderContainerProps) => {
  return(
    <View style={styels.container}>
      {leftItem ? (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={onPressLeftItem}
        >
          {leftItem}
        </TouchableOpacity>
      ) : <View />}
      <Text style={[styels.titleStyles, titleCustomStyle]}>{title}</Text>
      {rightItem ? (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={onPressRightItem}
        >
          {rightItem}
        </TouchableOpacity>
      ) : <View />}
    </View>
  );
}

export default HeaderComponent;

const styels = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleStyles: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  }
});