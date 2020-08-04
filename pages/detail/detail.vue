<template>
	<view class="container">
	  <view v-if="detail.title">
	    <image mode="aspectFill" class="background" :src="detail.images.small"></image>
	    <view class="meta">
	      <image @tap="clickPhotos" class="poster" :src="photos[0]"></image>
	      <text class="title">{{detail.title}}</text>
	      <text class="info">评分：{{detail.rating.average || "暂无评分"}}</text>
	      <text class="info">导演：<block v-for="item in detail.directors" :key="item.id">{{item.name}} </block></text>
	      <text class="info">演员：<block v-for="item in detail.casts" :key="item.id">{{item.name}} </block></text>
	    </view>
	    <view class="summary">
	      <text class="label">摘要：</text>
	      <text class="content">{{detail.summary}}</text>
	    </view>
	  </view>
	  <view v-else>
	    <image src="/static/images/loading.gif"></image>
	  </view>
	</view>
</template>

<script>
	import douban from "../../utils/douban"
	export default {
		data() {
			return {
				detail:"",
				photos:[]
			};
		},
		methods:{
			clickPhotos(){
			  let phpotsList =[]
			  this.photos.map(item=>{
			    phpotsList.push(item.image)
			  })
			  wx.previewImage({
			    urls:this.photos  ////urls需要预览的图片链接列表
			  })  
			},
		},
		async onLoad(options) {
		  //结构参数
		let {id,collectionName} =options
		let res= await douban({
		    collectionName,id,
		    loadingTop : true
		  })
		  let detail = res.data[0]
		  let photos = []
		  detail.casts.map(item=>{
		    if(item.avatars){
		      photos.push(item.avatars.small)
		    }
		  })
		  this.detail =detail;
		  this.photos = photos;
		  
		  
		  
		     uni.setNavigationBarTitle({
		      title: this.detail.title
		    })
		    uni.setNavigationBarColor({
		      frontColor: '#ffffff',
		      backgroundColor: '#ff0000',
		      animation: {
		        duration: 400,
		        timingFunc: 'easeIn'
		      }
		    })
		},
	}
</script>

<style lang="scss">
.background{
  position: fixed;
  width: 100%;
  height: 100%;
  left:0;
  top:0;
  z-index:-1;
  opacity: .1;
}
.meta{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50rpx 40rpx;
}
.meta .poster{
  width: 100%;
  height:800rpx;
  margin:20rpx;
}
.title{
  font-size: 40rpx;
  color: #222;
}
.info{
  font-size: 26rpx;
  color:#444;
  margin-top:14rpx;
}
.summary{
  width:90%;
  margin:0 auto;
}
.summary .label{
  display: block;
  font-size: 34rpx;
  margin-bottom: 14rpx;
}
.summary .content{
  display: block;
  text-indent: 60rpx;
  font-size: 30rpx;
  color:#555;
  line-height: 60rpx;
}
</style>
