import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '390px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FAB00E',
          '00': '#FFFAF0',
          '05': '#FEF2D7',
          10: '#FEEABE',
          15: '#FDE2A5',
          20: '#FCDA8C',
          30: '#FCD173',
          40: '#FBC95A',
          50: '#FBC141',
          60: '#FAB928',
          70: '#FAB00E',
          80: '#EBA305',
          90: '#D29205',
          100: '#B98004',
        },
        gray: {
          '00': '#FFFFFF',
          '05': '#F2F2F3',
          10: '#E4E4E7',
          15: '#D7D7DA',
          20: '#CACACE',
          30: '#AFAFB6',
          40: '#95959D',
          50: '#7A7A85',
          60: '#62626A',
          70: '#494950',
          80: '#313135',
          90: '#18181B',
        },
        grayscale: {
          'gray-100': '#1D1D1F',
        },
        warning: {
          DEFAULT: '#F06E10',
          '00': '#FCE5D4',
          10: '#FBD3B7',
          20: '#F8BF95',
          30: '#F6AB74',
          40: '#F49652',
          50: '#F28231',
          60: '#F06E10',
        },
        danger: {
          DEFAULT: '#EF3E26',
          '00': '#FEEEEC',
          10: '#FBD1CB',
          20: '#F9B3A9',
          30: '#F69588',
          40: '#F47867',
          50: '#F15A46',
          60: '#EF3E26',
        },
        success: {
          DEFAULT: '#31A859',
          '00': '#C4EED2',
          '01': '#DFF6E7',
          10: '#A8E6BD',
          20: '#8CDEA8',
          30: '#71D693',
          40: '#55CD7E',
          50: '#3AC569',
          60: '#31A859',
        },
        kakao: {
          yellow: '#FEE500',
        },
        naver: {
          green: '#03C75A',
        },
      },
    },
  },
  plugins: [],
};
export default config;
