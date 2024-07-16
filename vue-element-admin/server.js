// // eslint-disable-next-line no-undef
// const express = require('express');  
// // eslint-disable-next-line no-undef
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 3000;
// // 使用body-parser中间件来解析请求体
// app.use(bodyParser.json());
// const cors = require('cors');  
// app.use(cors());
// // 模拟的用户数据
// const users = [
//   { username: 'admin', password: '123456' }
// ];
// // 
// // 登录API端点
// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;

//   // 验证用户凭证
//   const user = users.find(u => u.username === username && u.password === password);

//   if (user) {
//     res.status(200).json({ message: '登录成功' });
//   } else {
//     res.status(401).json({ message: '用户名或密码错误' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });