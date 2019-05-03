const brandPrimary = '#108ee9';

export default {
  // base
  primary_color: '#1890ff',                         // 默认基础色
  link_color: '#1890ff',                            // 链接颜色
  success_color: '#52c41a',                         // 成功颜色
  warning_color: '#faad14',                         // 警告颜色
  error_color: '#f5222d',                           // 出错颜色
  font_size_base: 14,                           // 基础字体大小
  heading_color:' rgba(0, 0, 0, .85)',              // 标题颜色
  text_color: 'rgba(0, 0, 0, .65)',                 // 主题文本颜色
  text_color_secondary :' rgba(0, 0, 0, .45)',      // 二级标题颜色
  disabled_color : 'rgba(0, 0, 0, .25)',            // 禁用颜色
  border_radius_base: 4,                        // 边框圆角
  border_color_base: '#d9d9d9',                     // 边框基础颜色
  box_shadow_base: '0 2px 8px rgba(0, 0, 0, .15)',  // 基础阴影

  // ActivityIndicator
  indicator_color:'red',

  // button
  button_height: 47,
  button_font_size: 18,

  button_height_sm: 23,
  button_font_size_sm: 12,

  primary_button_fill: brandPrimary,
  primary_button_fill_tap: '#0e80d2',

  ghost_button_color: brandPrimary,                 // 同时应用于背景、文字颜色、边框色
  ghost_button_fill_tap: `${brandPrimary}99`,

  warning_button_fill: '#e94f4f',
  warning_button_fill_tap: '#d24747',

}
