import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native';
import FoodItem from "./components/FoodItem"
import menu from './data/Menu.json';
import { useState,useEffect, useContext } from 'react';
import OrderProvider from './context/orderContext';
import Orders from "./screens/Orders"
import Navigation from './Navigation';

export default function App() {
  return (
    <OrderProvider>
        <Navigation/>
    </OrderProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
});
