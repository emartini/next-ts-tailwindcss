const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/emartini/code/next-ts-tailwindcss/.docz/.cache/dev-404-page.js"))),
  "component---docs-typography-mdx": hot(preferDefault(require("/home/emartini/code/next-ts-tailwindcss/docs/Typography.mdx"))),
  "component---readme-md": hot(preferDefault(require("/home/emartini/code/next-ts-tailwindcss/README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/emartini/code/next-ts-tailwindcss/.docz/src/pages/404.js")))
}

