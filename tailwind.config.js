const breakpoints = {
  xs: "333px",
  sm: '500px',
  md: '777px',
  lg: '955px',
  xl: '11199px',
  xxl: '1299px',

}

/** @type {import('tailwindcss').Config} */
module.exports = {
  important :true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
      
        mdUp: { min: breakpoints.sm },
        lgUp: { min: breakpoints.md },
        xlUp: { min: breakpoints.lg },
        xxlUp: { min: breakpoints.xl },
        xxxlUp: { min: breakpoints.xxl },
  
        xxlDown: { max: breakpoints.xxl },
        xlDown: { max: breakpoints.xl },
        lgDown: { max: breakpoints.lg },
        mdDown: { max: breakpoints.md },
  
        xxl: { max: breakpoints.xxl, min: breakpoints.xl },
        xl: { max: breakpoints.xl, min: breakpoints.lg },
        lg: { max: breakpoints.lg, min: breakpoints.md },
        md: { max: breakpoints.md, min: breakpoints.sm },
        sm: { max: breakpoints.sm },
        xs: { max: breakpoints.xs }, // sm ONLY



      },


    },
  },
  plugins: [],
}
