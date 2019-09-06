<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList.slice(0, 5)" :key="item.cdn_img">
                <img :src="item.cdn_img" alt="">
            </mt-swipe-item>
        </mt-swipe>
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
		                    <img src="../../img/menu1.png" alt="">
		                    <div class="mui-media-body">新闻咨询</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
		                    <img src="../../img/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
		                    <img src="../../img/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
		                    <img src="../../img/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
		                   <img src="../../img/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
		                    <img src="../../img/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
    </div>
</template>

<script>
export default {

    data(){
        return{
            lunboList:[]
        }
    },
    created(){
        this.getBanner();
    },
    methods:{
        getBanner(){//获取轮播图数据
            this.$http.get('https://www.apiopen.top/satinApi?type=3&page=2').then(resule=>{
                 this.lunboList=resule.data.data
                 console.log(resule)
                //  return resule.data.data
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
       img{
           width: 100%;
           height: 300px;
       }
    }
}
.mui-grid-view{
        .mui-table-view-cell{
            img{
                width: 60px;
                height: 60px;
            }
        }
    }
</style>