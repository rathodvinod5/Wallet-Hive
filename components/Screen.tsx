import { SafeAreaView, StatusBar } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const Screen = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.white}
      />
      {children}
    </SafeAreaView>
  );
}

export default Screen;