import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            {/* <Text>Image Screen</Text> */}
            <ImageDetail title='Forrest' imageSource={require('../../assets/Images/forest.jpg')} />
            <ImageDetail title='Beach' imageSource={require('../../assets/Images/beach.jpg')} />
            <ImageDetail title='Mountain' imageSource={require('../../assets/Images/mountain.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;