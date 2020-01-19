import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const ColourCounter = ({color, onIncrease, onDecrease}) => {

    return (
    <View>
             {/*  destructuring = > props.color */}
        <Text> {color} </Text>
            
        <Button  onPress = { () => onIncrease()} title = {`Increse ${color}`}/>
        <Button  onPress = { () => onDecrease()}title = {`Decrease ${color}`}/>

    </View>
    );
};

const styles = StyleSheet.create({
    //textStyle:{fontSize : 30 }
});

export default ColourCounter;