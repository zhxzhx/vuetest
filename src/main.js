//1导入vue包
//注意点vue 自动去node_modelus文件中查找vue\dise\vue.js
import Vue from 'vue';

//2导入App.vue模块
import App from './App.vue';

//3 实例化一个vue的对象实例
new Vue({
    el: '#app', //表示将组建内容插入到id=app的dom元素中
    //render:function(create){create(App)}
    render: c => c(App)//编译app.vue的这个组件
})