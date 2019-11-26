import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const ComponentScreen = () => {
    const name = 'Rahman';
    return (
        <View>
            <Text style = {styles.textStyle} > This is comp screen </Text>
            <Text style = {styles.subHeader} > My name is {name} </Text>

        </View>
    )
}; 

const styles = StyleSheet.create({
    textStyle :{
        fontSize: 30
    },
    subHeader :{
        fontSize : 20
    }
}); 

export default ComponentScreen;
