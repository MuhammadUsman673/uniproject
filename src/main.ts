import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/style.css";
import "@/App.css";

const app = createApp(App);
const pinia = createPinia();
app.use(createPinia()).use(pinia).use(router).mount("#app");
