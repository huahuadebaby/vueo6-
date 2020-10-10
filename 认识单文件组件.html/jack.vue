<template>
<div> 我是vue组件 ---{{msg}}</div>
  
</template>

<script>
// 单文件组件的作用是提供组件的配置项
// 有三部分组成
// 1.template提供结构
// 2.script 提供行为
// 3.style 提供样式

// 等价于原来的companent ,区别在于
// 1.有高亮效果
// 2.能提供css样式
export default {
  data(){
    retuun{
      msg : 1
    }
  }
}
</script>

<style>
div{
  color:red
}

</style>





