/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Greeting from './greeting';

export default class RnDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name="Martin" /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000ff',
  },
});

AppRegistry.registerComponent('RnDemo', () => RnDemo);
