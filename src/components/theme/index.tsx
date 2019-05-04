import React from 'react';
import defaultTheme from './default';
import deepmerge from 'deepmerge';
import {Alert} from 'react-native';

//默认皮肤类型
export const ThemeCtx = React.createContext(defaultTheme);

//主题类型
export type Theme = typeof defaultTheme & {[key:string]:any};

//映射主题类型
export type PartialTheme  = Partial<Theme>;

//React Context Provider Props
export interface ThemeProviderProps {
  value?:PartialTheme;        //接受一个value属性传递给Provider的后代Consumers。
  children?:React.ReactNode;
}

export const ThemeProvider = (props:ThemeProviderProps)=>{
    const theme = {...defaultTheme,...props.value};
    return (
      <ThemeCtx.Provider value={theme}>
        {props.children}
      </ThemeCtx.Provider>
    );
}

//主题参数
export interface ThemeProps<T,S>{
  themeStyles:(theme:Theme)=>T;
  styles?:S;
  children:(
    styles:T & {[key:string]:any},
    theme:Theme
  )=>React.ReactNode;    //当前styles样式，当前主题 => 返回React节点
}

// 组件继承当前props
export type ThemeBoxStyles<T> = {styles?:Partial<T>};

//主题高阶组件
export class ThemeBox<T,S> extends React.Component<ThemeProps<T,S>>{

  static defaultProps = {
    themeStyles:()=>{}
  }

  //获取当前styles样式
  getCurrentStyles = (theme:Theme) => {

    const {themeStyles,styles} = this.props;

    const defaultThemeStyles = themeStyles(theme);

    if(styles){
      return deepmerge<T>(defaultThemeStyles,styles);       //合并样式
    }

    return defaultThemeStyles;

  }

  render(){
    return (
      // Consumer接收一个函数作为子节点，函数接收当前Context（主题）值作为参数，并返回一个React节点;
      // theme参数为组件树中上层context的最近的Provider的  value 属性，
      // 如果context没有Provider，那么theme默认为createContext()的defaultTheme
      <ThemeCtx.Consumer>
        {theme => this.props.children(this.getCurrentStyles(theme),theme)}
      </ThemeCtx.Consumer>
    );
  }

}
