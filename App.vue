<script>
export default {
	// 只能在App.vue里监听应用的生命周期
	onLaunch: async function () {
	  if (!wx.cloud) {
	    console.error('请使用 2.2.3 或以上的基础库以使用云能力')
	  } else {
	    wx.cloud.init({
	      env: 'demo-fc4lk',
	      traceUser: true,
	    })
	  }
	  //getStorageSync将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
	  //从本地数据库取出douban_welcome接口
	  let flag = wx.getStorageSync('douban_welcome') 
	  if(flag){
	    wx.switchTab({
	      url: '/pages/board/board',
	    }) 
	  }  
	},
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
