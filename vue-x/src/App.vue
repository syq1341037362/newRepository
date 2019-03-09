<template>
  <div id="app">
    
    <button @click="COUNTADD">增加</button>
    <button @click="COUNTDECREASE">减少</button>
    <button @click="COUNTADDASYNC">增加异步操作</button>
    <p>当前的数字为 {{getCount}}</p>
    <p>{{isEvenOrOdd}}</p>
    
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
import {COUNTADD,COUNTDECREASE,COUNTADDASYNC} from './store/types.js'
export default {
  name: 'app',
  computed:mapGetters([
    "getCount","isEvenOrOdd"
  ]),
  methods:mapActions([
    "COUNTADD",
    "COUNTDECREASE",
    "COUNTADDASYNC"
  ])
   
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
