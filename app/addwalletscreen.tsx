import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button } from 'react-native';
import IconButton from '@/components/ui/button/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HeaderComponent from '@/components/ui/header/HeaderComponent';
import { useRouter } from 'expo-router';
import useAddWalletControllet from './modules/add-wallet-screen/useAddWalletController';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { SwitchType } from './modules/add-wallet-screen/types/Types';

const AddWalletScreen = () => {
  const { back } = useRouter();
  const { walletName, phrase, onChangeWalletName, onChangePhrase, activeItem, 
    onChangeActiveItem } = useAddWalletControllet();

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

      <View style={styles.innContainer}>
        <View style={{ flex: 1 }}>
          <ThemedText 
            type="textSMSemibold" 
            style={styles.labelStyles}
          >
            Wallet Name
          </ThemedText>
          <TextInput 
            value={walletName} 
            onChangeText={onChangeWalletName}
            style={styles.textInpuStyles}
          />

          <View style={{ height: 20 }} />
          <CustomSwitchButtons
            activeItem={activeItem}
            onChangeActiveItem={onChangeActiveItem}
          />
          <ThemedText 
            type="textSMSemibold" 
            style={[styles.labelStyles, { marginTop: 20, }]}
          >
            {activeItem === 'phrase' ? 'Enter Phrase' : 'Enter Secret Key'}
          </ThemedText>
          <TextInput
            value={phrase}
            onChangeText={onChangePhrase}
            style={[styles.textInpuStyles, styles.phraseTextArea]}
            multiline={true}
          />
        </View>
        <TouchableOpacity 
          style={[styles.restoreWalletButton, {
            // backgroundColor: phrase ? 'royalblue' : 'lightgray',
            opacity: phrase ? 1.0 : 0.4,
          }]}
          activeOpacity={0.9}
          disabled={!phrase}
        >
          {/* <Text style={styles.buttonTitle}>Restore Wallet</Text> */}
          <ThemedText type="textSMSemibold" style={{ color: 'white' }}>Restore Wallet</ThemedText>
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