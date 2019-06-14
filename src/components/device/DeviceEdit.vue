<!-- html部分 -->
<template>
	<div style="text-align: center;">
		<h1>修改设备信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入设备名称' v-model='devname'></el-input> </el-col>
			<el-col :span="12"> 
			<el-select style='width:300px;margin-top: 20px;' v-model="typeid" placeholder="请选择">
				<el-option
				  v-for="obj in typeArr"
				  :label="obj.typename"
				  :value="obj.typeid" 
				  :key="obj.typename">
				  {{obj.typename}}
				</el-option>
			</el-select>
			</el-col>
		</el-row>
		<el-row>
		    <el-col :span="12"> 
			<el-select style='width:300px;margin-top: 20px;' v-model="compid" placeholder="请选择">
				<el-option
				  v-for="item in CompArr"
				  :label="item.compname"
				  :value="item.compid" 
				  :key="item.compname">
				  {{item.compname}}
				</el-option>
			</el-select>
			</el-col>
			<el-col :span="12"> 
			<el-date-picker
			 style='width: 300px; margin-top: 20px;' 
			 v-model="devdate" 
			 type="date"
			 placeholder="选择日期"
			 format="yyyy 年 MM 月 dd 日"
			value-format="yyyy-MM-dd">
			 </el-date-picker> 
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入责任人' v-model='devuser'></el-input> </el-col>
			<el-col :span="12"> <span></span> </el-col>
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
				compid:'',
				devid:'',
				devname:'',
				typeid:'',
				devdate:'',
				devuser:'',
				CompArr: [],
				typeArr:[]
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/update"
				// 传递给后端的数据
				var data = {compid:this.compid,devname:this.devname,devid:this.devid,typeid:this.typeid,devdate:this.devdate,devuser:this.devuser};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/DeviceList'});
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
			this.devid=row.devid;
			this.compid=row.compid;
			this.devname = row.devname;
			this.typeid = row.typeid;
			this.devuser = row.devuser;
			this.devdate = row.devdate;
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
				}).then(res=>{
				this.CompArr = res.data;			
			})
			var url = this.baseUrl+"/baseDevtype/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
				}).then(res=>{
				this.typeArr = res.data;			
			})
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
