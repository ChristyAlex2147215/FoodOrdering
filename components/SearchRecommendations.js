import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import { View, Text, TextInput, FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import {OrderContext} from "../context/orderContext"
import datalocal from "../data/Menu.json"

const SearchRecommendation = ({ data }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggetions,setShowSuggetions]=useState(false);
  const { order, setOrder}=useContext(OrderContext)
  const orginalData=order;
//   console.log(data)
  useEffect(()=>{setOrder(datalocal);console.log("Resetting data")},[])

  const handleInputChange = (text) => {
    setShowSuggetions(true);
    setQuery(text);
    console.log(text);
    const filteredSuggestions = datalocal.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    console.log("filter search result =>",filteredSuggestions);
    // const filteredSuggestions=""
    // if(query ==='')
    // {
    //     setSuggestions([])
    //     setShowSuggetions(false)
    // }
    setSuggestions(filteredSuggestions);
    setShowSuggetions(true)
  };

  const selectFromList=(option)=>
  {
    console.log("Choosed ",option);
    setQuery(option);
    setShowSuggetions(false)
    const searchRes=datalocal.filter((item)=>item.title.includes(option) && option!=="")
    console.log("search result is =>",searchRes);
    setOrder(searchRes);
  }

  
  // if(searchRes!==undefined && searchRes!==null && searchRes!=="")
  // {
  //   setOrder(searchRes);
  // }

  return (
    <View>
      <TextInput
        placeholder="Search..."
        value={query}
        onChangeText={handleInputChange}
        style={{borderRadius:15,borderColor:"black",borderWidth:2,width:"90%",marginLeft:20,padding:10}}
      />
     {showsuggetions && <FlatList
        data={suggestions}
        keyExtractor={(item) => item.index.toString()}
        renderItem={({ item }) => <TouchableOpacity style={styles.button} onPress={()=>{selectFromList(item.title)}}><Text>{item.title}</Text></TouchableOpacity>}
        style={{borderRadius:15,borderColor:"grey",borderWidth:1,width:"60%",marginLeft:20,padding:10,position:"relative",zIndex:99}}
      />}
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
  });
export default SearchRecommendation;
