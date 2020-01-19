import React, {useState} from 'react';
import {Text, Button, StyleSheet, View, FlatList} from 'react-native';


const ColourScreen = () => {
    const [colors, setColors] = useState([]);
    const txt = " This is normal javascript";
    return (
    <View>
        <Button 
        title='Click to change color'
        onPress ={() => {
            setColors([...colors, randomRGB()])
        }}
        />
        
        
        <FlatList 
            keyExtractor = {item => item}
            data = {colors}
            renderItem={() =>{
                return(
                    <View style ={{height : 100 , width : 100 , backgroundColor:randomRGB()}}/>
                ); 
            }}
        />
    </View>
    );
};

const randomRGB = () =>{
    const Red = Math.floor(Math.random() * 256);
    const Blue = Math.floor(Math.random() * 256);
    const Green = Math.floor(Math.random() * 256);
    return `rgb(${Red},${Blue}, ${Green})`
};
const styles = StyleSheet.create({
    textStyle:{fontSize : 30 }
});

export default ColourScreen;