const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({

    transpileDependencies: true,
});

module.exports = {
    devServer: {
        port: 9999,     // 端口号
        //开启代理服务器(方式一)
        //proxy: 'http://localhost:5000'

        //开启代理服务器(方式二)
        proxy: {
            '/jason': {
                target: 'http://localhost:5000',
                pathRewrite: {'^/jason': ""},
                //ws: true,
                //changeOrigin: false,
            },
            '/kamden': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/kamden': ""},
                //ws: true,
                //changeOrigin: false,
            }
        }


    },
    lintOnSave: false,
};
