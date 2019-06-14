<!-- html部分 -->
<template>
	<div>
		<div style="text-align: left; ">
			<el-tag style='margin-left: 10px;' v-for="(tag,index) in $store.state.tags" :key="tag.name" closable :type="tag.type"
			        @click='cli(tag,index)'  @close='del(tag,index)'>
				{{tag.name}}
			</el-tag>
			<router-view/>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			cli(tag,index){
				this.$router.push({path:tag.url});
				this.$store.commit('cliTag',index);
				
				this.$store.commit('change',tag.index);
				
			},
			del(tag,index){
				if(this.$store.state.tags.length==1){
					this.$message("已经是最后一个标签啦")
				}else{
					var flag = this.$store.state.tags[index].type=='warning'
					this.$store.commit('delTag',index)
					if(flag){
						if(index==0){
							this.$store.commit('cliTag',0);
							this.$router.push({path:this.$store.state.tags[0].url});
						}else{
							this.$store.commit('cliTag',index-1);
							this.$router.push({path:this.$store.state.tags[index-1].url});
						}
					}
				}
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
