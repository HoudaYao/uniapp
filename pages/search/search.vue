	<template>
		<view class="container">
		  <view class="input">
			<input 
			  :placeholder="subtitle"
			  :value="search"
			  @change="handlerSearch"
			/>
		  </view>
		  <view class="list">
			<product v-for="item in list" :key="item.id" collectionName="top250" :item="item"/>
		  </view>
		 <load-more :loading="loading" :flag="flag"></load-more>
		</view>
	</template>

<script>
	import douban from "../../utils/douban"
	export default {
		data() {
			return {
				search:null,
				subtitle:"请输入查询内容...",
				list:[],
				start:0,
				count:6,
				loading:false, //代表没有加载
				flag:false//希望初始化的时候任何内容都不显示
			};
		},
		methods:{
			handlerSearch(e){
			  if(!e.detail.value.trim()){
				this.list = []
				this.start = 0
				this.search = null
				this.flag = false
				return; //阻止后续代码
			  }
			  this.list = []
			  this.search = e.detail.value
			  this.start = 0 //每次搜索的时候，都需要从第一页开始搜索数据。
			  this.loadList()
			},
			async loadList(){
			  //一旦获取集合内容之前，就应该让loading变成true，代表加载中
			  this.loading=true;
			  this.flag=true;
			 let res = await douban({
			   collectionName:"top250",
			   data:{
			     start:this.start,//封装start和count
			     count:this.count,
			     q:this.search
			   }
			 })
			 this.list = this.list.concat(res.data);
			 this.loading=false
			},
		},
		onReachBottom: function () {
		  if(!this.loading){ //代表数据请求完毕后，才会请求下一页数据
			this.start = ++this.start;
			this.loadList()
		  }
		},
		
	}
</script>

<style lang="scss">
.input{
  position: fixed;
  top: 0;
  width: 100%;
  color:black;
}
.input input{
  border: 1px solid black;
}
</style>
