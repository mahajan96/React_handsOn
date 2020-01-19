import React , {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const CounterScreen = () => {
//Todo Tast
    //let counter = 0;
            // this is array destruction and these are state variable
    const [counter , set] = useState(0);

    const txt = " This is normal javascript";
    return (
    <View>
        <Text> This is Count Screen </Text>
        <Button 
        title = 'Increase'
        onPress = {() =>{
            //Dont do this
            // counter ++;
            set(counter +1);
        } }
        />

        <Button 
        title = 'Decrease'
        onPress = {() =>{
            set(counter -1);
        }}
        />
<Text> Counter : {counter}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;