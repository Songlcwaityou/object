<!-- 模板 -->
<template>
	<div class="home">
		<!-- 列表模块 -->
		<ul class='list'>
			<router-link v-for='(item, index) in icons' :key='index' :to="'/list/type/' + item.id" tag='li'>
				<img :src="'img/icon/' + item.src" alt="">
				<span class="text"> {{ item.text }}</span>
			</router-link>
		</ul>
		<!-- 广告模块 -->
		<ul class='ads'>
			<router-link v-for="(item, index) in ads" :key='index' :to="'/detail/type' + item.id" tag='li'>
				<h3 :class="'item-' + index">{{item.title}}</h3>
				<p>{{item.description}}</p>
				<img :src="'img/ad/' + item.url" alt="">
			</router-link>
		</ul>
		<!-- 商品列表模块 -->
		<div class="home-list">
			<h2>猜你喜欢</h2>
			<ul class='selse-list'>
				<router-link v-for="(item, index) in list" :key='index' :to="'/detial/' + item.id" tag="li">
					<img :src="'img/list/' + item.img" alt="">
					<div class="content">
						<h3>{{item.title}}</h3>
						<p>
							<span class="price">{{item.price}}元</span>
							<span class="origin-price">门市价:{{item.originPrice}}元</span>
							<span class="selse-price">销量{{item.sales}}</span>
						</p>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<!-- 样式 -->
<style type="text/css" lang='less'>
@import '../base.less';
	.home {
		width: 100%;
		.list {
			list-style: none;
			overflow: hidden;
			background-color: #fff;
			li {
				width: 20%;
				float: left;
				text-align: center;
				margin: 10px 0px;
				img {
					width: 60%;
					display: block;
					// text-align: center;
					margin: 0 auto 5px;
					
				}
				span {
					font-size: 14px;					
				}
			}
		}
		.ads {
			margin-top: 10px;
			overflow: hidden;
			li {
				width: 100% / 3;
				border-right: 1px solid #eee;
				box-sizing: border-box;
				float:left;
				text-align: center;
				list-style: none;
				.item-0 {
					color: red;
				}
				.item-1 {
					color: #0a8d58;;
				}
				.item-2 {
					color: #961d92;
				}
				p {
					font-size: 14px;
					padding: 5px 0;
				}
				img {
					width: 60%;
				}
			}
		}
		.home-list {
				padding: 0px 10px;
				margin-top: 10px;
				background-color:#fff;
			h2 {
				// text-align: center;
				padding:5px 0;
			}
			.selse-list {
				// padding: 0px 10px;
				.selse-list;
			}	
		}
	}
</style>
<!-- 功能 -->
<script type="text/javascript">
	export default {
		//绑定数据
		data() {
			return {
				icons: [
					{id:1, text:'美食', src:'01.png'},
					{id:2, text:'电影', src:'02.png'},
					{id:3, text:'酒店', src:'03.png'},
					{id:4, text:'休闲', src:'04.png'},
					{id:5, text:'外卖', src:'05.png'},
					{id:6, text:'ktv', src:'06.png'},
					{id:7, text:'周边游', src:'07.png'},
					{id:8, text:'丽人', src:'08.png'},
					{id:9, text:'小吃', src:'09.png'},
					{id:10, text:'火车票', src:'10.png'},
				],
				//广告数据
				ads: [],
				//商品数据
				list: []
			}
		},
		//组件创建完成 发送异步请求
		mounted() {
			this.$http.get('data/home.json')
			//保存数据
			.then(({data}) => {
				this.ads = data.ad;
				this.list = data.list
			})
		}
	}
</script>