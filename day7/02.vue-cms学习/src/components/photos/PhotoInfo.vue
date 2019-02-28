<template>
    <div class="photoinfo-container">
        <h2>{{photoinfo.title}}</h2>
        <p class="subtitle">
            <span>发表时间：{{photoinfo.ctime | dataFormat}}</span>
            <span>点击次数：{{photoinfo.click}}</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
        <vue-preview
            :list="list"
            :thumbImageStyle="{width: '100px', height: '100px', margin: '10px'}"
            :previewBoxStyle="{border: '1px solid #eee'}"
            :tapToClose="true"
            @close="closeHandler"
            @destroy="destroyHandler"
            />
        </div>
        <!-- 图片内容区域 -->
        <div class="info-content" v-html="photoinfo.content">

        </div>
        <!-- 放置一个现成的评论子组件 -->
        <cmt-box :id="2" :tab="2"></cmt-box>
    </div>
</template>

<script>
//导入评论子组件
import comment from '../../components/subcomponents/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            photoinfo:{},
            list:[] //缩略图
        }
    },
    methods:{
        getPhotoInfo(){
            //获取图片的详情
             this.$axios.get('/getphotoinfo',{
                 params:{
                     id:this.id
                 }
             }).then(res=>{

            if(res.data.status==0){
               
                this.photoinfo = res.data.message[0]
                
                }else{
                    Toast('加载类别失败')
                }
            }).catch(function (error) {
            console.log(error);
            });
        },
        getThumbs(){
            //获取图片的缩略图
             this.$axios.get('/getthumbs',{
                 params:{
                     id:this.id
                 }
             }).then(res=>{

            if(res.data.status==0){
               
               //循环每个图片数据 补全图片的宽和高
                 res.data.message.forEach(element => {
                    element.w = 600;
                    element.h = 400;
                });
                this.list =res.data.message
                console.log(this.list)
                
                }else{
                    Toast('加载缩略图失败')
                }
            }).catch(function (error) {
            console.log(error);
            });
        },
        // 即将关闭的时候，调用这个处理函数
        closeHandler() {
            console.log('closeHandler')
        },
        // 完全关闭之后，调用这个函数清理资源
        destroyHandler() {
            console.log('destroyHandler')
         }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },
    components:{
        'cmt-box':comment
    }
}
</script>

<style lang="scss">
.photoinfo-container{
    padding: 3px;
    h2{
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0px;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
  
    .info-content{
        font-size: 13px;
        line-height: 30px;
        img{
            width: 100%;
        }
    }
}
   
</style>
