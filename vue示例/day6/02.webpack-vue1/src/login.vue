<template>
    <div>
      <h1>这是登录组件使用.vue 文件定义的----{{msg}}</h1>
    </div>
</template>

<script>
export default {
  data(){//组件中的data必须是function
    return {
      msg:'123'
    }
  },
  methods:{
    show:()=>console.log('调用了 login.vue的 show方法')
  }
}
</script>

<style>

</style>