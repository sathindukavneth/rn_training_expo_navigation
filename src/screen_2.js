import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Screen2 extends Component {
  
  static navigationOptions = {
    drawerLabel: 'Screen Two',
  };
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Screen 2 </Text>
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
