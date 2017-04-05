module.exports = {
  entry : "./src/main.js", // 页面的入口
  output : { // 指页面通过webpack打包后生成的目标文件放的地方
    filename : "./build/build.js"
  },
  module : {
    loaders : [ // 文件加载器，
    
    ]
  },
  resolve : { // 定义解析模块路径时的配置，常用extensions；用来指定模块的后缀，这样在引入模块时就不需要写后缀，会自动补全
    
  },
  plugins : [ // 定义需要使用的插件
  
  ]
}
