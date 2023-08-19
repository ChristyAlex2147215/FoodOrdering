import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
// import TypeSelectionButton from '../components/dashboar/TypeSelectionButton';
// import ProductComponent from '../components/dashboar/ProductComponent';
import Footer from '../components/nav/Footer';
// import MatchTitlleButton from '../components/dashboar/MatchTitlleButton';
// import CarouselCards from '../components/productDetail/CarouselCards';
import StarRating from 'react-native-star-rating';
import {useContext} from "react";

const ProductDetail = ({route}) => {
  const [starCount, setStarCount] = useState(0);
  const {obj}=route.params;
  const onStarRatingPress = star => {
    setStarCount(star);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: '#FCFCFD'}}>
        <View style={styles.container}>
          {/* <CarouselCards /> */}
        </View>
        <View style={styles.productDetails}>
          <Text style={{fontSize: 16}}>{"Title"}</Text>
          <Text style={{fontSize: 12, color: '#000', paddingTop: 8}}>
           {"Description"}
          </Text>
        </View>
    
       
        <View style={{marginHorizontal: 16}}>
          <Text style={{fontSize: 24, color: '#000'}}>reviews </Text>
          <ScrollView
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexGrow: 1,
              marginTop: 16,
            }}
            horizontal={true}>
            <Image
              source={require('../assets/FoodImages/burger.jpg')}
              style={{width: 151, height: 256}}
            />
            <Image
              source={require('../assets/FoodImages/burger.jpg')}
              style={{width: 151, height: 256, marginLeft: 16}}
            />
            <Image
              source={require('../assets/FoodImages/burger.jpg')}
              style={{width: 151, height: 256, marginLeft: 16}}
            />
            <Image
              source={require('../assets/FoodImages/burger.jpg')}
              style={{width: 151, height: 256, marginLeft: 16}}
            />
          </ScrollView>
        </View>
        <View style={styles.ratingBox}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={starCount}
            selectedStar={rating => onStarRatingPress(rating)}
            containerStyle={{width: '80%'}}
            halfStarColor={'grey'}
            halfStarEnabled={true}
          />
        </View>
        <View style={{marginHorizontal:16}}>
            <Text style={{fontSize:24,color:"#000"}}>You may also like</Text>
            <ScrollView horizontal={true}>
              
            </ScrollView>
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

export default ProductDetail;
