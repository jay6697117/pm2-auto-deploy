// 访问./assets 静态资源
const express = require('express');
let app = express();
app.use(express.static('assets'));
app.listen(3030, () => {
  console.log('server is run 3030, please open: http://localhost:3030/');
});

//测试 node 和 nodemon 命令的区别
// const express = require('express');
// const app = express();
// app.get('/', function (req, res) {
//   res.send('hello world 222222');
// });
// app.listen(3030, () => {
//   console.log('server is run 3030, please open: http://localhost:3030/');
// });
