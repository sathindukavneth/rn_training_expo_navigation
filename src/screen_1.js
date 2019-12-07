import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Screen1 extends Component {
  
  static navigationOptions = {
    drawerLabel: 'Screen One',
  };
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Screen 1 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});
