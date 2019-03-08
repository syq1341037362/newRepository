<template>
  <div class="scarch-result">
    <img class="logo" src="./../assets/mysearch_logo_small.png" alt="logo"  @click="goHome">
    <round-search-bar :search='search'></round-search-bar>
  </div>
</template>

<script>
import RoundSearchBar from './../components/RoundSearchBar.vue'
export default {
  name:'search-result-toobar',
  methods:{
      goHome(){
          this.$router.push('/');
      }
  },  
  components:{
    RoundSearchBar
  },
  props:['search']
}
</script>

<style lang="scss" scoped>
@import './../themes/base.scss';
    .scarch-result{
        text-align: left;
        padding: $space-large;
        border-bottom: 1px solid $border-color-gray;
        & .logo{
            height: $round-search-bar-height * 0.8;
            vertical-align: middle;
            margin: $space-large;
        }
    }
</style>
