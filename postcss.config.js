const configPath = `${__dirname}/tailwind.config.js`

module.exports = () => ({
  plugins: [require("tailwindcss")(configPath)],
})