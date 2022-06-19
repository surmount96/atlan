import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./styles/app.css";
import "remixicon/fonts/remixicon.css";

const app = createApp(App);
app.use(store);
app.mount("#app");
