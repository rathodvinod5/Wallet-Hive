import HeaderComponent from '@/components/ui/header/HeaderComponent';
import { View, StyleSheet, Text } from 'react-native';

const WalletModalContents = () => {
  return(
    <View style={styles.container}>
      <HeaderComponent
        title='Wallet' 
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