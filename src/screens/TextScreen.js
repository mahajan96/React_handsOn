import React , {useState} from 'react';
import {Text, StyleSheet , View, TextInput} from 'react-native';


TextScreen = () =>{
    const [name , SetName] = useState('');
    return(
        <View>
            <Text>
                THis is my text Screen
            </Text>
            <TextInput style = {styles.Textinput} 
            autoCapitalize ='none'
            autoCorrect = {false}
            value= {name}
            onChangeText = {(newValue) => SetName(newValue)}
            />

    <Text>My name is: {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Textinput:{margin: 15 , borderColor : 'black' , borderWidth : 1}
});

export default TextScreen;