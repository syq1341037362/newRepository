<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_src" width="42px">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{item.ctime | dataFormat}}</span>
                            <span>点击:{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
		</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            newsList:[],
            flag:true
        }
    },
    methods:{
        getNewsList(){
            this.$axios.get('/getnewslist', {}).then(res=>{
                    if(res.data.status==0){
                      this.newsList = res.data.message
                     
                    }else{
                        Toast('加载失败')
                    }
                }).catch(function (error) {
                console.log(error);
                });
        }
    },
    created(){
        this.getNewsList()
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
       
        h1{
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow:ellipsis;

        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
    
}

</style>
