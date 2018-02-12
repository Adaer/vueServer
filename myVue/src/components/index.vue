<template>
	<section>
		<Header/>
		<BgCanvas/>
		<IndexCont/>
		<Footer/>
	</section>
</template>

<script>
	import Header from '@/components/header'
	import BgCanvas from '@/components/bgCanvas'
	import IndexCont from '@/components/index_content'
	import Footer from '@/components/footer'

	export default {
		components:{
			Header,
			BgCanvas,
			IndexCont,
			Footer
		}
	}
</script>

<style lang="scss" scoped type="text/css">

</style>