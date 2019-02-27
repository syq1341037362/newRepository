<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id == 0 ? 'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                    
                </div>
            </div>
        </div>
        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link tag="li" v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.sub_title}}</div>
                </div>
            </router-link>
        </ul>
  
    </div> 
</template>
<script>
//1. 导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js'


export default {
    data(){
        return {
            cates:[], //所有分类的列表
            list:[] //图片列表
        }
    },
    methods:{
        getAllCategory(){
            this.$axios.get('/getimgcategory',{}).then(res=>{

            if(res.data.status==0){
                //手动拼接出一个最完整的 分类列表
                res.data.message.unshift({title:"全部",id:0})
                this.cates = res.data.message
                
                }else{
                    Toast('加载类别失败')
                }
            }).catch(function (error) {
            console.log(error);
            });
        },
        getPhotoListByCateId(cateId){
            //根据 分类Id 获取图片列表
            this.$axios.get('/getphotolistbycateid',{
                params:{
                 cateid:cateId
                }
            }).then(res=>{
                if(res.data.status==0){
                    this.list = res.data.message
                    }else{
                        Toast('加载列表失败')
                    }
                }).catch(function (error) {
                console.log(error);
                });
        }
        
    },
    created(){
        this.getAllCategory();
        //默认进入页面 就主动加载所有图片列表
        this.getPhotoListByCateId(0);
    },
    mounted(){ 
        //当组件中的DOM结构被渲染好并放到页面中后 会执行这个钩子函数
        //如果要操作元素了 最好 在mounted 里面 因为这个时候元素是最新的
        //2.初始化组件
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>
<style lang="scss" scoped>
    *{
        touch-action: pan-y;
    }
    .photo-list{
         list-style: none;
         padding: 10px;
         margin: 0;
         padding-bottom: 0;
        li{
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;
            
            img{
                width: 100%;
                vertical-align: middle;
            }
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info{
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0,0,0,0.4);
                max-height: 84px;
               
               
                .info-title{
                    font-size: 14px;
                }
                .info-body{
                    font-size: 13px;
                    
                }
            }    
        }
    }
    

</style>
