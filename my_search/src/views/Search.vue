<template>
  <div class="scarch-page">
    <search-result-too-bar :search="search" v-model="search"></search-result-too-bar>
    <div v-for="info in searchResultList" :key="info.id">
      <search-result-item :info="info"></search-result-item>
    </div>
    
  </div>
</template>

<script>
import SearchResultTooBar from './../components/SearchResultTooBar.vue';
import SearchResultItem from './../components/SearchResultItem.vue'
const DB = require ('./../data/search.json');
export default {
  created(){
    this.doSearchResult();
  }
  ,
  beforeRouteUpdate (to, from, next) {
    next();
    this.doSearchResult();
  },
  data(){
    return {
      searchResultList:[]
    }
  },
  methods:{
    doSearchResult(){
      const searchText = this.$route.params.searchText;
      if(DB.hasOwnProperty(searchText)){
        this.searchResultList = DB[searchText];
      }else{
        this.searchResultList =[];
      }
      console.log(searchText,this.searchResultList);
    }
  },
  components:{
    SearchResultTooBar,
    SearchResultItem
  },
  computed:{
    search:function(){
       return this.$route.params.searchText;
    }
  }
}
</script>