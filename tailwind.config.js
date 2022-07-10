/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#__next',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors : {
        'primary' : '#278EA5',
        'secondary' : '#1F4287',
        'light' : '#21E6C1',
        'dark' : '#071E3D',
        'black' : '#1c2a30',
        'wah' : '#ffffff',
        'gray' : '#ebebeb',
        'warning' : '#dacd18',
        'danger' : '#FF304F',
        'light-overlay' : 'rgba(#21E6C1, 0.1)'
      },
      fontFamily : {
        'primary' : ['Nunito', 'sans-serif'],
        'heading' : ['Catamaran', 'sans-serif'],
        'writing' : ['Yellowtail' , 'cursive'],
        'special' : ['Cairo', 'sans-serif']
      },
      dropShadow: {
        'text': '1px 1px 2px #071e3d',
      }
    },
  },
  plugins: [],
};
