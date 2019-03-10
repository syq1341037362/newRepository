<template>
  <div id="app">
      <button @click="getDataFromQiHu">获取360搜索的数据</button>
      <button @click="getDataFromBaiDu">获取百度搜索的数据</button>
      <button @click="getDataFromMy">获取自己的server</button>
      <p v-for="item in list" :key="item">
        {{item}}
      </p>
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
    return{
      list:[]
    }
  },
  components: {
  },
  methods:{
    //https://sug.so.360.cn/suggest?callback=suggest_so&encodein=utf-8&encodeout=utf-8&format=json&fields=word&word=a
    getDataFromQiHu(){
      this.$jsonp('https://sug.so.360.cn/suggest',{
        word:'a',
        callbackQuery: 'callback', 
　　    callbackName: 'show'

      }).then(res=>{
        console.log('--------来自360搜索------');
        this.list = res.s;
        console.log(res)
        }).catch(err=>{
          console.log(err);
        })
    },
    //https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=jQuery110205341938918837992_1552220597200&_=1552220597214
    getDataFromBaiDu(){
      this.$jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
        wd:"a",
        callbackQuery: 'cb', 
　　    callbackName: 'show'})
      .then(res=>{
         console.log('--------来自百度搜索------');
         this.list = res.s;
         console.log(res);
        }).catch(err=>{
          console.log(err);
        })
    },
    getDataFromMy(){
      this.$jsonp('http://localhost:3000/say',{
        params:{
        wd:'我爱你',
        cb:'show'

      }}).then(res=>{
        console.log(res)
      })
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
</style>
