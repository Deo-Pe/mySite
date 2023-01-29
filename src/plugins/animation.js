import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

export default {
  install: (app) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    app.config.globalProperties.$gsap = gsap
    app.config.globalProperties.$TextPlugin = TextPlugin
    app.config.globalProperties.$ScrollTrigger = ScrollTrigger
  }
}