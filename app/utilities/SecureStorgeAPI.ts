import * as SecureStore from 'expo-secure-store';

export async function setItemAsync(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}
  
export async function getItemAsync(key: string) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } 
  return null;
}