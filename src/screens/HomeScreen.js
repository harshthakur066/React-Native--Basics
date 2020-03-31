import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        style={styles.touch}
        onPress={() => navigation.navigate('Component')}
        title="Goto Component" />
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate('List')} >
        <Text style={styles.textButton} >Goto List View</Text>
      </TouchableOpacity>
      <Button style={styles.touch}
        onPress={() => navigation.navigate('Image')}
        title="Goto Image View" />
      <Button style={styles.touch}
        onPress={() => navigation.navigate('Counter')}
        title="Goto Counter App" />
      <Button style={styles.touch}
        onPress={() => navigation.navigate('Color')}
        title="Goto Random Color App" />
      <Button style={styles.touch}
        onPress={() => navigation.navigate('Square')}
        title="Goto Custom Color App - Hooks - UseState" />
      <Button style={styles.touch}
        onPress={() => navigation.navigate('SquareRedux')}
        title="Goto Custom Color App - Hooks - UseReducer" />
    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue'
  },
  touch: {
    padding: 20,
  }
});

export default HomeScreen;
