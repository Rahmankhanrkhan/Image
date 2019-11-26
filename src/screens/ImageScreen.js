import React from 'react'
import { View, Text } from 'react-native'
import ImageDetails from '../components/ImageDetails'

const ImageScreen = () => {
    return (
        <View  >
            <ImageDetails title = 'Beach'      source = { require('../../assets/beach.jpg'     ) }  />           
            <ImageDetails title = 'Forest'     source = { require('../../assets/forest.jpg') }  />
            <ImageDetails title = 'Mountain'   source = { require('../../assets/mountain.jpg'  ) }  />
            
        </View>     
    )
}

export default ImageScreen;
 