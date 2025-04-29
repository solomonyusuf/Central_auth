const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `  @import "@/assets/sass/_variables.scss";
          @import "@/assets/sass/_utilities.scss";`
      }
    }
  }
})
