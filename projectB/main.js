import A from './componentA.vue';
import B from './componentB';
import Vue from 'vue';
import App from './App.vue';

new Vue({
    render: h => h(App)
}).$mount('#app')



console.log('入口2')
// console.log('我是a:', A());
console.log('我是b：', B());