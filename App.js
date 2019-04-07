/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,TextInput, StyleSheet, Text, View,TouchableHighlight,Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state={
      text:''
    };
  }

  pressBtn(){
      Alert.alert('btn press');
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column',justifyContent:'center',alignItems:'stretch' }}>
            <View style={{width: '50%', height: 50, backgroundColor: 'powderblue',}} />
            <View style={{height: 100, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'red'}} />

            <TextInput onChangeText={(text)=>{this.setState({text})}}/>
            <Text style={{padding:10,fontSize:12}}>
              { this.state.text.split(' ').map(val=>val&&`${val}~`).join('-') }
            </Text>
            <TouchableHighlight onPress={this.pressBtn} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.btnText}>
                    TouchableHighlight
                </Text>
              </View>
            </TouchableHighlight>
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
  btnText:{
    color:'white',
    },
  button:{
    backgroundColor:'#2196f3',
    width:120,
    height:30,
    borderRadius:10,
    alignItems:'center'
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
});
