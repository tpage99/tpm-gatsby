import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Merriweather',
      styles: ['700'],
    },
    {
      name: 'Lato',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Merriweather'],
  bodyFontFamily: ['Lato'],
});

export default typography;
