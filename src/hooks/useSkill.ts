import { ref } from "vue";

const useSkill = () => {
  const skill = ref([
    "HTML、CSS、JavaScript、TypeScript，Sass / Less",
    "Vue 2/3、Vue Router、Pinia、Vuex、Nuxt",
    "Element UI、Element Plus、Naive UI",
    "Tailwind CSS、shadcn-vue（Reka UI）",
    "uni-app：微信小程序、H5、App，以及微信分享与支付",
    "Electron、Node.js 桌面应用，支持 Windows / macOS",
    "Flutter 跨平台开发，支持 Android / iOS",
    "WebSocket、虚拟列表、大文件上传、Canvas 画板",
    "Chrome / Safari 浏览器插件",
    "Java、Python 部分后端开发与接口联调",
  ]);
  return { skill };
};

export default useSkill;
