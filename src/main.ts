import { createApp } from 'vue'
import App from './App.vue'
import GwMapStudio from "./packages/index.js";

const app = createApp(App);

app.use(GwMapStudio); //注册
app.mount("#app");
