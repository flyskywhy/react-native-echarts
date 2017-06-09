import React, { Component } from 'react';
var echarts = require('echarts/index.js');

export default class App extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.option !== this.props.option) {
            this.myChart = echarts.init(document.getElementById(this.id));
            this.myChart && this.myChart.setOption(nextProps.option);
        }
    }

    componentWillMount() {
        this.id = `itminus_echarts${parseInt('' + Math.random() * 10000000, 10)}`;
    }

    render() {
          return React.createElement('div', {
            style: this.props.style,
            id: this.id
          });
    }
}
