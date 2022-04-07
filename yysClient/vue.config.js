const path = require("path")
const resolve = dir => {
  return path.join(__dirname, dir)
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath:process.env.NODE_ENV === 'production' ? '' : '/',
  productionSourceMap:false,
  devServer:{
    port:2021,
    proxy:{
      '/api':{
        target:'http://106.14.40.203:8084',
        pathRewrite:{
          '^/api':'/'
        }
      },
      '/YYS-SSOServer':{
        target:'https://yys-dev.iflyhealth.com/',
        pathRewrite:{
          '^/YYS-SSOServer':'/'
        }
      },
    }
    // https:true
  },
  chainWebpack: config => {
    // key,value自行定义
    config.resolve.alias.set('@', resolve('src')) 
  },
  configureWebpack: {
    devtool: 'source-map'
  }
})

//YYS-SSOServer/gateway/uap-service-ext-service/v1/pb/login/phone",