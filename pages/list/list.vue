<template>
	<view class="container">
	  <block v-for=" item in list" :key="id">
		  <product :item="item" :collectionName="key"/>
	  </block>
	</view>
</template>

<script>
	import douban from "../../utils/douban"
	export default {
		data() {
			return {
				key:"",
				list:[]
			};
		},
		async onLoad(options) {
		  // console.log("数据==>",options)
		  let {key,title} = options;
		  let res = await douban({
		    collectionName:key,
		    loadingTop:true
		  })
		  
		  this.list = res.data
		  this.key = key
		
		    //设置导航栏标题
		    uni.setNavigationBarTitle({
		      title:title
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

</style>
