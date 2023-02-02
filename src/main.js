import { createApp } from "vue";
import App from "./App.vue";
import AppM from "./AppM.vue";
import "./assets/tailwind.css";
import animation from "./plugins/animation";
import VMenu from "@/components/VMenu";
import VBtn from "@/UI/VBtn";
import VContact from "@/UI/VContact";

// const app = createApp(App)
// app.component('Contact', VContact)
// app.use(animation)
// app.component('main-btn', VBtn)
// app.component('VMenu', VMenu)
// app.mount('#app')

console.log(navigator.userAgent);
if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	const app = createApp(AppM);
	app.config.globalProperties.$version = false;
	app.use(animation);
	app.component("main-btn", VBtn);
	app.mount("#appM");
} else {
	const app = createApp(App);
	app.config.globalProperties.$version = true;
	app.component("Contact", VContact);
	app.use(animation);
	app.component("main-btn", VBtn);
	app.component("VMenu", VMenu);
	app.mount("#app");
}
