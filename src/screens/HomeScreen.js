import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = (props) => {
  console.log('List', props.navigation)
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button  
      title = 'ListScreen' 
      onPress = { () => props.navigation.navigate('List') }
      />

<Button  
      title = 'Image' 
      onPress = { () => props.navigation.navigate('Image') }
      />

<Button  
      title = 'Component' 
      onPress = { () => props.navigation.navigate('Component') }
      />

    </View>
  )

}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
