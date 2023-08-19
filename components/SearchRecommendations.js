import React, { useState } from 'react';
import { View, Text, TextInput, FlatList,StyleSheet,TouchableOpacity } from 'react-native';

const SearchRecommendation = ({ data }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggetions,setShowSuggetions]=useState(false);
//   console.log(data)

  const handleInputChange = (text) => {
    setQuery(text);
    console.log(text);
    const filteredSuggestions = data.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    // const filteredSuggestions=""
    if(query ==='')
    {
        setSuggestions([])
        setShowSuggetions(false)


    }
    setSuggestions(filteredSuggestions);
    setShowSuggetions(true)
  };

  const selectFromList=(option)=>
  {
    console.log("Choosed ",option);
    setQuery(option);
    setShowSuggetions(false)

  }

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
