import { View, StyleSheet, ViewStyle, Text, Dimensions, Platform} from "react-native";
import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");


export type ModalHandlerProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  customStyles?: ViewStyle;
}

// const ModalHandler = ({
//   isVisible,
//   onClose,
//   children,
//   customStyles,
// }: ModalHandlerProps) => {
//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={isVisible}
//       onRequestClose={onClose}
//     >
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//             {children}
//         </View>
//       </View>
//     </Modal>
//   );
// }

function WrapperComponent() {
  return (
    <View>
      <Modal>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}

const ModalHandler = ({
  isVisible,
  onClose,
  children,
  customStyles,
}: ModalHandlerProps) => {
  return (
    <Modal
      // animationType="slide"
      // onRequestClose={onClose}
      isVisible={isVisible}
      animationIn={"bounceInUp"}
      style={styles.modalStyles}
      coverScreen={true}
      animationInTiming={800}
      // deviceWidth={width}
      // deviceHeight={height}
      onBackdropPress={onClose}
      hideModalContentWhileAnimating={true}
    >
      {children}
    </Modal>
  );
}

export default ModalHandler;

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 240,
  },
  modalView: {
    // margin: 80,
    flex: 1,
    width: '100%',
    backgroundColor: 'snow',
    borderRadius: 20,
    paddingVertical: 35,
    // paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalStyles: { 
    margin: 0, 
    backgroundColor: 'white', 
    paddingHorizontal: 0, 
    marginTop: height * 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});