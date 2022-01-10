import ElementPlus from "element-plus";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "@/assets/styles/tailwind.scss";

const app = createApp(App as any);
app.use(router);
app.use(ElementPlus);

app.mount("#app");
