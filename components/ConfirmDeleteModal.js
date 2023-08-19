import * as React from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import RadioButton from './RadioButton';

// export const CustomAlert1Btn = ({ makeVisible, closeVisible,alertMsg }) => {
//   const hideModal = () => closeVisible(false);

//   const containerStyle = {
//     backgroundColor: 'lightgrey',
//     padding: 20,
//     window:500,
//     marginHorizontal: '10%', // 80% width
//     marginTop: '20%', // 60% height
//   };

//   return (
//     <Modal
//         animationType=""
//         transparent={true}
//         visible={makeVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           closeVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>{alertMsg}</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => closeVisible(!makeVisible)}>
//               <Text style={styles.textStyle}>OK</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
    
//   );
// };

const items = [
  { label: 'Price', value: 'Price' },
  { label: 'Rating', value: 'Rating' },
  { label: 'Veg', value: 'Veg' },
  { label: 'Non Veg', value: 'Non Veg' },
];

export const CustomAlert2Btn = ({ makeVisible, closeVisible,alertMsg }) => {
  const hideModal = () => closeVisible(false);

  const containerStyle = {
    backgroundColor: 'lightgrey',
    padding: 20,
    window:500,
    marginHorizontal: '10%', // 80% width
    marginTop: '20%', // 60% height
  };

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={makeVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          closeVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{alertMsg || "Modal alert Message"}</Text>
            {items.map(()=>{return })

            }
           <View style={{flexDirection:'row',justifyContent:"space-evenly",width:"100%"}}>
           <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeVisible(!makeVisible)}>
              <Text style={styles.textStyle}>Sort</Text>
            </Pressable>
           
           </View>
          </View>
        </View>
      </Modal>
    
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,

  },
  modalView: {
    marginHorizontal: 20,
    marginVertical:10,
    backgroundColor: 'white',
    borderRadius:15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:"80%"
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    width:100
  },
  buttonClose: {
    backgroundColor: 'black',
    color:"white"
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

// export default CustomAlert;