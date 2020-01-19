import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail'
const ImageScreen = () => {

    return (
        <View>
            <ImageDetail title = 'Forest' imgSource ={require('../../assets/forest.jpg')}/>
            <ImageDetail title = 'Beach ' imgSource ={require('../../assets/beach.jpg')}/>
            <ImageDetail title = 'Mountain' imgSource ={require('../../assets/mountain.jpg')}/>
           

        </View>
    
    );
};

const Styles = StyleSheet.create({
    textStyle:{fontSize : 30}

});

export default ImageScreen;