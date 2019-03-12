
### webpack配置 proxy 代理

```
module.exports = {
    devServer: {
        proxy: {
            '/api': { //默认匹配以 /api 开头的
                target: 'http://localhost:4000',
                ws: true,
                changeOrigin: true, //改变源
                pathRewrite: { // 路径重写，
                    '^/api': '' //这里相当于 http://localhost:4000 加上你请求的路径
                }
            }
        }
    }
}
```