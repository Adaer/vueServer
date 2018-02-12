<template>
	<aside class="index_content">
		<ul class="index_list_left">
			<li v-for="(i,index) in list" :key="index">
				<div>{{i.cont}}</div>
			</li>
		</ul>
	</aside>
</template>

<script>

	export default {
		data(){
			return {
				list:[
					{
						cont:"导航"
					},{
						cont:"导航"
					},{
						cont:"导航"
					},{
						cont:"导航"
					},{
						cont:"导航"
					},{
						cont:"导航"
					}
				]
			}
		},
		mounted(){
		}
	}
</script>

<style lang="scss" scoped>
	.index_content{
		.index_list_left{
		    width: 3rem;
		    height: 9rem;
		    color: #fff;
		    font-size: 16px;
		    background: rgba(0, 0, 0, 0.1);
		    padding-left: 0.32rem;
		    padding-right: 0.32rem;
			li{
				padding: 0.1rem;
				border-bottom: 0.01rem solid #666;
				transtion: 0.6s linear;
				&:hover{
					transtion: 0.6s linear;
					background: rgba(88,188,88,0.3);
				}
			}
		}
	}
</style>