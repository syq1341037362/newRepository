<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要输入的内容(最多吐槽120字)" maxlength="120" v-model="tx"></textarea>
        <mt-button type='primary' size="large" @click="insertComment">发表评论</mt-button>
        <div class="cmt-list" v-for="item in commentList" :key="item.id">
            <div class="cmt-item">
                <div class="cmt-title">第{{item.floor+1}}楼&nbsp;&nbsp;用户:{{item.name}}&nbsp;&nbsp;发表时间：{{item.ctime | dataFormat}}</div>
                <div class="cmt-body">
                   {{item.content}}
                </div>
            </div>
        </div>
        
        <mt-button type='danger' size="large" plain @click="moreComment">加载更多</mt-button>

    </div>
</template>
<script>
import {Toast} from 'mint-ui';
import moment from 'moment'
export default {
    data(){
        return{
            page:0,
            pagesize:5,
            commentList:[],
            tx:'',
            name:'匿名用户',
            type:1,
            id:this.$route.params.id
        }
    },methods:{
        getComment(){
            this.$axios.get('/getcomment', {
                    params: {
                        page:this.page,
                        pagesize:this.pagesize,
                        id:this.id
                    }
                }).then(res=>{
                    if(res.data.status==0){
                         if(res.data.toast==null){
                            let queryList = res.data.message
                            this.commentList = this.commentList.concat(queryList);
                      }else{
                          Toast(res.data.toast)
                      }
                    }else{
                        Toast('数据加载失败')
                    }
                }).catch(function (error) {
                console.log(error);
                });
        },
        moreComment(){
            //获取更多
            
            this.page++
            this.getComment();
        },
        insertComment(){
            //添加评论
             this.$axios.get('/insertcomment', {
                    params: {
                        name:this.name,
                        content:this.tx,
                        type:this.type,
                        ctime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
                        newsid:this.id
                    }
                }).then(res=>{
                    if(res.data.status==0){
                       Toast(res.data.toast);
                       this.tx = '';
                       this.page = 0;
                       this.getComment()
                    }else{
                        Toast('数据加载失败')
                    }
                }).catch(function (error) {
                console.log(error);
                });
        }
    },
    created(){
        this.getComment();
    }
}
</script>
<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>

