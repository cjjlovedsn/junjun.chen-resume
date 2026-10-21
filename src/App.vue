<script setup lang="ts">
import usePersonInfo from "./hooks/usePersonInfo";
import useSkill from "./hooks/useSkill";
import useCompany from "./hooks/useCompany";
import IconPhone from "./assets/icon/phone.vue";
import IconEmail from "./assets/icon/email.vue";
// import IconGithub from "./assets/icon/github.vue";

const { personInfo } = usePersonInfo();
const { skill } = useSkill();
const { companyList } = useCompany();

const formatSkill = (text: string) => text.replace(/[；;。.\s]+$/u, "");

const exportPdf = () => {
  window.print();
};
</script>

<template>
  <div class="page">
    <div class="toolbar">
      <button class="export-pdf" type="button" @click="exportPdf">导出 PDF</button>
    </div>
    <div class="sheet">
      <header class="hero">
        <div class="identity">
          <div class="seal" aria-hidden="true">陈</div>
          <div>
            <p class="role">Web 前端工程师</p>
            <h1>{{ personInfo.name }}</h1>
            <div class="summary">
              <span class="item">{{ personInfo.gender }}</span>
              <span class="item">{{ personInfo.age }}岁</span>
              <span class="item">{{ personInfo.yearsOfWorking }}年工作经验</span>
            </div>
          </div>
        </div>
        <div class="contact">
          <a class="contact-item" :href="`tel:${personInfo.phone.replace(/-/g, '')}`">
            <IconPhone class="icon" />
            <span>{{ personInfo.phone }}</span>
          </a>
          <a class="contact-item" :href="`mailto:${personInfo.email}`">
            <IconEmail class="icon" />
            <span>{{ personInfo.email }}</span>
          </a>
          <!-- <IconGithub class="icon" /> -->
          <!-- <a href="https://github.com/imaxue">imaxue</a> -->
        </div>
      </header>

      <section class="skill">
        <h2>专业技能</h2>
        <ul>
          <li v-for="(item, index) in skill" :key="index">{{ formatSkill(item) }}</li>
        </ul>
      </section>

      <section class="work-experience">
        <h2>工作经历</h2>
        <div class="company-list">
          <div
            class="company"
            v-for="company in companyList"
            :key="`${company.name}-${company.workStartTime}`"
          >
            <div class="company-overview">
              <h3 class="name">{{ company.name }}</h3>
              <div class="title">{{ company.title }}</div>
              <div class="date">{{ company.workStartTime }} — {{ company.workEndTime }}</div>
            </div>
            <ul class="duty-list">
              <li v-for="(duty, index) in company.duty" :key="index">{{ duty }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="project-experience">
        <h2>项目经验</h2>
        <div
          class="company"
          v-for="company in companyList"
          :key="`${company.name}-${company.workStartTime}`"
        >
          <template v-if="company.projects.length > 0">
            <h3 class="name">{{ company.name }}</h3>
            <div class="project-list">
              <article class="project" v-for="project in company.projects" :key="project.name">
                <h4 class="name">{{ project.name }}</h4>
                <div class="content">
                  <div class="block">
                    <div class="title">业务功能</div>
                    <p class="description">{{ project.description }}</p>
                  </div>
                  <div class="block">
                    <div class="title">工作内容</div>
                    <ul class="merit-list">
                      <li v-for="(technology, index) in project.technologyList" :key="index">
                        {{ technology }}
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </template>
        </div>
      </section>

      <section class="education-background">
        <h2>教育背景</h2>
        <div class="edu-grid">
          <div><span class="label">毕业学校</span>中南林业科技大学</div>
          <div><span class="label">学历</span>本科</div>
          <div><span class="label">专业</span>软件工程</div>
        </div>
      </section>
    </div>
  </div>
</template>
