<template>
	<view >
		<view class="">你好</view>
	</view>
	
</template>

<script>
	
	export default {
		onLoad(){
			//#ifdef H5
			uni.request({
				url:"/api/zh.cc-cookies.json",
				success(res){
					console.log(res)
				}
			})
			//#endif
			
			//#ifdef MP-WEIXIN
			uni.request({
				url:"https://www.bmw.com.cn/zh.cc-cookies.json",
				success(res){
					console.log(res)
				}
			})
			//#endif
			
		}
	}
</script>

<style lang="scss">
</style>
