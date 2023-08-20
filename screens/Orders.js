import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native';
import FoodItem from "../components/FoodItem"
import menu from "../data/Menu"
import { useState,useEffect, useContext } from 'react';
import { OrderContext }from '../context/orderContext';
import SearchRecommendation from '../components/SearchRecommendations';
import Dropdown from "../components/SortingComp"
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/nav/Footer';
import {CustomAlert2Btn} from "../components/ConfirmDeleteModal"
import datalist from "../data/Menu.json"


export default function Orders() {
  const {order,setOrder}=useContext(OrderContext)
  const navigation=useNavigation()
  const [openSortModal,setOpenSortModal]=useState(false);

  useEffect(()=>{setOrder(datalist)},[])
  const closeModal=()=>
  {
    setOpenSortModal(false);
  }
  const onPressFood=(obj)=>
  {
    // console.log(obj)
    navigation.navigate("OrderDetails",{obj})
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <SearchRecommendation data={order}/>
      {/* <Dropdown/> */}
      <TouchableOpacity style={{borderRadius:15,borderColor:"black",borderWidth:1,backgroundColor:"grey",alignContent:"flex-end",justifyContent:"flex-end",marginVertical:16,marginHorizontal:16}} onPress={()=>setOpenSortModal(true)}>
        <Text style={{fontSize:18,paddingHorizontal:16}}>Sort...</Text>
      </TouchableOpacity>
      {openSortModal && <CustomAlert2Btn makeVisible={openSortModal} closeVisible={setOpenSortModal} alertMsg="The Sort Modal" />}
      <StatusBar/>
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={true} horizontal={false}>
      
      <Text style={{fontSize:24,textAlign:"center",marginHorizontal:20,marginTop:10}}>Todays Menu</Text>
      {order.map((item, index) => (
        <FoodItem  key={item.title} title={item.title} url={item.imgurl} descr={item.descr} price={item.price} rating={item.rating} isVeg={item.veg} onPress={()=>onPressFood(item)}/>
      ))}
     
    </ScrollView>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




