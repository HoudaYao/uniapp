<template>
	<view class="container">
		  <view class="slide">
		    <swiper indicator-dots circular >
		      <block v-for="item in banner.content" :key="item.id">
		        <swiper-item class="swiper-item">
		          <navigator :url="'/pages/detail/detail?id='+item.id+'&collectionName='+banner.key">
		            <image class="slide-image" :src="item.image"></image>
		          </navigator>
		        </swiper-item>
		      </block>
		    </swiper>
		  </view>
		  <view class="board">
		    <navigator
		      v-for="item in list"
		      :key="item.id"
		      :url="'/pages/list/list?key='+item.key+'&title='+item.title"
		    >
		      <view class="board-item">
		        <text class="board-item-title">{{item.title}}</text>
		        <image src="/static/images/arrowright.png" class="arrow"></image>
		      </view>
		    </navigator>
		  </view>
		</view>
</template>

<script>
	const db = wx.cloud.database()
	export default {
		data() {
			return {
				banner:{
				  key:"coming_soon",//传个key值
				  title:"即将上映",
				  content:[]
				},
				list:[
				  {key:"coming_soon",title:"即将上映"},
				  {key:"top250",title:"口碑榜"},
				  {key:"in_theaters",title:"正在上映"},
				]
			};
		},
		async onLoad() {
		  let res = await db.collection(this.banner.key).limit(3).get()
		  let result =[]
		  res.data.map(item=>{
		    result.push({
		      id:item.id,
		      image:item.images.small
		    })
		  })
		
		  this.banner.content=result
		  console.log("数据=>",this.banner)
		 
		
		},
	}
</script>

<style lang="scss">

.container{
  display: flex;
  flex:1;
  flex-direction: column;
  box-sizing: border-box;
}
.container .swiper{
  height:400rpx;
}
.slide .swiper-item{
  height:400rpx;
}
.slide .swiper-item .slide-image{
  height:400rpx;
  width:100%;
}

/*榜单样式修饰*/
.board-item{
  background: #fff0f2;
  display: flex;
  margin: 40rpx;
  padding: 40rpx;
  border:1px solid #999;
}
.board-item .board-item-title{
  flex:1;
}
.board-item .arrow{
  width:40rpx;
  height:40rpx;
}
</style>
