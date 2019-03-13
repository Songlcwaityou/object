<!-- 模板 -->
<template>
	<div class="list">
		<ul class="order">
			<li v-for="(item, index) in orders" :key="index" @click="orderList(item.id)">
				<span class="text">{{item.text}}</span>
				<span class="arrow"></span>
			</li>
		</ul>
		<ul class='selse'>
			<router-link v-for="(item, index) in list" :key='index' :to="'/detail/' + item.id" tag="li">
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
		<div class="others" @click='showOthers' v-show='others.length'>
			<h3>点击查看其它{{ others.length }}条数据</h3>
		</div>
	</div>
</template>
<!-- 样式 -->
<style type="text/css" lang='less'>
@import "../base.less";
	.order {
		overflow: hidden;
		list-style: none;
		background-color: #fff;
		li {
			height: 30px;
			float: left;
			width: 25%;
			box-sizing: border-box;
			text-align: center;
			border-right: 1px solid #e1e1e1;
			border-bottom: 1px solid #e1e1e1;
			&:last-child {
				border-right: none;
			}
			.text {
				font-size: 14px;
				color: #666;
			}
			.arrow {
				width: 0;
				height: 0;
				border: 5px solid transparent;
				border-top-color: #666;
				position: relative;
				top:15px;
				left:2px;

			}
		}
	}
	.selse {
		padding: 0px 10px;
		background-color:#fff;
		li:first-child {
			border-top: none;
		}
		li:last-child {
			border-bottom: 1px solid #ccc;
		}
		.selse-list;
	}
	.others {
		// position: relative;
		background-color: #fff;
		height: 40px;
		h3 {
			text-align: center;
			color: #06c1ae;
			font-size: 18px;
			line-height: 40px;
		}
	}
</style>
<!-- 功能 -->
<script type="text/javascript">
	export default {
		data() {
			return {
				//保存数据
				orders: [
					{id:"price", text:"价格排序"},
					{id:"sales", text:"销量排序"},
					{id:"evaluate", text:"好评排序"},
					{id:"discount", text:"优惠排序"},
				],
				//存储请求回来的数据
				list: [],
				others:[]
			}
		},
		

		//组件创建完成 请求数据
		mounted() {
			// console.log(this)
			//请求地址
			this.$http.get("data/list.json", {
				params:{
					id: this.$route.params.typeid
				}
			})
			.then(({ data }) => {
				// this.list = data;
				this.list = data.slice(0, 3);
				//剩余的参数
				this.others = data.slice(3);
			})

		},
		//方法
		methods: {
			// 剩余的列表
			showOthers() {
				// console.log(this);
				this.list = this.list.concat(this.others)
				this.others = [];

			},
			//排序
			orderList(id) {
				// console.log(id);
				this.list.sort((a, b) => {
					if(id === 'discount') {
						//降序
						return (b.originPrice - b.price) - (a.originPrice - a.price)
					}
					//降序
					return b[id] - a[id]

				})
			},
			
		}

	}
</script>