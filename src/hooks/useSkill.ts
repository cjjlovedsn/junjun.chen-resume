import { ref } from "vue";

const useSkill = () => {
  const skill = ref([
    `熟悉 HTML，CSS，JavaScript，ES6+，TypeScript，Less，Sass；`,
    `熟悉 Vue2/3，Vuex，Pinia，Nuxt，Vue Router，Element-UI；`,
    `熟悉 React，Redux，React-router，Ant Design；`,
    `熟悉 web3 相关知识；`,
    `熟悉 Webpack，Vite 前端工程自动化工具；`,
    `熟悉 微信公众号，微信小程序开发；`,
    `熟悉 Node.js 及相关框架 Express，Egg.js；`,
    `熟悉 Flutter，React Native 跨平台开发；`,
    `熟悉 Jenkins，Docker 的使用；`,
    `熟练使用 git、github 进行代码管理；`,
    `熟练使用 Charles，Postman，Wireshark 等工具分析解决相关问题。`,
    `了解 Golang / Java / SQL 等后端技术。`,
  ]);
  return { skill };
};

export default useSkill;
