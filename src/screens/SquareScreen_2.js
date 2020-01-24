import React, { useReducer } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ColourCount from '../components/ColourCounter'

const COLOR_CHNG = 15

const reducer = (state , action) => {

    //Todo task 
    // state = red, green, blue :numbers
    // action : we define 2 props
    // 1) colortochange : red,green,blue
    // 2) amount: +15 ,-15


    switch(action.colorToChange)
    {
        //itenary statement 
        case "Red":

            return state.red +action.amount >255 || state.red +action.amount <0 ? state : 
            {...state , red: state.red + action.amount};
            
        case "Green":
            return state.green +action.amount >255 || state.red + action.amount <0 ? state :
            {...state , green: state.green + action.amount};
        case "Blue":
            return state.blue +action.amount >255 || state.blue +action.amount <0 ? state :
            {...state , blue: state.blue + action.amount};
        default:
            return state;

    }
};

const SquareScreen_2 = () => {
        //This screen uses the reducer instead of the useState
        // dispatch  ->  the reducer to run 
    const [state , dispatch] = useReducer(reducer, {red: 0 , green: 0 , blue: 0});
    const {red, blue, green} = state;
   
    return(
        <View>
            <ColourCount 
            onIncrease = {() => dispatch ({colorToChange: 'Red', amount: COLOR_CHNG})}
            onDecrease = {() => dispatch ({colorToChange: 'Red' , amount: -1 * COLOR_CHNG})}
            color="Red"
            />

            <ColourCount
            onIncrease = {() => dispatch ({colorToChange: 'Blue' , amount : COLOR_CHNG}) }
            onDecrease = {() => dispatch ({colorToChange: 'Blue' , amount : -1*COLOR_CHNG})}
            color = "Blue"
            />
            
            <ColourCount
            onIncrease = {() => dispatch ({colorToChange: 'Green' , amount : COLOR_CHNG})}
            onDecrease = {() => dispatch ({colorToChange: 'Green' , amount : -1*COLOR_CHNG})}
            color = "Green"
            />
        
        <View style ={{height : 100 , width : 100 , backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
        
    );
};

const styles = StyleSheet.create({
    //textStyle:{fontSize : 30 }
});

export default SquareScreen_2;