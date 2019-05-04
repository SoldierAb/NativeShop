import {ViewStyle,TextStyle,StyleSheet} from 'react-native';
import {Theme} from '../../theme';

export interface ButtonStyles {
  container:ViewStyle;
  primaryHighlight:ViewStyle;
  warningHighlight:ViewStyle;
  errorHighlight:ViewStyle;
  wrapperStyle:ViewStyle;
  primaryColor:TextStyle;
  indicator:TextStyle;
}

export default (theme:Theme)=>StyleSheet.create<ButtonStyles>({
      container:{
        flexDirection:'row'
      },
      primaryHighlight:{

      },
      warningHighlight:{},
      errorHighlight:{},
      wrapperStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.border_radius_base,
        borderWidth: 1,
      },
      indicator:{
        color:theme.indicator_color
      },
      primaryColor:{
        color:theme.primary_color
      },
})
