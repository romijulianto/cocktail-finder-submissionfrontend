const { merge } = require("webpack-merge");
const common = require("./webpack.common");
 
module.exports = merge(common, {
   mode: "development",
   devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3900 // <--- Add this line and choose your own port number
  }
})