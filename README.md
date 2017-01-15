simple-weather-report
==========

用node写的基于高德地图、心知天气api的模仿彩云天气实时天气预报

### 安装依赖

```bash
npm install
```

### 修改心知天气api配置config/api.config.js

```javascript
module.exports = {
    port: 3000,                     // 默认3000端口
    apiKey: "hbyerwn4ctppolvk"      // 从心知天气api申请的免费key
};

```


### 运行node服务器

```bash
node server.js
```


### 运行程序
http://127.0.0.1:3000
