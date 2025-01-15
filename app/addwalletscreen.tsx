import { Text, StyleSheet, View, } from 'react-native';
import IconButton from '@/components/ui/button/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HeaderComponent from '@/components/ui/header/HeaderComponent';
import { useRouter } from 'expo-router';

const AddWalletScreen = () => {
  const { back } = useRouter();

  const onPressClose = () => back();

  return(
    <View style={styles.container}>
      <HeaderComponent
        title='Add Wallet' 
        leftItem={(
          <IconButton onPress={onPressClose}>
            <Ionicons name="arrow-back-outline" size={28} color="gray" />
          </IconButton>
        )}
        rightItem={(
          <IconButton onPress={() => {}}>
            <MaterialCommunityIcons name="line-scan" size={28} color="gray" />
          </IconButton>
        )}
      />
    </View>
  );
};

export default AddWalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20
  }
});