<template>
	<!-- <view class="container">
	  <swiper 
		indicator-dots
		indicator-active-color="orange"
		class="welcome"
	  >
		<block v-for="(item,index) in movies" :key="item.id">
		  <swiper-item class="swiper-item">
			<image class="slide-image" :src="item.image"></image>
			<button @tap="clickHandler" v-if="movies.length-1 === index" class="start">立即体验</button>
		  </swiper-item>
		</block>
	  </swiper>
	</view> -->
	<view class="container">
		<view class="slide">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" >
				<block v-for="(item,index) in movies" :key="item.id">
				  <swiper-item class="swiper-item">
					<image class="slide-image" :src="item.image"></image>
					<button @tap="clickHandler" v-if="movies.length-1 === index" class="start">立即体验</button>
				  </swiper-item>
				</block>
			</swiper>
		</view>
	</view>
	
	
</template>

<script>
	const db = wx.cloud.database()
	export default {
		data() {
			return {
				 movies:[] 
			}
		},
		methods: {
			clickHandler(){
			  uni.switchTab({
			    url: '/pages/board/board',
			  }) 
			  //往本地存储里面存标志
			  uni.setStorageSync('douban_welcome', true)
			}
		},
		async onLoad(){
			let res = await db.collection("in_theaters").where({}).limit(3).get()
			let result = []
			res.data.map(item=>{
			  result.push({
			    id:item.id,
			    image:item.images.small
			  }) 
			})
			//最后更新data的movies
			this.movies = result
			console.log(this.movies)
		}
	}
</script>

<style>
.container,.welcome,.swiper-item,.slide-image{
  height:100%;
  width:100%;
}
.swiper{
	height:100%;
	width:100%;
}
.start{
  position: fixed;
  bottom: 100px;
  left:50%;
  transform: translateX(-50%);
  width: 140px;
}
</style>
