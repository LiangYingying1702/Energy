<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center;">企业能耗系统曲线图</h1>
		   <ve-line :data="chartData"></ve-line>
		   <h1 style="text-align: center;">企业能耗系统柱状图</h1>
		     <ve-histogram :data="chartData"></ve-histogram>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() { 
			return {
			chartData:{
				columns: ['月份', '周口港', '漯河港', '上海港'],
				  rows: [
					{ '月份': '1月', '周口港': 19, '漯河港': 25,  '上海港': 32 },
					{ '月份': '2月', '周口港': 15, '漯河港': 23,  '上海港': 26 },
					{ '月份': '3月', '周口港': 17, '漯河港': 26, '上海港': 34 },
					{ '月份': '4月', '周口港': 16, '漯河港': 27, '上海港': 28 },
					{ '月份': '5月', '周口港': 24, '漯河港': 20, '上海港': 21 },
					{ '月份': '6月', '周口港': 21, '漯河港': 24, '上海港': 27 },
					{ '月份': '7月', '周口港': 18, '漯河港': 19, '上海港': 32 },
					{ '月份': '8月', '周口港': 25, '漯河港': 22, '上海港': 28 }
				]
			}
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
