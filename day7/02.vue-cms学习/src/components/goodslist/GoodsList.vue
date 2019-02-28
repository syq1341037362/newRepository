<template>
    <div class='goods-list'>
        <!-- <router-link tag="div" class="goods-item" v-for="item in gooslist" :key="item.id" :to="'/home/goodsinfo'+item.id">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.goodsname}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.nowprice}}</span>
                    <span class="old">￥{{item.oldprice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.stock}}件</span>
                </p>
            </div>
        </router-link> -->

        <!-- 在网页中有两种跳转方式 -->
        <!-- 方式1： 使用 a 标签 的形式 叫做标签跳转 -->
        <!-- 方式2：使用 window.location.href 的形式 叫做编程式导航 -->
        <div class="goods-item" v-for="item in gooslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.goodsname}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.nowprice}}</span>
                    <span class="old">￥{{item.oldprice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.stock}}件</span>
                </p>
            </div>
        </div>


        <mt-button type="danger" size="large" @click="getGoodsMore()">加载更多</mt-button>
        
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            page:0,
            pagesize:10,
            gooslist:[]

        }
    },
    methods:{
        getGoodsList(){
            this.$axios.get('/getgoodslist',{params:{
                page:this.page,
                pagesize:this.pagesize
            }}).then(res=>{
                if(res.data.status==0){
                      this.gooslist = res.data.message
                     
                    }else{
                        Toast('加载商品失败')
                    }
                }).catch(function (error) {
                console.log(error);
                });
        },
        getGoodsMore(){
            this.page++
            this.$axios.get('/getgoodslist',{params:{
                page:this.page,
                pagesize:this.pagesize
            }}).then(res=>{
                if(res.data.status==0 && res.data.toast ==null){
                    
                    let queryList = res.data.message
                    this.gooslist = this.gooslist.concat(queryList);

                    }else if(res.data.status==0 && res.data.toast !=null){
                        Toast(res.data.toast)
                    }else{
                        Toast('加载图片列表失败')
                    }
                }).catch(function (error) {
                console.log(error);
                });

        },goDetail(id){
            //使用 JS 的形式进行跳转
            //区分$route 和 $router
            // $route 是 路由参数对象 所有路由中的参数 params,query都属于他
            // $router 是 路由导航对象用它可以方便的使用 js代码 实现路由的前进 后退 跳转到 新的URL地址
            
            //1.最简单的
            // this.$router.push('/home/goodsinfo/'+id)
            //2.传递对象
            // this.$router.push({path:'/home/goodsinfo/'+id})
            //3.传递一个命名的路由
            this.$router.push({name:'goodsinfo',params:{id}})
        }
    },
    created(){
        this.getGoodsList();
    }
}

</script>
<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 3px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 279px;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
                line-height: 20px;
            }
            .info{
                background-color: #eee;
                p{
                    margin: 0;
                    padding: 5px;
                }
              .price{
                .now{
                    color: red;
                    font-size: 16px;
                    font-weight: bold;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
              }
              .sell{
                  display: flex;
                  justify-content: space-between;
                  font-size: 12px;
              }
              
            }
        }
        
    }


</style>
