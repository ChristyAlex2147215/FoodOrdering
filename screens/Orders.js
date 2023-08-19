import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native';
import FoodItem from "../components/FoodItem"
import menu from "../data/Menu.json"
import { useState,useEffect, useContext } from 'react';
import { OrderContext }from '../context/orderContext';
import SearchRecommendation from '../components/SearchRecommendations';
import Dropdown from "../components/SortingComp"
import { useNavigation } from '@react-navigation/native';


export default function Orders() {
  const {order,setOrder}=useContext(OrderContext)
  const navigation=useNavigation()

  const onPressFood=(obj)=>
  {
    console.log("Navigating to details page");
    navigation.navigate("OrderDetails",{obj})
  }
  return (
    <SafeAreaView>
      <SearchRecommendation data={order}/>
      <Dropdown/>
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={true} horizontal={false}>
      <StatusBar/>
      <Text style={{fontSize:20,textAlign:"center",marginHorizontal:20}}>Todays Menu</Text>
      {order.map((item, index) => (
        <FoodItem title={item.title} url={item.imgurl} descr={item.descr} price={item.price} rating={item.rating} isVeg={item.veg} key={item.index} onPress={()=>onPressFood(item)}/>
      ))}
     
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




