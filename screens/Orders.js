import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native';
import FoodItem from "../components/FoodItem"
import menu from "../data/Menu"
import { useState,useEffect, useContext } from 'react';
import { OrderContext }from '../context/orderContext';
import SearchRecommendation from '../components/SearchRecommendations';
import Dropdown from "../components/SortingComp"
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/nav/Footer';


export default function Orders() {
  const {order,setOrder}=useContext(OrderContext)
  const navigation=useNavigation()

  const onPressFood=(obj)=>
  {
    // console.log(obj)
    navigation.navigate("OrderDetails",{obj})
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <SearchRecommendation data={order}/>
      <Dropdown/>
      <StatusBar/>
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={true} horizontal={false}>
      
      <Text style={{fontSize:24,textAlign:"center",marginHorizontal:20,marginTop:10}}>Todays Menu</Text>
      {order.map((item, index) => (
        <FoodItem title={item.title} url={item.imgurl} descr={item.descr} price={item.price} rating={item.rating} isVeg={item.veg} key={item.index} onPress={()=>onPressFood(item)}/>
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




