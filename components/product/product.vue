<template>
	<view class="item" @tap="toDetail">
	    <image class="poster" :src="item.images.small" ></image>
	    <view class="meta">
	      <text class="title">{{item.title}}</text>
	      <text class="average info">评分:{{item.rating.average ||'暂无评分'}}</text>
	      <text class="directors info">导演：{{item.directors[0].name}} </text>
	      <text class="casts info">主要演员:<block v-for="it in item.casts" :key="it.id">{{it.name}} </block></text>
	      <text class="pubdates info">上映时间：{{item.pubdates[0]}}</text>
	    </view>
	</view>
</template>

<script>
	export default {
		props: {//接受外部传入的item属性
		  item:{//接受外部传入的item属性
		     type:Object
		  },
		  collectionName:{ //接受list给其传入的collectionName属性
		    type:String
		  },
		},
	    methods: {
		toDetail(){
		  uni.navigateTo({
			// url: '/pages/detail/detail?id='+this.properties.item.id+,//必须有id和collectionName
				url: '/pages/detail/detail?id='+this.props.item.id+"&collectionName="+this.props.collectionName,
			  })
			}
		  }
		}
</script>

<style>
	.container{
	  background: #ffffff;
	}
	.item{
	  display: flex;
	  margin: 20rpx;
	  padding: 30rpx;
	  background: #F8F8FF;
	}
	.item .poster{
	  display: block;
	  width: 230rpx;
	  height: 300rpx;
	}
	.item .meta{
	  display: flex;
	  flex-direction: column;
	  margin-left: 28rpx;
	}
	.meta .info{
	  font-size: 14px;
	  color: #696969;
	  margin-top: 16rpx;
	
	}
	.meta .title{
	  color: #191a1b;
	  font-size: 16px;
	  height: 44rpx;
	  line-height: 44rpx;
	  margin-right: 5px;
	}
</style>
