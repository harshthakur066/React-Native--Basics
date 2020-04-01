import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SET_COLOR = 15;

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};

const SquareScreenReducer = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <Text> Square Screen useReducer </Text>
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'red', amount: SET_COLOR })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * SET_COLOR })}
                color='Red' />
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'green', amount: SET_COLOR })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * SET_COLOR })}
                color='Green' />
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: SET_COLOR })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * SET_COLOR })}
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

export default SquareScreenReducer;