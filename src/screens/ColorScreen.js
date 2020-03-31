import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {

    const [Color, setColor] = useState([]);

    return (
        <View>
            <Button
                title='Add a color'
                onPress={() => {
                    setColor([...Color, RandomColor()]);
                }} />
            <FlatList
                keyExtractor={item => item}
                data={Color}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }} />
                    );
                }}
            />
        </View>
    );
};

const RandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;