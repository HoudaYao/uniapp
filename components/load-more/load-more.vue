<template>
	<view class="tip" v-if="flag">
	  <view v-if="loading">
	    <image src="/static/images/loading.gif"></image>
	    <text class="txt">玩命加载...</text>
	  </view>
	  <view v-else>
	    <text>----没有更多数据---</text>
	  </view>
	</view>
</template>

<script>
	export default{
		props:{
			loading:{
			  type:Boolean
			},
			flag:{
			  type:Boolean
			}
		}
	}
</script>

<style>
.tip{
  font-size: 28rpx;
  padding: 50rpx;
  text-align: center;
  color:#ccc
}
.tip .txt,.tip image{
  vertical-align: middle;
}
.tip image{
  width:40rpx;
  height:40rpx;
}
</style>
