import React, { Component } from 'react';
import { View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View width={this.props.width}/>
    );
  }
}
