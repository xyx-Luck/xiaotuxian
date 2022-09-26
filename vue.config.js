const { defineConfig } = require('@vue/cli-service');
const path=require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 使用绝对路劲
      patterns: [
        path.join(__dirname,'./src/assets/styles/mixins.less'),
        path.join(__dirname,'./src/assets/styles/variables.less'),
      ]
    }
  },
})
