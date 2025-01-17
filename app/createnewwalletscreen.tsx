import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button } from 'react-native';
import IconButton from '@/components/ui/button/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import HeaderComponent from '@/components/ui/header/HeaderComponent';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
// import { SwitchType } from './modules/add-wallet-screen/types/Types';
import useCreateNewWalletController from './modules/create-wallet-screen/useCreateNewWalletController';


const AddWalletScreen = () => {
  const { back } = useRouter();
  const { phrases, onClickGeneratePhraseButton } = useCreateNewWalletController();

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
      />

      <View style={styles.innContainer}>
        <View style={{ flexGrow: 1, alignItems: 'center' }}>
          <View style={styles.phraseStyles}>
            <View style={{ flex: 1, flexDirection: 'column', gap: 8 }}>
              {Array.from({ length: 12 }).map((item, index) => {
                if(index % 2 == 1) return null;
                
                return (
                  <View key={'odd-items-'+index} style={styles.phraseContainer}>
                    <Text>{index + 1}.</Text>
                    <Text style={styles.phraseText}>{phrases ? phrases[index] : ""}</Text>
                  </View>
                );
              })}
            </View>
            <View style={{ flex: 1, flexDirection: 'column', gap: 8 }}>
              {Array.from({ length: 12 }).map((item, index) => {
                if(index % 2 == 0) return null;
                
                return (
                  <View key={'odd-items-'+index} style={styles.phraseContainer}>
                    <Text>{index + 1}.</Text>
                    <Text style={styles.phraseText}>{phrases ? phrases[index] : ""}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <Text style={styles.noteText}>
            Note: Please back up the phrases for future reference
          </Text>
          <Button 
            title='Copy to clipboard' 
            onPress={() => {}} 
          />
        </View>
        <TouchableOpacity 
          style={[styles.restoreWalletButton]}
          activeOpacity={0.9}
          onPress={onClickGeneratePhraseButton}
        >
          {/* <Text style={styles.buttonTitle}>Restore Wallet</Text> */}
          <ThemedText type="textSMSemibold" style={{ color: 'white' }}>
            {!phrases ? "Create Wallet" : "Save wallet"}
          </ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddWalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20
  },
  innContainer: {
    flex: 1,
    paddingVertical: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  phraseStyles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    // paddingHorizontal: 20
  },
  phraseContainer: {
    backgroundColor: 'lightgray',
    height: 36,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
    gap: 6
  },
  phraseText: {
    fontSize: 14,
    fontWeight: '600',
    // color: 'gray'
  },
  noteText: {
    color: 'tomato',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20
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