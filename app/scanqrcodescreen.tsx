import { useRouter } from "expo-router";
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import IconButton from "@/components/ui/button/IconButton";
import HeaderComponent from "@/components/ui/header/HeaderComponent";
import { useState } from "react";

const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen');

const ScanQRCodeScreen = () => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const { back } = useRouter();
  const onPressClose = () => back();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <View style={styles.innContainer}>
          <Text style={styles.message}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="Grant Camera permission" />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
        <HeaderComponent
          title='' 
          rightItem={(
            <IconButton onPress={onPressClose}>
              <Ionicons name="close" size={28} color="gray" />
            </IconButton>
          )}
        />
      </View>

      <CameraView 
        style={styles.camera} 
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      >
        <View style={styles.scanBorderContainer}>
          <View style={styles.scanBorder}  />
        </View>
      </CameraView>
    </View>
  );
}

export default ScanQRCodeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: WIDTH,
    height: HEIGHT,
    paddingTop: 20,
    // paddingHorizontal: 20,
  },
  innContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    // borderWidth: 2,
    borderColor: 'black',
    opacity: 0.8
  },
  scanBorderContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  scanBorder: {
    width: WIDTH * 0.7,
    height: WIDTH * 0.7,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
  }
});