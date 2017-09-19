import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Greeting = ({ name }) => (
  <View>
    <Text style={{
      fontSize: 30,
    }}>Hello, {name}!</Text>
  </View>
);

export default Greeting;
