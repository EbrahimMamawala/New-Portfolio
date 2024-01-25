/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          qualities: {
              words: ['Full Stack Developer', 'Problem Solver', 'Continuous Learner', 'Tech Geek', 'Code Enthusiast'],
              delay: 2
          }
      }
  })
  ],
}

