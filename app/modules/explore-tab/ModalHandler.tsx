import { View, StyleSheet, Modal, ViewStyle, Text} from "react-native";

export type ModalHandlerProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  customStyles?: ViewStyle;
}

const ModalHandler = ({
  isVisible,
  onClose,
  children,
  customStyles,
}: ModalHandlerProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
            {children}
        </View>
      </View>
    </Modal>
  );
}

export default ModalHandler;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
      },
      modalView: {
        // margin: 80,
        flex: 1,
        width: '100%',
        backgroundColor: 'snow',
        borderRadius: 20,
        paddingVertical: 35,
        paddingHorizontal: 20,
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
     
});