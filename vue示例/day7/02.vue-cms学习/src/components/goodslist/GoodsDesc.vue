<template>
    <div class="goodsdesc-container">
        <h3>{{info.name}}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            info:{}
        }
    },
    methods:{
        getGoodsDesc(){
             this.$axios.get('/getgoodsdesc',{
                 params:{
                     id:this.$route.params.id
                 }
             }).then(res=>{

            if(res.data.status==0){
               
                this.info = res.data.message
                console.log(this.info)
                }else{
                    Toast('加载类别失败')
                }
            }).catch(function (error) {
            console.log(error);
            });
        }
    },
    created(){
        this.getGoodsDesc()
    }
}
</script>
<style lang="scss">
.goodsdesc-container{
    padding: 4px;
    h3{
        font-size: 16px;
        color: #226aff;
        margin: 15px 0;
        text-align: center;
    }
    
}
</style>
