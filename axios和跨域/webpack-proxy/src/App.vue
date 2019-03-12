<template>
  <div id="app">
    <button @click="getData">获取接口数据通过webpack提供的proxy</button>
    <div v-for="item in list" :key="item.album_id">
      <img :src="item.pic_big">
      <p>歌曲名称：{{item.title}}</p>
      <p>作者：{{item.author}}</p>
      <p>来源：{{item.name}}</p>
      <p>来源简介：{{item.comment}}</p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {},
  data(){
    return{
      list:[]
    }
  },
  methods: {
    getData(){
      this.$axios.get('/api/app').then(res=>{
        if(res.data.code==200){
          this.list = res.data.result
        }
      })
      // this.$axios.post('/api/music',{}).then(res=>{
      //   if(res.data.code==200){
      //     this.list = res.data.result
      //   }
      // })
    }
  }
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
 button{
   margin-bottom: 50px;
 }
</style>
