import React from 'react';
import defaultTheme from './default';
import deepmerge from 'deepmerge';

export const ThemeCtx = React.createContext(defaultTheme);

//主题类型
export type Theme = typeof defaultTheme & {[key:string]:any};

//主题参数
export interface ThemeProps<T,S>{
  themeStyles:(theme:Theme)=>T;
  styles?:S;
  children:(styles:T,theme:Theme)=>React.ReactNode;
}

export class ThemeBox<T,S> extends React.Component<ThemeProps<T,S>>{
  static defaultProps = {
    themeStyles:()=>{}
  }

  getStyles = (theme:Theme) => {
    const {themeStyles,styles} = this.props;
    const defaultThemeStyles = themeStyles(theme);
    if(styles){
      return deepmerge<T>(defaultThemeStyles,styles);
    }
    return defaultThemeStyles;
  }

  render(){
    return (
      <ThemeCtx.Consumer>
        {theme => this.props.children(this.getStyles(theme),theme)}
      </ThemeCtx.Consumer>
    );
  }

}
