<!-- html部分 -->
<template>
	<div style="text-align: center;">
		<h1>修改故障信息</h1>
		<el-row>
		  <el-col :span="12">
			  <el-select style='width:300px;margin-top: 20px;' v-model="devid" placeholder="请选择设备类别">
			  	<el-option
			  	  v-for="item in DevArr"
			  	  :label="item.devname"
			  	  :value="item.devid" :key="item.devname">
			  	  {{item.devname}}
			  	</el-option>
			  </el-select>
		  </el-col>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入故障原因' v-model='cause'></el-input> </el-col>
		</el-row>
		<el-row>
		    <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报告人' v-model='faultuser'></el-input> </el-col>
			<el-col :span="12">
				<el-date-picker  style='width:300px;margin-top: 20px;' 
				 v-model='faulttime'
				  type="date"
				  placeholder="选择日期">
				</el-date-picker>
			</el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				faultId:'',
				devid:'',
				devname:'',
				cause:'',
				faultuser:'',
				faulttime:'',
				DevArr: []
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/update"
				// 传递给后端的数据
				var data = {faultId:this.faultId,devid:this.devid,devname:this.devname,cause:this.cause,faultuser:this.faultuser,faulttime:this.faulttime};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/FaultList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 接收路由传递的数据
			var row = this.$route.params.row;
			// 回显
			this.faultId = row.faultId;
			this.devid = row.devid;
			this.devname = row.devname;
			this.cause = row.cause;
			this.faultuser = row.faultuser;
			this.faulttime = row.faulttime;
			var url = this.baseUrl+"/baseDevice/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
				}).then(res=>{
				this.DevArr = res.data;			
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
