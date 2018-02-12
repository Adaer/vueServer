<template>
	<header class="index_head">
		<div class="head_wrap">
			<div class="head_logo">
				<img src="../assets/logo.png" height="50" width="50" alt="前端之路" tilte="前端之路">
			</div>
			<nav>
				<div v-for="(i,idx) in headlist" :key="idx">
					<router-link :to="i.urls">{{i.cont}}</router-link>
				</div>
			</nav>
			
		</div>
	</header>
</template>

<script>
	export default {
		data(){
			return {
				headlist:[
					{
						cont:"首页",
						urls:"/"
					},{
						cont:"特效展示",
						urls:"/show"
					},{
						cont:"我的收藏",
						urls:"javascript:viod(0)"
					},{
						cont:"......",
						urls:"javascript:viod(0)"
					}	
				]
			}
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	.index_head{
		width: 100%;
		height: 0.5rem;
		background: #f8f8f8;
		border-bottom: 0.01rem solid #ddd;
		.head_wrap{
			width: 10rem;
			height: 0.5rem;
			margin: 0 auto;
			.head_logo{
				float: left;
			}
			nav{
				font-size: 14px;
				line-height: 0.5rem;
				overflow: hidden;
				div{
					float: left;
					width: 0.68rem;
					text-align: center;
					a{
						display: block;
						color: #333;
						transition: all 0.3s linear;
						&:hover{
							background: #fff;
							color: rgba(88,188,88,0.3);
						}
					}
				}
			}
		}
	}
</style>