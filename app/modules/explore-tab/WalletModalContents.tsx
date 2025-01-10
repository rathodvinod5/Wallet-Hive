import HeaderComponent from '@/components/ui/header/HeaderComponent';
import { View, StyleSheet, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';


const WalletModalContents = () => {
  return(
    <View style={styles.container}>
      <HeaderComponent
        title='Wallets' 
        leftItem={<Entypo name="cross" size={28} color="gray" />}
        rightItem={<Entypo name="plus" size={24} color="gray" />}
      />
    </View>
  );
};

export default WalletModalContents;

const styles = StyleSheet.create({
  container: {   
    flex: 1,
    alignItems: 'center',
    // paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});