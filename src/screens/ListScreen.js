import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';


const ListScreen = () =>{
const friends =[
    {name: "Friend 1",Age: 19},
    {name: "Friend 2", Age: 20},
    {name: "Friend 3", Age: 20 },
    {name: "Friend 4", Age: 21},
    {name: "Friend 5", Age: 24},
    {name: "Friend 6", Age: 22},
    {name: "Friend 7", Age: 22},
    {name: "Friend 8", Age: 12},
];

    return (
        <FlatList 
        keyExtractor = {friend => friend.name}
        data={friends} 
        renderItem= {({ item }) => {
            // element === {item: {name:'Karan'}, index: 0}
        return (
        <Text style={styles.scroll}>
            {item.name} is {item.Age}
        </Text>
        );
        }}
        />       
    );
};

const styles = StyleSheet.create({
    scroll: {
        marginVertical: 20
    }

});

export  default ListScreen;