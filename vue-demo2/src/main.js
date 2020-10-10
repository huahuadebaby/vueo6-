import Vue from 'vue'

// 使用app.vue渲染根组件
import App from './App.vue'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
