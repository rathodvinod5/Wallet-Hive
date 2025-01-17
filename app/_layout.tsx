import { View, Text } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import IconButton from '@/components/ui/button/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AppProvider } from './context/ParentContext';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { back } = useRouter();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen 
            name="(tabs)" 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="managecrypto" 
            options={{ 
              animation: "ios_from_right",
              headerShown: true, 
              title: 'ManageCrypto',
              headerLeft: () => (
                <IconButton onPress={() => back()}>
                  <Ionicons name="arrow-back" size={28} color="gray" />
                </IconButton>
              ),
              headerRight: () => (
                <Link href={"/walletmodal"}>
                  <Ionicons name="add" size={28} color="black" />
                </Link>
              ),
              headerTitle(props) {
              return (
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>
                    Manage Crypto
                  </Text>
                );
              },
              headerStyle: {
                backgroundColor: 'lightgrey',
              },
            }} 
          />
          <Stack.Screen name="+not-found" />
          <Stack.Screen
            name="walletmodal"
            options={{
              presentation: "formSheet",
              animation: "slide_from_bottom",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="addwalletscreen" 
            options={{
              presentation: "formSheet",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="createnewwalletscreen" 
            options={{
              presentation: "formSheet",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="copyaddressscreen" 
            options={{
              presentation: "formSheet",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
           <Stack.Screen
            name="coindetailsscreen" 
            options={{
              // presentation: "formSheet",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AppProvider>
  );
}
