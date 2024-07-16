<template>
<div class="login">
    <h1>login</h1>
    <form @submit.prevent="handleLogin">
<div>
    <label for="username">
用户名</label>
    <input type="text" id="username" v-model="username" required />
    <!-- 这部分包含了一个div容器，里面有一个label元素和一个input元素。label的for属性与input的id属性相匹配，这样点击label时就会聚焦到对应的input输入框上。input的类型是text，用于输入文本，v-model="username"是Vue的双向数据绑定指令，它将输入框的值与组件的username数据属性同步。required属性是HTML的表单验证属性，表示这个输入框是必填的。 -->
</div>
<div>
    <label for="password">密码</label>
    <input type="password" v-model="password" id="password" required>
</div>
 <button type="submit">登录</button>
 <p v-if="errorMessage">{{ errorMessage }}</p> <!-- 显示错误消息 -->
    </form>
</div>
</template>
<!-- 响应式数据：使用Vue的ref函数来创建响应式数据（如username、password、errorMessage），这样当这些数据变化时，Vue会自动更新DOM，实现数据的双向绑定。
组件化：Vue是一个构建用户界面的渐进式框架，它鼓励开发者使用组件化的方式来构建应用。将登录逻辑封装在一个组件中，可以提高代码的可重用性和可维护性。
异步操作：登录通常需要与后端服务器进行交互，这是一个异步过程。使用async/await语法可以让我们以同步的方式编写异步代码，使逻辑更加清晰易懂。
错误处理：在网络请求或数据处理过程中，错误是不可避免的。通过try...catch语句来捕获并处理这些错误，可以提供更好的用户体验（如显示错误消息）。
表单验证：虽然在这个例子中我没有直接实现前端表单验证（比如检查用户名和密码是否为空），但在实际应用中，这是非常重要的一步。它可以在数据发送到服务器之前先进行一次检查，减少不必要的网络请求。
路由跳转：使用Vue Router进行页面跳转，可以方便地管理应用的路由逻辑，实现单页面应用（SPA）的页面导航。 -->
<script setup lang="ts">
// 这是Vue 3 <script setup> 语法的开始，它允许您使用更简洁的语法来编写组件逻辑。lang="ts" 指定了脚本使用TypeScript编写。
// 响应式数据
const username=ref('')
const password=ref('')//v-model 指令将这个引用的 .value 属性绑定到一个输入框上这样，当用户在输入框中输入文本时，username.value 的值会自动更新
const errorMessage = ref('')
const router = useRoute()
const handleLogin = async () => {
  // 这里调用后端 API 进行验证
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: username.value, password: password.value }),
  })

  if (response.ok) {
    // 登录成功，跳转到首页
    router.push('/')
  } else {
    // 登录失败，处理错误
    alert('登录失败，请检查用户名和密码')
  }
}
</script>
<!-- scoped属性确保这些样式只应用于当前组件的模板。 -->
 <style scoped>  
.login {  
  max-width: 300px;  
  margin: 0 auto;  
  padding: 1rem;  
  border: 1px solid #ccc;
  border-radius: 4px;  
}  
</style>