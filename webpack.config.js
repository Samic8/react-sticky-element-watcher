var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {      
    path: path.join(__dirname, './dist'),      
    filename: 'index.js',      
    library: 'react-sticky-element-watcher',      
    libraryTarget: 'umd',      
    publicPath: '/dist/',      
    umdNamedDefine: true  
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          use: ["babel-loader"],
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
      },
    ]
  },
  resolve: {      
    alias: {          
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
    }  
  },  
  externals: {      
      // Don't bundle react or react-dom      
      react: {          
          commonjs: "react",          
          commonjs2: "react",          
          amd: "React",          
          root: "React"      
      },      
      "react-dom": {          
          commonjs: "react-dom",          
          commonjs2: "react-dom",          
          amd: "ReactDOM",          
          root: "ReactDOM"      
      }  
  } 
};