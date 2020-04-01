import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = ({ title, imageSource }) => {
    return (
        <View style={styles.viewStyle} >
            <Text style={styles.textOneStyle} >Child 1</Text>
            <Text style={styles.textTwoStyle} >Child 2</Text>
            <Text style={styles.textThreeStyle} >Child 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        // flex: 1
        // alignItems: 'center',
        // flexDirection: 'row',
        // justifyContent: 'space-around'
    },
    textOneStyle: {
        borderWidth: 2,
        borderColor: 'red',
        flex: 1
        // margin: 20,
        // padding: 30,
        // textAlign: 'center'
    },
    textTwoStyle: {
        borderWidth: 2,
        borderColor: 'red',
        flex: 1,
        alignSelf: 'center',
        // ...StyleSheet.absoluteFillObject,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        backgroundColor: 'black',
        color: 'white',

    },
    textThreeStyle: {
        borderWidth: 2,
        borderColor: 'red',
        flex: 1
    }
});

export default BoxScreen;