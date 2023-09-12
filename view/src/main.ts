import App from "./App.vue";
import { createApp } from "vue";
import vuetify from "@/assets/vuetify";
import router from "@/router";
import pinia from "@/store";

/** 全局动画插件 */
import 'animate.css/animate.min.css'

const app = createApp(App);

/** 注册vuetify */
/** 注册 markdown 编辑器 */
app.use(router);
app.use(pinia);
app.use(vuetify);

app.mount("#app");
