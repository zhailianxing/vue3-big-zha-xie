### 1.安装
```
1.node: 下载安装(需要多版本的话,使用nvm)
node作用： 浏览器无法解释vue文件,node是将vue编译成css/js/html，则浏览器可以渲染
npm: npm是node中的包管理器
验证安装成功: node -v     npm -v 

2.vue-cli: npm install -g @vue/cli
验证安装成功： vue --version

```

### 2.创建项目,选中default vue3
```
vue create vue3-big-zha-xie

```

### 3.运行
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 4.安装element-plus. 参考官网：https://element-plus.org/zh-CN/guide/installation.html
```
cd vue3-big-zha-xie
npm install element-plus --save

```
#### 4.1 完整引入ElementPlus. main.js加入：
```
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')
```


### 5. 安装路由 
```
    npm install vue-router@4
```