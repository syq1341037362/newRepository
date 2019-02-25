<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$axios.get('/getscript', JSON.stringify({//这里将json格式转成string格式发送
                method: 'user.login',
                mobile: this.username,
                password: this.password,
                sign: ''
                })).then(function (response) {
                console.log(response);
                }).catch(function (error) {
                console.log(error);
                });

        }
    }
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height:200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: red
            }
             &:nth-child(2){
                background-color: green
            }
             &:nth-child(3){
                background-color: blue
            }
        }

    }

</style>
