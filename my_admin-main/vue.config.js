module.exports = {
  // publicPath: isDev ? '' : querystring.unescape('<%=request.getContextPath()%>'),
  publicPath: process.env.NODE_ENV === 'production'? '':'/',
  outputDir: process.env.NODE_ENV === 'production'? 'dist':'devDist',
  lintOnSave: false,
  // vue.config.js
  css: {
    loaderOptions: {
        scss: {
          prependData: `@import "./src/styles/main.scss";`
      },
    },
  },
};
