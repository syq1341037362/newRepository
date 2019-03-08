<template>
  <div class="home">
    <div class="my-home-search-panel">
      <my-search-logo class="my-search-logo"></my-search-logo>
      <home-search-bar class="home-search-bar"></home-search-bar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MySearchLogo from '@/components/MySearchLogo.vue';
import HomeSearchBar from '@/components/HomeSearchBar.vue';

export default {
  name: 'home',
  components: {
    MySearchLogo,
    HomeSearchBar
  }
}
</script>

<style lang="scss" scoped>
  .my-home-search-panel{
    & .home-search-bar{
      margin: auto;
    }
  }
  .my-search-logo{
    margin-top: 60px;
    margin-bottom: 30px;
  }
</style>

