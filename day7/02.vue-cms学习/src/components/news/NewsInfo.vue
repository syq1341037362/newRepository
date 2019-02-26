<template>
    <div class="newsinfo-container">
        <!-- 标题 -->
        <h4 class="title">{{newsInfo.title}}</h4>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{newsInfo.ctime | dataFormat}}</span>
            <span>点击次数：{{newsInfo.click}}</span>
        </p>
        <hr>
        <!-- 内容区 -->
        <div class="content" v-html="newsInfo.content" ref="content"></div>

        <!-- 评论子组件区 -->
        <comment-box></comment-box>
    </div>
</template>

<script>
//1.导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id, //将url地址中传递的id值绑定到data中
            newsInfo:{},
            flag:true
        }
    },
    methods:{
        getNewsInfo(){
            this.$axios.get('/getnewsinfo', {
                    params: {
                    id: this.id
                    }
                }).then(res=>{
                    if(res.data.status==0){
                      this.newsInfo = res.data.message[0]
                    }else{
                        Toast('数据加载失败')
                    }
                }).catch(function (error) {
                console.log(error);
                });
        }
    },
    created(){
        this.getNewsInfo()
    },
    components:{ //用来注册子组件
        'comment-box':comment
    }
    
    //由于富文本 v-html 不能直接编辑样式 可以在updated生命周期函数调用的时候给元素加上属性 也可以去掉下面 style标签的 scoped 属性  注意要保证不污染其他组件 

    // ,updated(){  
       
    //     $(".content h2").css({"font-size":"15px","text-align":"center","padding":"15px 0px"});
    //     $(".content p").css({
    //             "margin": "0 .3em .5em",
    //             "font-size": ".3em",
    //             "color": "#1a1a1a",
    //             "line-height": "1.2em",
    //             "word-break": "normal",
    //             "text-align": "justify"
    //     });
        
        
    // }
}
</script>

<style lang="scss">
.newsinfo-container{
    padding: 0px 4px;
   .title{
       font-size: 16px;
       color: red;
       text-align: center;
       margin: 15px 0;
       line-height:1.5;
   }
    
   .subtitle{
       font-size: 13px;
       color: #226aff;
       display: flex;
       justify-content: space-between;
   }
   .content{
       h1,h2{
        text-align: center;
        font-size: 15px; 
        padding: 15px 0px;   
       }
       img{
           width: 100%;
       }
      p{
          font-size: 13px;
          margin: 10px 0px;
          padding: 0px 9px;
          line-height: 1.5;
          color: #1a1a1a;
          word-wrap:normal;
          text-align: justify;
          text-indent: 2em;

      }
      time{
          font-size: 12px;
      }
   }
  
}


</style>
