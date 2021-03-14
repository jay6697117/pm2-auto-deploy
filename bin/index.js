#!/usr/bin/env node
const path = require('path');
const shell = require('shelljs'); //  编写脚本的库
const chokidar = require('chokidar'); //  监听文件变动的库

const from = path.join(__dirname, '../assets/index.html'); //  需要上传文件的路径
const to = 'root@8.136.5.54:/home/zjh/demo/assets'; //  上传到服务器的路径
const password = 'Jay@881216';
const expectPath = path.join(__dirname, '../expect.exp'); //这个工具会模拟我们访问服务器的时候需要我们输入密码的操作，还可以设置免密登录就不需要这个文件的编写了。

const watcher = chokidar.watch(process.cwd());
watcher.on('change', function (filePath) {
  //  监听文件变化
  console.log('filePath :>> ', filePath);
  console.log('expectPath :>> ', expectPath);
  console.log('from :>> ', from);
  console.log('to :>> ', to);
  shell.exec(`expect ${expectPath} ${from} ${to} ${password}`);
});
