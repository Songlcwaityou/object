module.exports = {
	// lintOnSave: true,
	// 配置webpack
	configureWebpack: {
		resolve: {
			// 更改vue入口
			alias: {
				'vue$': 'vue/dist/vue.js'
			}
		}
	}

}