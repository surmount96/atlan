import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./styles/app.css";
import "remixicon/fonts/remixicon.css";
import excel from "vue-excel-export";

const app = createApp(App);
app.use(store);
app.use(excel);
app.mount("#app");
