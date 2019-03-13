//安装vue
import Vue from 'vue';
//安装路由
import router from './router/router';
//安装lfess
import {} from './app.less';
//安装异步请求axios
import axios from 'axios';
//安装
Vue.prototype.$http = axios;
//实例化vue
new Vue({
	el: '#app',
	data: {

	},
	//安装路由
	router,
	//路由渲染位置
	template: '#tpl',

	methods: {
		goBack() {
			history.go(-1)
		}
	}
})
