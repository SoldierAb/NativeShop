import React from 'react';
import {ViewStyle,View,Text,StyleProp,ActivityIndicator,TouchableHighlight,TouchableHighlightProperties,Alert} from 'react-native';
import {ButtonPropsType} from './PropsType';
import {ThemeBox,ThemeBoxStyles} from '../theme';
import buttonStyles,{ButtonStyles} from './style';

export interface ButtonProps extends ButtonPropsType,TouchableHighlightProperties,ThemeBoxStyles<ButtonStyles>{
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


  renderButton = (_styles:any)=>{

    const {
      size = 'large',
      type = 'primary',
      disabled,
      loading,
      onPress,
      ...restProps
    } = this.props;


    const boxStyles = _styles[`wrapperStyle`],
          underlayColor = 'green',
          indicator_color = 'red',
          textStyle = _styles[`${type}Color`];

    return (
            <TouchableHighlight
              activeOpacity={0.4}
              style={boxStyles}
              disabled={disabled}
              underlayColor={underlayColor}
              onPress={(e?:any)=>onPress && onPress(e)}
              onPressIn={this.onPressIn}
              onPressOut={this.onPressOut}
              {...restProps}
            >
              <View>
                {
                  loading?(
                    <ActivityIndicator
                      color={indicator_color}
                      size="small"
                      animating
                    />
                  ):null
                }
                <Text style={textStyle}>{this.props.children}</Text>
              </View>
            </TouchableHighlight>
      );
  }

  render(){
    const {styles} = this.props;
    return (
      <ThemeBox themeStyles={buttonStyles} styles={styles}>
        { _styles=>this.renderButton(_styles) }
      </ThemeBox>
    );
  }

}
