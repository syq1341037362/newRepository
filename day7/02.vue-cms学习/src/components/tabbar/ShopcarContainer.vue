<template>
    <div class="shopcar-container">
        <!-- 商品列表区域 -->
        <div class="goods-list">
            <div class="mui-card" v-for="(item,i) in shopCarList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.img_url" alt="">
                        <div class="info">
                            <h1>{{item.goodsname}}</h1>
                            <p>
                                <span class="price">￥{{item.nowprice}}</span>
                                 <numbox :count='$store.getters.getGoodsCount[item.id]' :goodsid='item.id'></numbox>
                                <!-- 问题:如何从购物车获取商品数量呢 -->
                                <!-- 1. 我们可以先创建一个空对象 然后循环购物车中所有的商品的数据,
                                        把当前循环这条商品的 Id 作为 对象的属性名,count值作为对象的属性值
                                        这样把所有的商品循环一遍 就会得到一个对象：{88:2,89:1,90:4} -->

                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 结算区域 -->
         <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品<span class="red">&nbsp;{{$store.getters.getGoodsCountAndAmount.count}}&nbsp;</span>件，总价：<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from '../../../src/components/subcomponents/shopcar_numbox.vue'
export default {
    data(){
        return {
            shopCarList:[]
        }
    },
    methods:{
        getGoodsList(){
            //获取到 store 中所有商品的 id 然后拼接成一个用 逗号分隔的字符串
        var idArr = [];
        //如果购物车中没有数据 直接返回不需要请求数据
        
        this.$store.state.car.forEach(item =>idArr.push(item.id)); 
        if(idArr.length<=0){
            return ;
        }
        this.$axios.get('/getshopcarinfo',{params:{
                 id:idArr.join(',')
             }}).then(res=>{
                 if(res.data.status==0){
                     
                    this.shopCarList = res.data.message
                     
                    }else{
                        Toast('加载购物车列表失败')
                    }
                }).catch(function (error) {
                console.log(error);
                
             })

        //获取购物车商品列表
        },
        remove(id,index){
            console.log(id)
            //点击删除商品 从stroe中 根据传递的id删除 同时把当前组件的shopCarList中对应要删除的那个商品用index删除
            this.shopCarList.splice(index,1)
            this.$store.commit('removeFormCar',id)
        },
        selectedChange(id,flag){
            //change事件
            //每当点击开关把最新的 开关状态  同步到 store 中
            // console.log(id+'----'+flag);
            this.$store.commit('updateGoodsSelected',{id,selected:flag})
        }
        
    },
    components:{
        numbox
    },
    created(){
        this.getGoodsList();
    }
}
</script>
<style lang="scss" scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
        .goods-list{
            .mui-card-content-inner{
                display: flex;
                align-items: center;
            }
            img{
                width: 60px;
                height: 60px;
            }
            h1{
                font-size: 13px;
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .price{
                    color: red;
                    font-weight: bold
                }
                p{
                    margin: 0;
                }
            }
        }
        .jiesuan{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .red{
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
            
        }
    }
</style>
