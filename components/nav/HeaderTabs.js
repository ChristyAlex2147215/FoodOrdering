import React,{useState,useContext} from 'react'
import {View,Text,TouchableOpacity,SafeAreaView} from "react-native"
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

export const signout=async()=>
{
  console.log("See ya, Signing out")

}

const HeaderTabs = () => {
    // const [state,setState]=useContext(AuthContext)


  return (
    <SafeAreaView>
        <TouchableOpacity>
        <FontAwesome5Icon name="sign-out-alt" size={25}/>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HeaderTabs