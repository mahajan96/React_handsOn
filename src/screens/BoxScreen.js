import React from 'react';
import {Text ,StyleSheet, View} from 'react-native'

const BoxScreen = () => {

    return(
        <View style = {Styles.parentStyle}> 
            <View style = {Styles.viewStyle1} />
            <View style = {Styles.viewStyle2} /> 
            <View style = {Styles.viewStyle3} /> 

        </View>
    );

};

const Styles = StyleSheet.create({
    parentStyle :{
        borderColor: 'black',
        borderWidth: 3,
        //alignItems : 'center'
        flexDirection :'row',
        alignItems : 'flex-start',
        height :200,
        justifyContent : 'space-between'
    },
    viewStyle1:{
        width: 50,
        height: 50,
        backgroundColor :'red'

    },
    viewStyle2: {
        width: 50 ,
        height: 50 ,
        backgroundColor : 'green', 
        top : 50
    },
    viewStyle3: {
        width: 50,
        height :50,
        backgroundColor: 'purple'

    }
});

export default BoxScreen