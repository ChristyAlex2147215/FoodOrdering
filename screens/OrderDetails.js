import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

import Footer from '../components/nav/Footer';
import {useContext} from "react";
import Ratings from '../components/StarRating';
import { List } from 'react-native-paper';
import { OrderContext } from '../context/orderContext';
import Suggestions from '../components/Suggestions';

const OrderDetails = ({navigation,route}) => {

    console.log(route.params.obj.imgurl)
    const { order, setOrder}=useContext(OrderContext);

    const listOfIngredients=route?.params?.obj?.ingredients.map(
        (item,index)=> 
        <View style={{justifyContent:'flex-start',flexDirection:"row",padding:5}} key={index}>
            <Text>{index+1}.</Text>
            <Text style={{paddingHorizontal:5}}>{item}</Text>
        </View>)
    
    const ingredientslist=route?.params?.obj?.ingredients.map((item)=>item);
    // Function to find items with matching ingredients

function findItemsWithMatchingIngredients(searchIngredients){
  const matchingItems = [];

  order.forEach((item) => {
    // Compare ingredients
    const matching = searchIngredients.some((ingredient) =>
      item.ingredients.includes(ingredient)
    );

    if (matching) {
      matchingItems.push(item);
    }
  });

  return matchingItems;
};

//   console.log(ingredientslist)
  const suggestedItems=findItemsWithMatchingIngredients(ingredientslist);
//   console.log("Suggested data obtained =>",suggestedItems);
  const suggestedData=suggestedItems.map((item,index)=><Suggestions item={item} key={item.title}/>)

  
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: '#FCFCFD',marginHorizontal:16}}>
           <View >
           <Text style={{fontSize:30,textAlign:"center",marginVertical:10}}>{route?.params?.obj?.title || "Title"}</Text>
           <View style={{justifyContent:"center",alignContent:"center",alignItems:"center",backgroundColor:"lightgrey"}}>
                <Image source={{uri:route?.params?.obj?.imgurl}} style={{height:250,width:300,resizeMode:"stretch"}} />
           </View>
           <View style={{marginVertical:16}}>
           <Text style={{fontSize:18}}>Description:</Text>
           <Text style={{fontSize:14,paddingVertical:8}}>{route?.params?.obj?.descr}</Text>
           </View>
           <View style={{marginVertical:16}}>
           <Text style={{fontSize:18}}>Ingredients:</Text>
           {listOfIngredients}
           </View>
            {/* <Text>{route.params.obj.rating}</Text> */}
            <Ratings rating={route?.params?.obj?.rating} size={60} showText={true}/>
            <View style={{marginVertical:16}}>
                <Text style={{fontSize:24}}>Suggested Items:</Text>
                <ScrollView contentContainerStyle={{marginVertical:20}} horizontal>
                {suggestedData}
            </ScrollView>
            </View>
           </View>
        
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingTop: 30,
    height: 450,
    width: '100%',
    alignSelf: 'center',
  },
  productDetails: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },
  Keybenfs: {
    borderRadius: 15,
    borderColor: '000',
    borderWidth: 2,
    marginHorizontal: 32,
    padding: 16,
    marginVertical: 16,
  },
  ratingBox: {
    marginHorizontal: 16,
    borderRadius: 20,
    borderColor: 'lightgrey',
    borderWidth: 2,
    height: 200,
    marginVertical: 24,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default OrderDetails;
