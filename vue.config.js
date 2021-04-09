const path = require('path')
const $ = require('jquery')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
// const fs = require('fs')

const PATHS = {
  dist: path.resolve(__dirname, './dist'),
  srcComponents: path.resolve(__dirname, './src/components'),
  srcRouter: path.resolve(__dirname, './src/router'),
  srcPages: path.resolve(__dirname, './src/views'),
  srcAssets: path.resolve(__dirname, './src/assets/'),
  src: path.resolve(__dirname, './src'),
  srcAppJs: path.resolve(__dirname, './src/index.js'),
  assets: 'assets/',
  assetsFonts: 'assets/fonts',
  assetsImg: 'assets/img',
  assetsLess: 'assets/less',
  assetsCss: 'assets/css',
  srcAssetsLess: path.resolve(__dirname, './src/assets/less'),
  srcAssetsCss: path.resolve(__dirname, './src/assets/css'),
  srcAssetsImg: path.resolve(__dirname, './src/assets/img')
}

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: process.env.VUE_APP_TITLE
    }
  },

  publicPath: '/',
  outputDir: `./docs`,
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: process.env.NODE_ENV !== 'production',

  runtimeCompiler: true,
  chainWebpack: config => {
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    },

    // https://github.com/nguyenvanduocit/vue-cli-plugin-style-resources-loader
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/less/_var.less')
      ]
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.vue', '.js'],
      alias: {
        '@': PATHS.src,
        '$': 'node_modules/jquery/dist/jquery.min.js',
        'p-views': PATHS.srcPages,
        'assets': PATHS.srcAssets,
        'assetsImg': PATHS.srcAssetsImg,
        'less': PATHS.srcAssetsLess,
        'css': PATHS.srcAssetsCss,
        'router': PATHS.srcRouter,
        'components': PATHS.srcComponents
      }
    },
    devtool: 'eval-source-map'
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  }
}
