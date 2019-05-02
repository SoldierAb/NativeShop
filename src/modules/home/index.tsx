import React,{Component} from 'react';
import {Alert,ViewStyle,TextStyle,View,TextInput,Platform,StyleSheet} from 'react-native';
import KButton from '../../components/button';

export default class Home extends Component{
  state={
    disabled:false,
    loading:false
  }

  onPress=()=>{
    Alert.alert('onPress ----');
  }

  onPressIn=()=>{
    Alert.alert('onPressIn');
  }

  onPressOut=()=>{
    Alert.alert('onPressOut');
  }

  render(){
    const {disabled,loading} = this.state;
    return (
      <View>
        <KButton disabled={disabled} loading={loading} onPress={this.onPress} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>测试按钮</KButton>
      </View>
    )
  }
}
