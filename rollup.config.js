import fs from 'fs'
import path from 'path'
import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import PostCSS from 'rollup-plugin-postcss'
import simplevars from 'postcss-simple-vars'
import postcssImport from 'postcss-import'
import minimist from 'minimist'
import postcssUrl from 'postcss-url'
import url from '@rollup/plugin-url'
import nested from 'postcss-nested'
import { terser } from 'rollup-plugin-terser'
import autoprefixer from 'autoprefixer'

const postcssConfigList = [
  postcssImport({
    resolve(id, basedir) {
      // resolve alias @css, @import '@css/style.css'
      // because @css/ has 5 chars
      if (id.startsWith("@css")) {
        return path.resolve("./src/assets/styles/css", id.slice(5));
      }

      // resolve node_modules, @import '~normalize.css/normalize.css'
      // similar to how css-loader's handling of node_modules
      if (id.startsWith("~")) {
        return path.resolve("./node_modules", id.slice(1));
      }

      // resolve relative path, @import './components/style.css'
      return path.resolve(basedir, id);
    }
  }),
  simplevars,
  nested,
  postcssUrl({ url: "inline" }),
  autoprefixer({
    overrideBrowserslist: "> 1%, IE 6, Explorer >= 10, Safari >= 7"
  })
];

const argv = minimist(process.argv.slice(2))

const projectRoot = path.resolve(__dirname, '.')

const baseConfig = {
  plugins: {
    preVue: [
      alias({
        entries: [
          {
            find: '@',
            replacement: `${path.resolve(projectRoot, 'src')}`,
          },
        ],
        customResolver: resolve({
          extensions: ['.js', '.jsx', '.vue'],
        }),
      }),
    ],
    replace: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    },
    vue: {
      target: 'browser',
      preprocessStyles: true,
      postcssPlugins:[
       ...postcssConfigList
      ]
    },
    postVue: [
      // Process only `<style module>` blocks.
      PostCSS({
        modules: {
          generateScopedName: '[local]___[hash:base64:5]',
        },
        include: /&module=.*\.css$/,
      }),
      // Process all `<style>` blocks except `<style module>`.
      PostCSS({ include: /(?<!&module=.*)\.css$/,
        plugins:[
          ...postcssConfigList
        ]
       }),
        url({
          include: [
            '**/*.svg',
            '**/*.png',
            '**/*.gif',
            '**/*.jpg',
            '**/*.jpeg'
          ]
        }),
    ],
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue'],
      babelHelpers: 'bundled',
    },
  },
}

const external = ['vue']

const globals = { vue: 'Vue' }

const baseFolder = './src/'

const componentsFolder = 'components/'

const components = fs
  .readdirSync(baseFolder + componentsFolder)
  .filter((f) =>
    fs.statSync(path.join(baseFolder + componentsFolder, f)).isDirectory()
  )

const entriespath = {
  index: './src/index.js',
  ...components.reduce((obj, name) => {
    obj[name] = (baseFolder + componentsFolder + name + '/index.js')
    return obj
  }, {})
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Customize configs for individual targets
let buildFormats = []
// this will hold our whole configuration object 

if (!argv.format || argv.format === 'es') {
  const esConfig = {
    input: entriespath,
    external,
    output: {
        format: 'esm',
        dir: 'dist/esm'
    },
    plugins: [
      commonjs(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [
          [
            '@babel/preset-env',
            { modules: false }
          ],
        ],
      }),
    ],
  }

  const merged = {
    input: 'src/index.js',
    external,
    output: {
      format: 'esm',
      file: 'dist/vuelib.esm.js'
    },
    plugins: [
      commonjs(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [
          [
            '@babel/preset-env',
            { modules: false }
          ],
        ],
      }),
    ]
  }
  buildFormats.push(esConfig)
  buildFormats.push(merged)
}


if (!argv.format || argv.format === 'iife') {
  const unpkgConfig = {
    ...baseConfig,
    input: './src/index.js',
    external,
    output: {
      compact: true,
      file: 'dist/vuelib-browser.min.js',
      format: 'iife',
      name: 'vuelib',
      exports: 'named',
      globals,
    },
    plugins: [
      commonjs(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
      terser({
        output: {
          ecma: 5,
        },
      }),
    ],
  };
  buildFormats.push(unpkgConfig);
}

if (!argv.format || argv.format === 'cjs') {
  const cjsConfig = {
    ...baseConfig,
    input: entriespath,
    external,
    output: {
      compact: true,
      format: 'cjs',
      dir: 'dist/cjs',
      exports: 'named',
      globals,
    },
    plugins: [
      commonjs(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue({
        ...baseConfig.plugins.vue,
        template: {
          ...baseConfig.plugins.vue.template,
          optimizeSSR: true,
        },
      }),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
    ],
  };
  buildFormats.push(cjsConfig);
}

const mapComponent = (name) => {
  return [
    {
      input: baseFolder + componentsFolder + `${name}/index.js`,
      external,
      output: {
        format: 'umd',
        name: capitalize(name),
        file: `dist/components/${name}/index.js`,
        exports: 'named',
        globals,
      },
      plugins: [
        ...baseConfig.plugins.preVue,
        vue({}),
        ...baseConfig.plugins.postVue,
        babel({
          ...baseConfig.plugins.babel,
          presets: [
            [
              '@babel/preset-env',
              { modules: false }
            ],
          ],
        }),
        commonjs(),
      ]
    }
  ]
}

const ind = [...components.map((f) => mapComponent(f)).reduce((r, a) => r.concat(a), [])]

buildFormats = [...buildFormats, ...ind]

export default buildFormats;