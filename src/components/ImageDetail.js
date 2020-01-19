import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ImageDetail = props => {

    return (
        <View>
            <Image source={props.imgSource}/>
            <Text style ={Styles.textStyle}> {props.title}</Text>
        </View>
    
    );
};

const Styles = StyleSheet.create({
    textStyle:{fontSize : 15}

});

export default ImageDetail;