const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Tailwind Next',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: { fonts: { body: '', heading: '' } },
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/emartini/code/next-ts-tailwindcss/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Tailwind Next',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/emartini/code/next-ts-tailwindcss',
          templates:
            '/home/emartini/code/next-ts-tailwindcss/node_modules/docz-core/dist/templates',
          docz: '/home/emartini/code/next-ts-tailwindcss/.docz',
          cache: '/home/emartini/code/next-ts-tailwindcss/.docz/.cache',
          app: '/home/emartini/code/next-ts-tailwindcss/.docz/app',
          appPackageJson:
            '/home/emartini/code/next-ts-tailwindcss/package.json',
          appTsConfig: '/home/emartini/code/next-ts-tailwindcss/tsconfig.json',
          gatsbyConfig:
            '/home/emartini/code/next-ts-tailwindcss/gatsby-config.js',
          gatsbyBrowser:
            '/home/emartini/code/next-ts-tailwindcss/gatsby-browser.js',
          gatsbyNode: '/home/emartini/code/next-ts-tailwindcss/gatsby-node.js',
          gatsbySSR: '/home/emartini/code/next-ts-tailwindcss/gatsby-ssr.js',
          importsJs:
            '/home/emartini/code/next-ts-tailwindcss/.docz/app/imports.js',
          rootJs: '/home/emartini/code/next-ts-tailwindcss/.docz/app/root.jsx',
          indexJs:
            '/home/emartini/code/next-ts-tailwindcss/.docz/app/index.jsx',
          indexHtml:
            '/home/emartini/code/next-ts-tailwindcss/.docz/app/index.html',
          db: '/home/emartini/code/next-ts-tailwindcss/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
