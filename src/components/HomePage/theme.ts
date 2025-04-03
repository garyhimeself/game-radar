// 游戏网站的主题配置

export const COLORS = {
  // 主色调
  deepSpaceBlue: '#0B1433',
  
  // 强调色
  neonBlue: '#00C2FF',
  neonPurple: '#7B42F6',
  
  // 辅助色
  spaceBlack: '#050914',
  starGray: '#2D3748',
  
  // 文本色
  galaxyWhite: '#E2E8F0',
  stardust: '#A0AEC0',
  
  // 功能色
  success: '#48BB78',
  error: '#F56565',
  warning: '#ED8936',
  info: '#4299E1'
};

// 渐变样式
export const GRADIENTS = {
  primaryGradient: `linear-gradient(135deg, ${COLORS.deepSpaceBlue} 0%, ${COLORS.neonPurple} 100%)`,
  accentGradient: `linear-gradient(135deg, ${COLORS.neonBlue} 0%, ${COLORS.neonPurple} 100%)`,
  cardGradient: `linear-gradient(to top, rgba(5, 9, 20, 0.8) 0%, rgba(5, 9, 20, 0) 50%)`
};

// 阴影样式
export const SHADOWS = {
  cardShadow: '0 4px 20px rgba(0, 194, 255, 0.15)',
  buttonShadow: '0 4px 12px rgba(123, 66, 246, 0.2)',
  hoverShadow: '0 6px 25px rgba(0, 194, 255, 0.25)',
  navShadow: '0 4px 15px rgba(5, 9, 20, 0.2)'
};

// 边框样式
export const BORDERS = {
  cardBorder: '1px solid rgba(0, 194, 255, 0.1)',
  buttonBorder: '1px solid rgba(123, 66, 246, 0.3)',
  dividerBorder: '1px solid rgba(160, 174, 192, 0.1)'
};

// 过渡和动画
export const TRANSITIONS = {
  fast: 'all 0.2s ease',
  medium: 'all 0.3s ease',
  slow: 'all 0.5s ease'
};

// 断点
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// 间距和尺寸
export const SPACING = {
  cardGap: '1.5rem',
  sectionGap: '3rem',
  pagePadding: {
    desktop: '2rem',
    tablet: '1.5rem',
    mobile: '1rem'
  }
};

// 导出主题对象
const theme = {
  colors: COLORS,
  gradients: GRADIENTS,
  shadows: SHADOWS,
  borders: BORDERS,
  transitions: TRANSITIONS,
  breakpoints: BREAKPOINTS,
  spacing: SPACING
};

export default theme; 