import { TouchableOpacity } from "react-native";

const IconButton = ({
  activeOpacity = 0.8,
  onPress,
  children,
}: {
  activeOpacity?: number,
  onPress?: () => void,
  children: React.ReactNode,
}) => {
  return(
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}

export default IconButton;