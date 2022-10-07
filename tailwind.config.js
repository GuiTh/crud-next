module.exports = {
  purge:{
    content:[
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  safeList:[
    /^bg-/,
    /^to-/,
<<<<<<< HEAD
    /^from-/,
=======
    /^from-/
>>>>>>> e8f7f47ab9cd89547edccaaff7023d70ff9e7f3c
  ]
  },
  darkmode: false,
  theme:{
    extend: {},
  },
  variants:{
    extend: {},
  },
  plugins: [],

}