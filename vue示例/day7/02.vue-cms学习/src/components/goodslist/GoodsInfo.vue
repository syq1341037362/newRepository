<template>
    <div class="goodsinfo-container">
        <transition
         @before-enter="beforeEnter"
         @enter="enter"
         @after-enter="afterEnter"
         >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        
       <!-- 商品轮播图区域 -->

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="goodsinfo.list" :isfull="false"></swiper>
                </div>
            </div>
		</div>

       <!-- 商品购买区域 -->

        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.goodsname}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p class="price">
                       市场价:<del>￥{{goodsinfo.old}}</del>&nbsp;&nbsp;销售价:<span class="now_price">￥{{goodsinfo.now}}</span>
                   </p>
                   <p>
                       购买数量:
                        <number @getcount="getSelectedCount" :max="goodsinfo.stock"></number>
                   </p>
                   <p>
                       <mt-button type="primary" size="small">立即购买</mt-button>
                       <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    <!-- 分析如何实现加入购物车的时候 拿到选择的数量 -->
                    <!-- 1.经过分析  按钮输入 goodsinfo 页面 数字属于 numberbox组件  -->
                    <!-- 2.由于涉及到了父子组件的嵌套了 所以无法直接在 goodsinfo 页面中 获取到 选中的商品数量-->
                    <!-- 3.怎么解决 涉及到了 子组件向父组件传值 （事件调用机制）  -->
                    <!-- 4.事件调用本质：父向子传递方法 子调用这个方法 同时把数据当做参数 传递这个方法 -->
                   </p>
                </div>
            </div>
		</div>

       <!-- 商品参数区域 -->

       <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p>商品货号：{{goodsinfo.number}}</p>
                   <p>库存情况：{{goodsinfo.stock}}</p>
                   <p>上架时间：{{goodsinfo.ctime|dataFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(rid)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain  @click="goComment(rid)">商品评论</mt-button>
            </div>
		</div>
    </div>
</template>
<script>
//导入轮播图
import swiper from '../../components/subcomponents/swiper.vue'
//导入数字选择框
import number from '../../components/subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
        return{
            rid:this.$route.params.id,
            goodsinfo:{},
            ballFlag:false, //控制小球显示隐藏
            selectedCount:1 //保存用户选中的商品数量 默认用户买一个
        }
    },
    methods:{
        getInfo(){
             this.$axios.get('/getgoodsinfo',{params:{
                 id:this.rid
             }}).then(res=>{
                 if(res.data.status==0){
                     res.data.message.list.forEach(element => {
                         //为item 添加img属性 因为轮播图组件只认识 item.img
                         element.img_src = element.src
                     });
                    this.goodsinfo = res.data.message
                     
                    }else{
                        Toast('加载商品信息失败')
                    }
                }).catch(function (error) {
                console.log(error);
                
             })
        },
        goDesc(id){
            //点击使用编程式导航跳转图文介绍
            this.$router.push({name:'goodsdesc',params:{id}})
        },
        goComment(id){
            //点击使用编程式导航跳转评论
             this.$router.push({name:'goodscomment',params:{id}})
        },
        addToShopCar(){
            //添加到购物车
            this.ballFlag = !this.ballFlag;
            //{id:商品id,count:商品数量,price:商品的单价,selected:false}
            //拼接出一个 保存到store 中 car 数组里面的 商品信息对象
            var goodsinfo = {id:this.rid,count:parseInt(this.selectedCount),price:this.goodsinfo.now,selected:true}
            //调用 store 中的 mutations 来将商品加入购物车
            this.$store.commit('addToCar',goodsinfo);
            // console.log(this.$store.state.car[0].count);

        },
        beforeEnter(el){
            el.style.transform = 'translate(0,0)';
        },
        enter(el,done){
            el.offsetWidth;

            //小球动画优化思路
            //1.分析导致动画不准确的本质原因：  我们把小球最终位移位置 已经局限在了某一分辨率下的 滚动条未滚动的情况下
            //2.只要 分辨率和测试的时候不一样 或者 滚动条有一定的滚动距离之后 问题就出现了
            //3.因此 我们经过分析  得到结论不能把 位置的 横纵坐标 直接写死了 而是应该根据不同情况 动态计算这个坐标值
            //4.经过分析 得出解题思路 先得到 徽标的横纵坐标 在得到小球的横纵坐标 然后让 y 值求差 ，x 值求差 就是横纵坐标位移的距离
            //5.如何获取 徽标和小球的位置？？？ domObject.getBoundingClinentRect();
            
            //获取小球在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            //获取徽标在页面中的位置
            const badgePosition = document.getElementById('badge').getBoundingClientRect();

            const xDist = badgePosition.left-ballPosition.left;
            const yDist = badgePosition.top-ballPosition.top;

            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = 'all 0.5s cubic-bezier(.4,-0.3,1,.68)';
            done();
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count){
            //当子组件把选中的数量传递给富足家你的时候 把选中的值保存到data上
            this.selectedCount = count;
            // console.log('父组件拿到的数量是:'+this.selectedCount)
        }
    },
    created(){
        this.getInfo()
    },
    components:{
        swiper,
        number
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
    .now_price{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 390px;
        left: 146px;
    }
}
</style>
