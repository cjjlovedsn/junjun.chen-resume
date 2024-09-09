import { ref } from "vue";

const useSkill = () => {
  const skill = ref([
    `熟悉 HTML，CSS，JavaScript，ES6+，TypeScript，Less，Sass；`,
    `熟悉 Vue2/3，Vuex，Pinia，Nuxt，Vue Router，Element-UI，Naive-UI；`,
    `熟悉 Webpack，Vite 前端工程自动化工具；`,
    `熟悉 微信公众号，微信小程序开发；`,
    `熟悉 Electron 桌面应用开发`,
    `熟悉 Node.js 及相关框架 Express，Egg.js；`,
    `熟悉 Flutter跨平台开发；`,
    `熟悉 Git 版本控制工具`,
    `了解 Golang 等后端技术。`,
  ]);
  return { skill };
};

export default useSkill;
