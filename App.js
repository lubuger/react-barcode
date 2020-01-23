import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Barcode from './Barcode';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Barcode style={styles.barcode} onScan={data => alert(`Bar code with type ${data.type} and data ${data.data} has been scanned!`)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height: 20,
    backgroundColor: '#FFF',
  },
  barcode: {
    height: 350,
    width: 350,
    borderWidth: 1
  },
});
