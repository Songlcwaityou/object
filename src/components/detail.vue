<!-- 模板 -->
<template>
<div class="detail">
	<div class="product-part">
		<img :src="'img/item/' + data.src" alt="">
		<h1>{{data.title}}</h1>
		<p>{{data.description}}</p>
	</div>
	<div class="price-part">
		<span class="price"><strong>{{data.price}}</strong>元</span>
		<span class="origin-price">门市价:{{data.originPrice}}元</span>
		<span class="buy">立即购买</span>
	</div>
	<ul class="sales-part clearfix">
		<li>支持立即退货</li>
		<li>支持随时退货</li>
		<li class="sales">销量{{data.sales}}</li>
	</ul>
	<div class="store-part module">
		<div class="module-header">店家信息</div>
		<div class="module-body">
			<p>{{data.storeName}}</p>
			<p>{{data.storeAddress}}</p>
		</div>
		<div class="module-footer">查看{{data.storeNum}}家分店</div>
	</div>
	<div class="buy-part module">
		<div class="module-header">购买须知</div>
		<div class="module-body">
			<ul>
				<li>
					<h3>有效日期</h3>
					<p>{{data.validateTime}}</p>
				</li>
				<li>
					<h3>使用时间</h3>
					<p>{{data.useTime}}</p>
				</li>
				<li>
					<h3>使用规则</h3>
					<p v-for="(item, index) in data.rules" :key="index">{{item}}</p>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>
<style type="text/css" lang>
	/*样式懒得写了*/
	/*样式懒得写了*/
	/*样式懒得写了*/
	/*样式懒得写了*/
	/*样式懒得写了*/
	/*样式懒得写了*/
	/*样式懒得写了*/
	/*样式懒得写了*/
	/*样式懒得写了*/



</style>
<script type="text/javascript">
	export default {
		//定义数据
		data() {
			return {
				data: {}
			}
		},
		//组件创建完成 请求数据
		created() {
			this.$http.get("data/product.json", {
				params: {
					id: this.$route.params.detailid
				}
			})
			.then(({data}) =>{
				this.data = data;
			})
		}
	}
</script>