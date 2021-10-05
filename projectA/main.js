
import { createApp } from 'vue'
import App from './App.vue';
createApp(App)
  .mount('#app')

import("teamB/componentA").then((res) => {
    const componentA = res.default;
    componentA();
});
// import("teamB/componentB").then((res) => {
//     const componentA = res.default;
//     componentA();
// });

console.log('入口122')