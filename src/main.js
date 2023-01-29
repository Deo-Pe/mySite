import { createApp } from 'vue'
import App from './App.vue'
import AppM from './AppM.vue'
import './assets/tailwind.css'
import animation from "./plugins/animation";
import VMenu from "@/components/VMenu";
import VBtn from "@/UI/VBtn";
import VContact from "@/UI/VContact";



// console.log(navigator.userAgent);

if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	const AppM = require("./AppM.vue")
	const app = createApp(AppM)
	app.use(animation)
	app.component('main-btn', VBtn)
	app.mount('#appM')
} else {
	const app = createApp(App)
	app.component('Contact', VContact)
	app.use(animation)
	app.component('main-btn', VBtn)
	app.component('VMenu', VMenu)

	app.mount('#app')
}

