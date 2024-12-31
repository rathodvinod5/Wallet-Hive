import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import Screen from '@/components/Screen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SearchInput from '@/components/ui/search-input/SearchInput';
import { ThemedText } from '@/components/ThemedText';


export default function HomeScreen() {
  return(
    <Screen>
      <View style={styles.parentContainer}>
        <View style={styles.topContainer}>
          <MaterialIcons name="settings" size={28} color="gray" />
          {/* <Text style={styles.screenTitle}>Home</Text> */}
          <ThemedText type="textMDSemibold">Home</ThemedText>
          <AntDesign name="pluscircle" size={26} color="gray" />
        </View>

        <View style={styles.contentContainer}>
          <SearchInput />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '600'
  },
  contentContainer: {
    flex: 1,
    paddingTop: 20
  }
});
