import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// import './assets/main.css'
// 可视化方案：
import '@/assets/flexible.js'

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
