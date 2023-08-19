import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreensNav from './components/nav/ScreenNav';

const Navigation = () => {
  return (
    <NavigationContainer>
            <ScreensNav/>
    </NavigationContainer>
  )
   
}

export default Navigation