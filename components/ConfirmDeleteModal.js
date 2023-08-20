import * as React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { OrderContext } from '../context/orderContext';
import datalist from '../data/Menu.json';

const items = [
  { label: 'price', value: 'Price' },
  { label: 'rating', value: 'Rating' },
  { label: 'veg', value: 'Veg' },
  { label: 'non veg', value: 'non veg' },
];

export const CustomAlert2Btn = ({ makeVisible, closeVisible, alertMsg }) => {
  const hideModal = () => closeVisible(false);
  const [asc, setAsc] = useState(true);
  const { order, setOrder } = useContext(OrderContext);

  const SortBy = (property,asc) => {
    let sortKey = asc ? 1 : -1;
    let filteredResult = datalist.sort((a, b) => {
      if (typeof a[property] === 'number' && typeof b[property] === 'number') {
        return (a[property] - b[property]) * sortKey;
      } else if (typeof a[property] === 'string' && typeof b[property] === 'string') {
        return ('' + a[property]).localeCompare(b[property]) * sortKey;
      }
      return 0;
    });
    setOrder([...filteredResult]);
  };

  const filterSort = (value) => {
    if (value.includes('non veg')) {
      setOrder(datalist.filter((item) => !item.veg));
    } else if (value.includes('veg')) {
      setOrder(datalist.filter((item) => item.veg));
    }
  };

  const sort = (itemValue,asc) => {
    // hideModal();
    if (itemValue === 'veg' || itemValue === 'non veg') {
      filterSort(itemValue);
    } else {
      SortBy(itemValue,asc);
    }
  };

  const toggleAsc = (itemValue) => {
    setAsc(prevAsc => !prevAsc); // Using the previous state to toggle
    sort(itemValue,!asc);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={makeVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        closeVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{alertMsg || 'Modal alert Message'}</Text>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center', marginTop: 18, width: '80%' }}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{ backgroundColor: 'lightgrey', borderRadius: 15, width: '100%', height: '15%', justifyContent: 'center' }}
                onPress={() => toggleAsc(item.label)}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={{backgroundColor:"black",width:100,height:30,marginTop:50,borderRadius:10}} onPress={()=>hideModal()}><Text style={{color:"white",fontSize:24,textAlign:"center"}}>Sort</Text></TouchableOpacity>
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
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 15,
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
    width: '80%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 32,
  },
});

export default CustomAlert2Btn;
