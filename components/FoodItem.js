import React, { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import ProgressBar from "../components/ProgressBar"
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {CustomAlert2Btn} from "../components/ConfirmDeleteModal"
import IsVeg from './FoodTypeComp';

const FoodItem = ({title,url,descr,price,rating,isVeg,onPress}) => {
  let imgurl=JSON.stringify(url);
  console.log(url)
  const [showDelete,setShowDelete]=useState(false)
  const [showReceivedModal,setShowReceivedModal]=useState(false)

  const showDeleteModal=()=>
  {
    setShowDelete(!showDelete)
  }
  const showReceivedConfirm=()=>
  { 
    setShowReceivedModal(!showReceivedModal)
  }
  // console.log(imgurl)
  const pressOnFood=()=>
  {
    console.log("click on the btn")
  }
  return (
    <TouchableOpacity onPress={onPress} style={{borderRadius:15,borderWidth:2,borderColor:"black",backgroundColor:"lightgrey",width:"98%",marginBottom:15}}>
     {/* top view */}
     <View style={{flexDirection:"row"}} onPress={onPress}>
      {/* view for the image */}
     <View style={{width:"30%",justifyContent:"center",padding:15}}>
      <Image source={{uri:url}} style={{width:100,height:130,resizeMode:"stretch"}}/>

      </View>
      {/* view for the text */}
      <View style={{width:"70%"}}>
       <View style={{flexDirection:"row"}}>
        {/* title view */}
       <View style={{flexDirection:"row",width:"85%",justifyContent:"center"}}>
        <Text style={{fontSize:25,textAlign:'center',marginTop:10}}>{title || "Title"}</Text>
       </View>
        {/* trash icon */}
        {/* trash icon view */}
        {/* <View style={{alignSelf:"center",justifyContent:"center"}}>
            <FontAwesome5Icon name="trash" size={30}  style={{justifyContent:"flex-end",alignSelf:"flex-end"}} onPress={showDeleteModal}/>
        </View> */}
       </View>
       {/* description view */}
      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <View>
           <Text style={{color:"black",paddingHorizontal:10,fontSize:12}}>{descr || "description"}</Text>
          </View>
          
          {/* <View>
          <FontAwesome5Icon name="check" size={30}  style={{alignSelf:"flex-end"}} onPress={showReceivedConfirm}/>
          </View> */}
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:5}}>
          <Text style={{fontSize:15}}>{price} &#x20B9;</Text>
          <View style={{flexDirection:"row"}}>
          <Text style={{fontSize:15}}>{rating}</Text> 
          <FontAwesome5Icon name="star" size={15}  style={{justifyContent:"flex-end",alignSelf:"flex-end",bottom:2,paddingLeft:2}}/>
          </View>
          {/* <Text>{isVeg}</Text> */}
          <IsVeg type={isVeg}/>
          </View>
       {/* <Text style={{paddingHorizontal:15,marginTop:5,fontSize:15}}>count: {count}</Text> */}
      </View>
     </View>
      {/* for the status area */}
      <View>
        {/* <ProgressBar currentStatus={status}/> */}
      </View>
      
    </TouchableOpacity>
  )
}

export default FoodItem