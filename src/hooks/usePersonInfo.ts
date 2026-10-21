import { ref } from "vue";
import dayjs from "dayjs";

const fullYears = (from: dayjs.Dayjs, to: dayjs.Dayjs) => {
  const anniversary = from.clone().year(to.year());
  const years = to.year() - from.year();
  if (to.isBefore(anniversary, "day")) {
    return years - 1;
  }
  return years;
};

const usePersonInfo = () => {
  const birthday = dayjs("19861024", "YYYYMMDD");
  const startWorkTime = dayjs("20100601", "YYYYMMDD");
  const now = dayjs();
  const age = fullYears(birthday, now);
  const yearsOfWorking = fullYears(startWorkTime, now);

  const personInfo = ref({
    name: "陈军军",
    gender: "男",
    phone: "150-8490-3325",
    email: "393801119@qq.com",
    birthday: "19861024",
    age,
    yearsOfWorking
  });

  return {
    personInfo,
  };
};

export default usePersonInfo;
