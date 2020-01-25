import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  //console.log(props.navigation);
  return ( 
    <View>
      <Text style={styles.text}> Hellooo there  </Text>
      <Button 
        onPress ={() => navigation.navigate('Components')}
        title="Go to components Screen"
      />
      <Button 
      title = 'Go to Lists'
      onPress = {() => navigation.navigate('Lists')}
      />
      
      <Button 
      title = 'image Screen'
      onPress ={() => navigation.navigate('Image')}
      />
      <Button 
      title = 'Count Screen'
      onPress ={() => navigation.navigate('Count')}
      />
      <Button 
      title = 'Colour Screen Demo'
      onPress ={() => navigation.navigate('Colour')}
      />

      <Button 
      title = 'Square Screen Demo '
      onPress ={() => navigation.navigate('Square')}
      />
      <Button 
      title = 'Square Screen Demo using Reducer'
      onPress ={() => navigation.navigate('Square_2')}
      />
      <Button 
      title ='TextScreen demo'
      onPress = {() => navigation.navigate('Texting')}
      />
      <Button 
      title = 'Box Screen Demo'
      onPress ={() => navigation.navigate('Box')}
      />

    </View>
    
  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


