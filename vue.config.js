module.exports = {
    productionSourceMap: false,
    configureWebpack: {
      externals: {
        jquery: 'window.jQuery',
        vue: 'window.Vue',
        vuex: 'window.Vuex',
        'vue-router': 'window.VueRouter',
        'axios': 'window.axios',
      },
      // optimization: {
      //   minimizer: [
      //     new CompressionPlugin({
      //       filename: '[path].gz[query]',
      //       algorithm: 'gzip',
      //       test: /\.(js|css|html|svg)$/,
      //       compressionOptions: {
      //         level: 8,
      //       },
      //       threshold: 10240,
      //       minRatio: 0.8,
      //       deleteOriginalAssets: false,
      //     }),
      //     new TerserPlugin({
      //       parallel: true,
      //     }),
      //   ],
      // },
    },
    devServer: {
      before(app){
        app.get('/api/userInfo', function(req, res) {
          res.json({
            code: 0,
            userName: 'Admin',
            mobile: '18506170101'
          });
        });
        app.get('/api/userList', function(req, res) {
          res.json({
            code: 0,
            userList: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄',
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
            }]
          });
        });
      },
      hot: false,
      inline: false,
      // https: true,
      disableHostCheck: true,
      // proxy: {
        
      // },
    },
  }
  