import React, { Component } from 'react';
import { WebView, View, StyleSheet,Platform } from 'react-native';
import renderChart from './renderChart';
import echarts from './echarts.min';

let source;
if (__DEV__) {
  source = require('./tpl.html');
} else {
  source = Platform.OS === 'ios' ? require('./tpl.html') : { uri: 'file:///android_asset/tpl.html' };
}

export default class App extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.option !== this.props.option) {
      this.refs.chart.reload();
    }
  }

  onMessage = event => {
    this.props.onPress && this.props.onPress(event.nativeEvent.data);
  }

  render() {
    return (
      <View style={{flex: 1, height: this.props.height || 400,}}>
        <WebView
          ref="chart"
          onMessage={this.onMessage}
          scrollEnabled = {false}
          injectedJavaScript = {renderChart(this.props)}
          style={[this.props.style,{
            height: this.props.height || 400,
          }]}
          source={source}
        />
      </View>
    );
  }
}
