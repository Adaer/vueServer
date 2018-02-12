<template>
	<div class="index_bg">
		<canvas id="canvas"></canvas>
	</div>
</template>

<script>
	import backCanvas from './BackCanvas'

	export default {
		data(){
			return {

			}
		},
		mounted(){
			backCanvas()
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	.index_bg{
		#canvas { 
			position: absolute; 
			width: 100%; 
			height: 100%; 
			z-index: -2;
		}
	}
</style>