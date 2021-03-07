const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin') // install for CSS style extract


module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css'); // for css extract
   return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: { //rules about conversion from one to another
      rules: [{
        loader:'babel-loader',
        test: /\.js$/, // 
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({ // create css separate files
          use: [
            {loader:'css-loader',
            options: {
              sourceMap:true
            }
          },
          {
            loader: 'sass-loader',
            options:{
              sourceMap : true
            }
          }
          ]
        })
      }]
    },
    plugins: [ // Create Separate css files
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true //REACT-ROUTER προσθήκη!!!
    }
}
   }