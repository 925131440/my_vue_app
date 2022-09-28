
// const proxy = require('http-proxy-middleware')

// module.exports = function (app) {
//   app.use(proxy('/api', //遇见/api-elm前缀的请求,就会触发该代理配置
//     {
//       target: 'https://c.m.163.com/ug', //请求转发给谁（能返回数据的服务器地址）
//       changeOrigin: true,  //控制服务器收到的响应头中Host字段的值
//       pathRewrite(path) {
//         return path.replace('/api', '/');
//         }
//     })
//   )
// }