module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/base/_variables.scss"`,
      },
    },
  },
}
