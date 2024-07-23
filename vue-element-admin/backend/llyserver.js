//1.引入依赖

// - ** 用途 **：引入 Express 框架，使我们可以使用其提供的功能。
// - ** 原因 **：Express 是一个基于 Node.js 的 Web 应用框架，简化了服务器和路由的创建。
// - ** 依据 **：使用  require  函数引入模块是 Node.js 的标准做法
// eslint-disable-next-line no-undef
const express = require('express')
// eslint-disable-next-line no-undef
//2.创建应用实例

//   ** 用途 **：创建一个 Express 应用实例。
// - ** 原因 **：通过调用 Express 函数，我们可以创建一个应用实例，用于定义路由和中间件。
// - ** 依据 **：这是使用 Express 框架的标准步骤。

const app = express()

// 3.定义端口

// - ** 用途 **：定义服务器监听的端口号。
// - ** 原因 **：指定服务器运行时监听的端口，客户端可以通过这个端口访问服务器。
// - ** 依据 **：端口号可以是任意未被占用的有效端口，3000 是一个常见的选择。

const PORT = 3000

// 4.使用中间件解析json解析体

/*
- ** 用途 **：使用中间件解析 JSON 格式的请求体。 
- ** 原因 **：许多 API 请求会发送 JSON 数据，这个中间件可以自动解析这些数据，并将其挂载到  req.body  上。 
- ** 依据 **：Express 提供的内置中间件，用于处理 JSON 格式的请求数据。 
*/

app.use(express.json())
const users = [
    {
        username: 'admin', password: '123456'
    }
]
// 跨域请求
/*
如果你想要限制跨域请求（CORS，Cross-Origin Resource Sharing），并且只允许来自特定源的请求（如 http://localhost:5173），你应该使用一个专门的 CORS 中间件，如 cors 包，它是独立于 Express 的，但可以与 Express 一起使用。
*/
// const cors = require(cors())
// app.use(cors({
//     origin: 'http://localhost:5173'
// }))
app.use(express({
    origin: 'http://localhost:5173' // 仅允许来自 http://localhost:5173 的请求  
}))


// 5.定义GET路由

/*
- **用途**：定义一个简单的 GET 路由，当客户端访问根路径  /  时返回 "Hello World!"。 
- **原因**：设置一个基本的路由，验证服务器是否正常工作。 
- **依据**： app.get  是 Express 用于定义 GET 请求路由的方法。 
*/
/*
第二个参数是一个回调函数，它会在每次匹配到定义的路径和HTTP方法（在这个例子中是GET请求到根路径）时被调用。
这个回调函数接收两个参数：req（请求对象）和res（响应对象）。
req（请求对象）包含了请求的所有信息，比如查询参数、请求头、请求体等。
res（响应对象）用于向客户端发送响应，包括状态码、响应头、响应体等。
*/

app.get('/', (req, res) => {
    res.send(`ok`)
})

// 登录API端点
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = user.find(u => username === username && u.password === password);

    if (user) {
        res.status(200).json({
            message: '成功'
        });
    }
    else {
        res.status(200).json({
            message: '失败'
        });
    }
}

)
app.listen(3000, () => {
    console.log(`Server is running on hppt://localhost:${PORT}`)
    //注意用间隔号才能引用 PORT
})






/*

*/



/*

*/