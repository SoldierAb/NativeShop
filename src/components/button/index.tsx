import React from 'react';
import {ViewStyle,TextStyle,View,Text,StyleProp,ActivityIndicator,TouchableHighlight,TouchableHighlightProperties} from 'react-native';
import {ButtonPropsType} from './PropsType';
import {ThemeBox} from '../theme';

export interface ButtonProps extends ButtonPropsType,TouchableHighlightProperties{
  activeStyle?:StyleProp<ViewStyle>;
  onPress?:(_?:any)=>void;
}

export default class KButton extends React.Component<ButtonProps,any>{

  static defaultProps = {
    pressIn:false,
    disabled:false,
    loading:false,

    onPress:(_?:any)=>{},
    onPressIn:(_?:any)=>{},
    onPressOut:(_?:any)=>{},
  };

  constructor(props:ButtonProps){
    super(props);
    this.state = {
      pressIn:false
    };
  }

  onPressIn=(...arg:any[])=>{

    this.setState({
      pressIn:true
    });

    if(this.props.onPressIn){
      (this.props.onPressIn as any)(...arg);
    }

  }

  onPressOut=(...arg:any[])=>{

    this.setState({
      pressIn:false
    });

    if(this.props.onPressOut){
      (this.props.onPressOut as any)(...arg);
    }

  }

  render(){

    const {
      size = 'large',
      type = 'default',
      disabled,
      loading,
      onPress,
      ...restProps
    } = this.props;

    return (
      <TouchableHighlight
        activeOpacity={0.4}
        disabled={disabled}
        onPress={(e?:any)=>onPress && onPress(e)}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        {...restProps}
      >
        <View>
          {
            loading?(
              <ActivityIndicator
                size="small"
                animating
              />
            ):null
          }
          <Text>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    )

  }

}
