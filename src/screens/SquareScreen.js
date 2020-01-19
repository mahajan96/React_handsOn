import React, { useState } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ColourCount from '../components/ColourCounter'

const COLOR_CHNG = 15

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue , setBlue] = useState(0);
    const [green , setGreen] = useState(0);

    const setColor =(color, change) => {

        //color string reg, green,blue
        // change number 

        switch(color){
            case "Red":
                red + change >255 || red + change < 0 ? null : setRed(red + change);
                return;
            case "Blue":
                blue + change >255 || blue + change < 0 ? null : setBlue(blue +COLOR_CHNG);
                return;
    
            case "Green":
                green + change >255 || green + change < 0 ? null : setGreen(green +COLOR_CHNG);
                return;

            default:
                return;
        }
    };
   
    return(
        <View>
            <ColourCount 
            onIncrease = {() => setColor("Red", COLOR_CHNG)}
            onDecrease = {() => setColor("Red", -1 * COLOR_CHNG)}
            color="Red"
            />

            <ColourCount
            onIncrease = {() => setColor("Blue", COLOR_CHNG)}
            onDecrease = {() => setColor("Blue", COLOR_CHNG)}
            color = "Blue"
            />
            
            <ColourCount
            onIncrease = {() => setColor("Green", COLOR_CHNG)}
            onDecrease = {() => setColor("Green", COLOR_CHNG)}
            color = "Green"
            />
        
        <View style ={{height : 100 , width : 100 , backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
        
    );
};

const styles = StyleSheet.create({
    //textStyle:{fontSize : 30 }
});

export default SquareScreen;