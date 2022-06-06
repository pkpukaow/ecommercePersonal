module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroudColor: {},
    },
  },
  plugins: [require("flowbite/plugin")],
};
