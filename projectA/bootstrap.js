
import { createApp } from 'vue';
import App from './App.vue';

createApp(App)
  .mount('#app')
import("teamB/componentB").then((res) => {
  const componentA = res.default;
  componentA();
});

import("projectC/watcher").then((res) => {
  console.log(res.default.state.a, 'projectA的watcher')
  setTimeout(() => {
    console.log(res.default.state.a, '修改后的a项目')
    console.log(res.default);
  }, 8000)
})

console.log('入口122')