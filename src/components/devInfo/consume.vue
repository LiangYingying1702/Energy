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
				<h1 style="text-align: center;">港口间能耗对比：</h1>
				   <ve-line :data="chartData3"></ve-line>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() { 
			return {
			date:'2018',
			chartData3:{
				
			}
			};
		},
		methods:{
			search(){
				// 后端网址
				var url4 = this.baseUrl+"/devInfo/consume"
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
