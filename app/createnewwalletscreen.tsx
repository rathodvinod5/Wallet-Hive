import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button } from 'react-native';
import IconButton from '@/components/ui/button/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HeaderComponent from '@/components/ui/header/HeaderComponent';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { SwitchType } from './modules/add-wallet-screen/types/Types';
import useCreateNewWalletController from './modules/create-wallet-screen/useCreateNewWallet';

const AddWalletScreen = () => {
  const { back } = useRouter();
  const { } = useCreateNewWalletController();

  const onPressClose = () => back();

  return(
    <View style={styles.container}>
      <HeaderComponent
        title='Create Wallet' 
        leftItem={(
          <IconButton onPress={onPressClose}>
            <Ionicons name="arrow-back-outline" size={28} color="gray" />
          </IconButton>
        )}
        // rightItem={(
        //   <IconButton onPress={() => {}}>
        //     <MaterialCommunityIcons name="line-scan" size={28} color="gray" />
        //   </IconButton>
        // )}
      />

      <View style={styles.innContainer}>
        <View style={{ flex: 1 }}>
          
        </View>
        <TouchableOpacity 
          style={[styles.restoreWalletButton]}
          activeOpacity={0.9}
        //   onPress={validateString}
        >
          {/* <Text style={styles.buttonTitle}>Restore Wallet</Text> */}
          <ThemedText type="textSMSemibold" style={{ color: 'white' }}>
            Create Wallet
          </ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CustomSwitchButtons = ({
  activeItem,
  onChangeActiveItem,
}: {
  activeItem: SwitchType,
  onChangeActiveItem: (item: SwitchType) => void,
}) => {
  return(
    <View style={styles.customSwitchButton}>
      <TouchableOpacity 
        activeOpacity={0.9} 
        style={[styles.switchInnButton, { 
          backgroundColor: activeItem === 'phrase' ? 'lightgray' : 'transparent'
        }]}
        onPress={() => onChangeActiveItem('phrase')}
      >
        <Text>Phrase</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        activeOpacity={0.9} 
        style={[styles.switchInnButton, { 
          backgroundColor: activeItem === 'sec-key' ? 'lightgray' : 'transparent'
        }]}
        onPress={() => onChangeActiveItem('sec-key')}
      >
        <Text>Secret Key</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddWalletScreen;

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    paddingTop: 20,
    paddingHorizontal: 20
  },
  innContainer: {
    // flex: 1,
    // height: '100%',
    paddingVertical: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textInpuStyles: {
    height: 48,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'lightgrey',
    fontSize: 16,
    fontWeight: '600',
    color: Colors['light']['blackNew']
  },
  phraseTextArea: {
    height: 180,
  },
  labelStyles: {
    color: "grey", // Colors['light']['blackNew']
    marginBottom: 6,
  },
  customSwitchButton: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'lightgray',
    marginTop: 30
  },
  switchInnButton: {
    flex: 1,
    height: 32,
    // backgroundColor: 'lightgray',
    color: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  continueButtonStyles: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  restoreWalletButton: { 
    flex: 1, 
    height: 48,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 60,
    borderRadius: 8,
    backgroundColor: 'royalblue'
  },
});