import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {

    const txt = " This is normal javascript";
    return (
    <View>
        <Text style={styles.textStyle}> This is my screen </Text>
        <Text> This is normal ?</Text>
    <Text style={styles.textStyle}>{txt}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{fontSize : 30 }
});

export default ComponentsScreen; 