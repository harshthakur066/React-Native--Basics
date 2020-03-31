import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {

    const [Counter, setCounter] = useState(0);

    return (
        <View>
            <Button
                title='Increase'
                onPress={() => {
                    setCounter(Counter + 1);
                }} />
            <Button
                title='Decrease'
                onPress={() => {
                    setCounter(Counter - 1);
                }} />
            <Text> Conter: {Counter} </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;