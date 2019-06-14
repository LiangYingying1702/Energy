<!-- html部分 -->
<template>
	<div>
    <el-date-picker
       v-model="date" 
       type="year"
       placeholder="选择年份"
       format="yyyy"
      value-format="yyyy">
    </el-date-picker>
	<el-button @click='search'>查询</el-button>
		<h1 style="text-align: center;">流程信息曲线图</h1>
		   <ve-line :data="chartData"></ve-line>
		   <h1 style="text-align: center;">设备类别柱状图</h1>
		     <ve-histogram :data="chartData1"></ve-histogram>
			 <h1 style="text-align: center;">设备作业量曲线图</h1>
			    <ve-line :data="chartData2"></ve-line>
				<h1 style="text-align: center;">电耗曲线图</h1>
				   <ve-line :data="chartData3"></ve-line>
				   <h1 style="text-align: center;">水耗柱状图</h1>
				     <ve-histogram :data="chartData4"></ve-histogram>
					 <h1 style="text-align: center;">油耗曲线图</h1>
					    <ve-line :data="chartData5"></ve-line>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() { 
			return {
			date:'2018',
			chartData:{
				
				},
			chartData1:{
				
			},
			chartData2:{
				
			},
			chartData3:{
				
				},
			chartData4:{
				
			},
			chartData5:{
				
			}
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/flowConsume"
				// 传递给后端的数据
				var data = {year:this.date};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.chartData = res.data;
				})
				// 后端网址
				var url2 = this.baseUrl+"/energyConsume/devTypeConsume"
				// 传递给后端的数据
				var data = {year:this.date};
				this.$axios.post(url2,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.chartData1 = res.data;
				})
				// 后端网址
				var url3 = this.baseUrl+"/energyConsume/devConsume"
				// 传递给后端的数据
				var data = {year:this.date};
				this.$axios.post(url3,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.chartData2 = res.data;
				})
				// 后端网址
				var url4 = this.baseUrl+"/energyConsume/electricConsume"
				// 传递给后端的数据
				var data = {year:this.date};
				this.$axios.post(url4,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.chartData3 = res.data;
				})
				// 后端网址
				var url5 = this.baseUrl+"/energyConsume/waterConsume"
				// 传递给后端的数据
				var data = {year:this.date};
				this.$axios.post(url5,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.chartData4 = res.data;
				})
				// 后端网址
				var url6 = this.baseUrl+"/energyConsume/oilConsume"
				// 传递给后端的数据
				var data = {year:this.date};
				this.$axios.post(url6,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.chartData5 = res.data;
				})
				}
		},
		mounted:function () {
			
			this.search();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
