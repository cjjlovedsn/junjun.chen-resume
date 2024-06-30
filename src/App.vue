<script setup lang="ts">
import { reactive } from "vue";
import usePersonInfo from "./hooks/usePersonInfo";
import useSkill from "./hooks/useSkill";
import useCompany from './hooks/useCompany'
import IconPhone from "./assets/icon/phone.vue";
import IconEmail from "./assets/icon/email.vue";

const { personInfo } = usePersonInfo();
const { skill } = useSkill();
const { companyList } = useCompany()

</script>

<template>
  <div class="main">
    <div class="basis">
      <h1>{{ personInfo.name }}</h1>
      <div class="summary pb10">
        <span class="item">{{ personInfo.gender }}</span>
        <span class="item">{{ personInfo.age }}岁</span>
        <span class="item">{{ personInfo.yearsOfWorking }}年工作经验</span>
      </div>
      <div class="contact pb10">
        <IconPhone />
        <span class="phone">{{ personInfo.phone }}</span>
        <IconEmail />
        <a :href="`mailto:${personInfo.email}`">{{ personInfo.email }}</a>
      </div>
    </div>

    <div>
      <h2>专业技能</h2>
      <ul>
        <li v-for="(item, index) in skill" :key="index">{{ item }}</li>
      </ul>
    </div>

    <div>
      <h2>工作经历</h2>

      <div class="company-list">
        <div class="company" v-for="item in companyList">
          <div class="company-item">
            <div class="name">{{ item.name }}</div>
            <div class="title">{{ item.title }}</div>
            <div class="date">{{ item.workStartTime }}-{{ item.workEndTime }}</div>
          </div>
          <ul class="duty-list">
            <li v-for="duty in item.duty">{{ duty }}</li>
          </ul>
        </div>

      </div>
    </div>

    <div>
      <h2>项目经验</h2>

      <h3>北京柏瑞图科技有限公司</h3>
      <ul class="project-list">
        <li class="project">
          <div class="project-title">交易平台</div>
          <ul class="merit-list">
            <li>使用 Vue + Nuxt 框架进行组件化开发，提高代码的复用性和可维护性。</li>
            <li>开发交易所的前端界面，涵盖交易、行情、账户等功能模块。</li>
            <li>开发并实现数字资产的充值、提现和转账功能，确保交易安全和流畅性。</li>
            <li>针对数字货币的行情数据进行实时更新和展示，提供可视化的行情图表和K线图等。</li>
            <li>对项目进行性能优化，提升了页面加载速度和响应性能。</li>
          </ul>
        </li>
        <li class="project">
          <div class="project-title">流动性管理平台</div>
          <ul class="merit-list">
            <li>使⽤ ECharts 完成数据的展示，对⼤数据量下的展示性能进⾏优化。</li>
            <li>使⽤ ether.js 与以太坊区块链进⾏交互，实现 Uniswap 合约的调⽤。</li>
            <li>对使⽤ ether.js 过程中遇到的问题进⾏了深⼊研究和解决，提⾼了项⽬的稳定性和性能。</li>
            <li>接⼊与调⽤ MetaMask 钱包。</li>
          </ul>
        </li>
      </ul>

      <h3>联想（北京）有限公司</h3>
      <ul class="project-list">
        <li class="project">
          <div class="project-title">精灵谷SAAS平台</div>
          <ul class="merit-list">
            <li>使用 webpack-bundle-analyzer 分析项目，优化项目启动速度</li>
            <li>基于 Egg.js 搭建 mock 服务，实现本地 mock 数据，提高前端独立开发速度</li>
            <li>通过模板配置实现页面的灵活组装</li>
            <li>使用 vue-i18n 实现项目的国际化</li>
          </ul>
        </li>
        <li class="project">
          <div class="project-title">精灵谷小程序</div>
          <ul class="merit-list">
            <li>开发角色/权限功能，使权限粒度精确到按钮级别</li>
            <li>使用小程序分包加载，优化首屏加载速度</li>
          </ul>
        </li>
      </ul>

      <h3>北京酷得少年科技有限公司</h3>
      <ul class="project-list">
        <li class="project">
          <div class="project-title">少年得到-教研系统</div>
          <ul class="merit-list">
            <li>开发权限系统，登录注册+角色关联+菜单栏权限控制。</li>
            <li>封装自定义表格组件，文稿模板化等。</li>
            <li>沟通需求，确定方案，更新，添加，维护，书写操作手册</li>
          </ul>
        </li>
        <li class="project">
          <div class="project-title">作业系统小程序</div>
          <ul class="merit-list">
            <li>音频、视频上传功能；留言、分享功能；</li>
            <li>代码优化，兼容处理。</li>
          </ul>
        </li>
      </ul>

      <h3>北京金软瑞彩科技股份有限公司</h3>
      <ul class="project-list">
        <li class="project">
          <div class="project-title">微彩站</div>
          <ul class="merit-list">
            <li>使用 React，Redux，React-router，Ant Design 搭建框架。</li>
            <li>调研微信 JS SDK 接口使用方式，如：分享，支付，图片上传。</li>
            <li>前后端接口及数据结构设计。</li>
            <li>优化性能，如代码，图片压缩，资源缓存，使用CDN技术等。</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
