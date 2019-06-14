<!-- html部分 -->
<template>
	<div>
		<h1>添加流程信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入流程名称' v-model='flowname'></el-input> </el-col>
			<el-col :span="12"> 
			<el-select style='width:300px;margin-top: 20px;' v-model="dljid" placeholder="请输入斗轮机">
				<el-option
				  v-for="dlj in DljArr"
				  :label="dlj.devname"
				  :value="dlj.devid" :key="dlj.devname">
				  {{dlj.devname}}
				</el-option>
			</el-select>
			</el-col>
		</el-row>
		<el-row>
		   <el-col :span="12"> 
			<el-select style='width:300px;margin-top: 20px;' v-model="zcjid" placeholder="请输入装船机">
				<el-option
				  v-for="zcj in ZcjArr"
				  :label="zcj.devname"
				  :value="zcj.devid" :key="zcj.devname">
				  {{zcj.devname}}
				</el-option>
			</el-select>
			</el-col>
			<el-col :span="12">
				<el-select style='width:300px;margin-top: 20px;' v-model="pdjid" placeholder="请输入皮带机">
					<el-option
					  v-for="pdj in PdjArr"
					  :label="pdj.devname"
					  :value="pdj.devid" :key="pdj.devname">
					  {{pdj.devname}}
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
				flowname:'',
				dljid:'',
				pdjid:'',
				zcjid:'',
				DljArr:[],
				ZcjArr:[],
				PdjArr:[]
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/insert"
				// 传递给后端的数据
				var data = {flowname:this.flowname,dljid:this.dljid,pdjid:this.pdjid,zcjid:this.zcjid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/FlowList'});	
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseDevice/findDljByCompid"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.DljArr = res.data;			
			})
			var url = this.baseUrl+"/baseDevice/findCzjByCompid"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.ZcjArr = res.data;			
			})
			var url = this.baseUrl+"/baseDevice/findPdjByCompid"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.PdjArr = res.data;			
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
