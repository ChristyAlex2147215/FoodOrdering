import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Divider} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

const FooterTab = ({name, title, submit, routeName}) => {
  const activeScreenColor = routeName === title && 'black';
  return (
    <TouchableOpacity onPress={submit}>
      {
        name !=="grid-outlined" ? (<FontAwesome5
            name={name}
            size={30}
            style={{alignSelf: 'center'}}
            color={activeScreenColor}
          />):( <Icon name="grid-outline" size={30} color="black" /> )
      }
      {/* <Text style={{color: activeScreenColor}}>{title}</Text> */}
      <FontAwesome5
        name={'circle'}
        size={8}
        style={{alignSelf: 'center'}}
        color={activeScreenColor}
        backgroundColor={activeScreenColor}
      />
    </TouchableOpacity>
  );
};

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // console.log("Route is =>",route)

  return (
    <>
      <Divider width={2} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 10,
        }}>
        <FooterTab
          name="home"
          title="Home"
          submit={() => navigation.navigate('Home')}
          routeName={route.name}
        />
         <FooterTab
          name="grid-outlined"
          title="Post"
          submit={() => navigation.navigate('Home')}
          routeName={route.name}
        />
         <FooterTab
          name="user-circle"
          title="Post"
          submit={() => navigation.navigate('Home')}
          routeName={route.name}
        />
      </View>
    </>
  );
};

export default Footer;
