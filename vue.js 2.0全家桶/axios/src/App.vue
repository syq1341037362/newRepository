<template>
  <div id="app">
      <button @click="send">发送AJAX请求</button>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          {{index}}--{{item}}
        </li>
      </ul>
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
    return {
      list:''
    }
  },
  methods: {
    send(){
      this.$axios.get("/star").then(res=>{
        if(res.status==200){
          this.list = res.data
        }
      }).catch(err=>{
        console.log("错误");
      })
    }
  },
  components: {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
