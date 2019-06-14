<!-- html部分 -->
<template>
	<div>
		<h1>添加报岗信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入船队名称' v-model='shipname'></el-input> </el-col>
			<el-col :span="12"> 
			<el-input style='width:300px;margin-top: 20px;'  v-model="capacity" placeholder="请输入装载量(吨)"></el-input>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<el-date-picker 
					 style='width: 300px; margin-top: 20px;' 
					 v-model="planjobtime" 
					 type="datetime"
					 placeholder="选择日期"
					value-format="yyyy-MM-dd HH:mm:ss">
				 </el-date-picker>
			</el-col>
			<el-col :span="12">
				<el-input style='width:300px;margin-top: 20px;' v-model="reportuser" placeholder="请输入报岗人"></el-input>
			</el-col>
			</el-row>
			<el-row>
			<el-col :span="12"  > 
			<el-select style='width:300px;margin-top: 20px;' v-model="compid" placeholder="请选择所属企业">
				<el-option
				  v-for="item in CompArr"
				  :label="item.compname"
				  :value="item.compid" 
				  :key="item.compname">
				  {{item.compname}}
				</el-option>
			</el-select>
			</el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				shipname:'',
				capacity:'',
				planjobtime:'',
				reportuser:'',
				CompArr:[],
				compid:''
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/insert"
				// 传递给后端的数据
				var data = {compid:this.compid,shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,reportuser:this.reportuser};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/ReportList'});	
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.CompArr = res.data;	
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
