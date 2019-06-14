<!-- html部分 -->
<template>
	<div style="margin: 15px;">
		<el-date-picker
		   v-model="date" 
		   type="year"
		   placeholder="选择年份"
		   format="yyyy"
		  value-format="yyyy">
		</el-date-picker>
		<el-button @click='search'>查询</el-button>
		<h1 style="text-align: center;">成本核算信息</h1>
		<el-table :data="tableData" style="margin-left: 220px;">
			<el-table-column prop="devname" label="设备名称" width="180"></el-table-column>
			<el-table-column prop="amount" label="作业量" width="180"></el-table-column>
			<el-table-column prop="consume" label="能耗" width="180"></el-table-column>
			<el-table-column prop="cost" label="成本" width="180"></el-table-column>
			</el-table-column>
		</el-table>
		  
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() { 
			return {
			date:'2018',
			tableData:[]
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/devInfo/cost"
				// 传递给后端的数据
				var data = {year:this.date};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.tableData = res.data;
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
