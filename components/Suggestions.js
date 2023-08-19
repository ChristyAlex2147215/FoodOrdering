import React from 'react'
import { View,Text,Image } from 'react-native'
import StarRating from './StarRating'

const Suggestions = ({item}) => {
  return (
    <View style={{borderRadius:15,borderWidth:2,borderColor:"black",marginRight:10,justifyContent:"center",alignContent:"center"}}>
        <Text style={{textAlign:"center",fontSize:18}}>{item.title}</Text>
        <StarRating rating={item.rating} size={20} showText={false}/>
        <Image source={require("../assets/FoodImages/burger.jpg")} style={{width:100,height:100,alignSelf:"center",padding:8,margin:16}}/>
    </View>
  )
}

export default Suggestions