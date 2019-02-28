<template>
    <div>
        <input type="button" value="增加" @click="add">
        <input type="button" value="减少" @click="remove">
        <br>
         <input type="text" v-model="$store.state.count">
 
    </div>
</template>
<script>
export default {
    data(){
        return{
            // count:0
        }
    },
    methods:{
        add(){
            // 千万不要这么用 不符合vuex的设计理念
            // this.$store.state.count++
            this.$store.commit('increment')
        },
        remove(){
            // 千万不要这么用 不符合vuex的设计理念
            // this.$store.state.count++
            this.$store.commit('subtract',{c:1,d:2})
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
