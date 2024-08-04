<script setup lang="ts">
import usePersonInfo from "./hooks/usePersonInfo";
import useSkill from "./hooks/useSkill";
import useCompany from "./hooks/useCompany";
import IconPhone from "./assets/icon/phone.vue";
import IconEmail from "./assets/icon/email.vue";
import IconGithub from "./assets/icon/github.vue";

const { personInfo } = usePersonInfo();
const { skill } = useSkill();
const { companyList } = useCompany();
</script>

<template>
  <div class="main">
    <div class="basis">
      <h1>{{ personInfo.name }}</h1>
      <div class="summary">
        <span class="item">{{ personInfo.gender }}</span>
        <span class="item">{{ personInfo.age }}岁</span>
        <span class="item">{{ personInfo.yearsOfWorking }}年工作经验</span>
      </div>
      <div class="contact">
        <IconPhone class="icon" />
        <span class="phone">{{ personInfo.phone }}</span>
        <IconEmail class="icon" />
        <a :href="`mailto:${personInfo.email}`">{{ personInfo.email }}</a>
        <IconGithub class="icon" />
        <a href="https://github.com/imaxue">imaxue</a>
      </div>
    </div>

    <section class="skill">
      <h2>专业技能</h2>
      <ul>
        <li v-for="(item, index) in skill" :key="index">{{ item }}</li>
      </ul>
    </section>

    <section class="work-experience">
      <h2>工作经历</h2>
      <div class="company-list">
        <div class="company" v-for="company in companyList">
          <!-- <div v-if="company.newPageForDuty" style="page-break-after: always"></div> -->

          <div class="company-overview">
            <h3 class="name">{{ company.name }}</h3>
            <div class="title">{{ company.title }}</div>
            <div class="date">{{ company.workStartTime }}-{{ company.workEndTime }}</div>
          </div>
          <ul class="duty-list">
            <li v-for="duty in company.duty">{{ duty }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="project-experience">
      <h2>项目经验</h2>
      <div class="company" v-for="company in companyList">
        <div v-if="company.newPageForProject" style="page-break-after: always"></div>

        <h3 class="name">{{ company.name }}</h3>
        <div class="project-list">
          <div class="project" v-for="project in company.projects">
            <h4 class="name" style="margin-top: 6px">{{ project.name }}</h4>
            <div class="content">
              <div class="title" style="margin-top: 6px">业务功能：</div>
              <p class="description">{{ project.description }}</p>
              <div class="title" style="margin-top: 6px">工作内容：</div>
              <ul class="merit-list">
                <li v-for="technology in project.technologyList">{{ technology }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="education-background">
      <h2>教育背景</h2>
      <div><span class="label">毕业学校：</span>北京科技职业学院</div>
      <div><span class="label">学历：</span>大专</div>
      <div><span class="label">专业：</span>生物技术及应用专业</div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
