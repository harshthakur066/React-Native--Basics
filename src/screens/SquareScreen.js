import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SET_COLOR = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const SetColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;

        }
    }

    return (
        <View>
            <Text> Square Screen </Text>
            <ColorCounter
                onIncrease={() => SetColor('red', SET_COLOR)}
                onDecrease={() => SetColor('red', -1 * SET_COLOR)}
                color='Red' />
            <ColorCounter
                onIncrease={() => SetColor('green', SET_COLOR)}
                onDecrease={() => SetColor('green', -1 * SET_COLOR)}
                color='Green' />
            <ColorCounter
                onIncrease={() => SetColor('blue', SET_COLOR)}
                onDecrease={() => SetColor('blue', -1 * SET_COLOR)}
                color='Blue' />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;