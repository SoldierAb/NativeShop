/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, View,Alert} from 'react-native';
import Counter from './lib/src/modules/Counter';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {

  state={
    count:3
  }

  clickDec=()=>{
    this.setState({count:--this.state.count});
  }

  clickIncre=()=>{
    this.setState({count:++this.state.count});
  }

  render() {
    const {clickDec,clickIncre} =this;
    return (
      <View style={{flex: 1,flexDirection:'row', alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}}>
            <View style={{width: '30%', height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: '30%', height: 50, backgroundColor: 'green'}} />
            <View style={{width: '30%', height: 50, backgroundColor: 'yellow'}} />
            <Counter count={this.state.count} onInc={clickIncre} onDec={clickDec} />
      </View>
    );
  }

}
