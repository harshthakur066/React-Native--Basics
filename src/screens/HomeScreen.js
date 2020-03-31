import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Component')}
        title="Goto Component" />
      <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('List')} >
        <Text style={styles.textButton} >Goto List</Text>
      </TouchableOpacity>
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
    paddingTop: 20,
  }
});

export default HomeScreen;
