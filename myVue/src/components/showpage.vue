<template>
	<div>
		<Header/>
		<div class="wrap">
			<nav class="index_content">
				<ul class="index_list_left">
					<li v-for="(i,index) in list" :key="index">
						<router-link :to="i.urls">{{i.cont}}</router-link>
					</li>
				</ul>
			</nav>
		</div>
		<content>
			<router-view></router-view>
			<!-- 路由中匹配子路由后 需要在这里申明一个出口 -->
		</content>
	</div>
</template>

<script>
	import Header from '@/components/header'

	export default {
		data(){
			return {
				list:[
					{
						cont:"旋转3D图",
						urls:"/show/a"
					},{
						cont:"导航",
						urls:"/show/b"
					},{
						cont:"导航",
						urls:"/show/c"
					},{
						cont:"导航",
						urls:"/show/d"
					},{
						cont:"导航",
						urls:"/show/e"
					},{
						cont:"导航",
						urls:"/show/f"
					}
				]
			}
		},
		components:{
			Header
		},
		mounted(){
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		width: 100%;
		background: rgba(0, 0, 0, 0.1);
	}
	.index_content{
		width: 10rem;
		margin: 0 auto;
		.index_list_left{
		    width: 100%;
		    height: 0.46rem;
		    color: #fff;
		    font-size: 14px;
			li{
				float: left;
				height: 100%;
				margin-right: 0.22rem;
				a{
					display: block;
					line-height: 0.46rem;
					color: #666;
					transition: 0.3s linear;
					&:hover{
						transition: 0.3s linear;
						color: rgb(88,188,88);
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>