import React from 'react'
import { View, Text, Image } from 'react-native'

const ImageDetails = (props) => {
    return (
        <View>
        <Image source = { props.source } />
            <Text> {props.title} </Text>
        </View>
    )
}

export default ImageDetails
