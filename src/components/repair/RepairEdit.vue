<!-- html部分 -->
<template>
	<div style="text-align: center;">
		<h1>修改维修记录</h1>
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
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入维修原因' v-model='cause'></el-input> </el-col>
		</el-row>
		<el-row>
		    <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入费用' v-model='cost'></el-input> </el-col>
			<el-col :span="12">
				<el-date-picker  style='width:300px;margin-top: 20px;' 
				 v-model='repairdate'
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
				repairid:'',
				devid:'',
				devname:'',
				cause:'',
				cost:'',
				repairdate:'',
				DevArr: []
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/update"
				// 传递给后端的数据
				var data = {repairid:this.repairid,devid:this.devid,devname:this.devname,cause:this.cause,cost:this.cost,repairdate:this.repairdate};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/RepairList'});
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
			this.repairid = row.repairid;
			this.devid = row.devid;
			this.devname = row.devname;
			this.cause = row.cause;
			this.cost = row.cost;
			this.repairdate = row.repairdate;
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
