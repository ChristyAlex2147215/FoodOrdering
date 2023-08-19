import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import Orders from '../../screens/Orders';
import HeaderTabs from './HeaderTabs';
import OrderDetails from "../../screens/OrderDetails"


const Stack = createNativeStackNavigator();

function ScreensNav() {
  return (
   
      <Stack.Navigator
      initialRouteName='Orders'
    //   screenOptions={{headerShown:true}}
      >
        {/* changed to directly load home page */}
        <>
        <Stack.Screen name="Orders" component={Orders}  
            options=
        {{
            title:"Orders Page",
            headerBackTitle:"Go Back",
            headerRight:()=><HeaderTabs/>}}/>
        <Stack.Screen name="OrderDetails" component={OrderDetails}  
            options=
        {{
            title:"OrderDetails",
            headerBackTitle:"Go Back",
            headerRight:()=><HeaderTabs/>}}/>
          </>
      </Stack.Navigator>
  );
}

export default ScreensNav;