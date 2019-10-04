import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400']
    },
    {
      name: 'Lato',
      styles: ['400', '400i', '700', '700i']
    },
  ],
  headerFontFamily: ['Montserrat'],
  bodyFontFamily: ['Lato']
});

export default typography;
