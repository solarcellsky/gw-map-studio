import { createApp } from 'vue'
import App from "./app.vue";
import gwMapStudio from "@/components/index.js";

const app = createApp(App);

app.use(gwMapStudio)
app.mount("#app");
