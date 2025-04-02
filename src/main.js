import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index.ts";

const app = createApp(App);
app.use(router).use(createPinia).use(createPinia());
app.mount("#app");
