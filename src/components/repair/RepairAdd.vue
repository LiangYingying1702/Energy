<!-- html部分 -->
<template>
	<div>
		<h1>添加维修记录</h1>
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
				<el-date-picker
				 style='width: 300px; margin-top: 20px;' 
				 v-model="repairdate" 
				 type="date"
				 placeholder="选择日期"
				 format="yyyy 年 MM 月 dd 日"
				value-format="yyyy-MM-dd">
				 </el-date-picker> 
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
				devid:'',
				devname:'',
				cause:'',
				cost:'',
				repairdate:'',
				DevArr: []
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/insert"
				// 传递给后端的数据
				var data = {devid:this.devid,devname:this.devname,cause:this.cause,cost:this.cost,repairdate:this.repairdate};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/RepairList'});	
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
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

