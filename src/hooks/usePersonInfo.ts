import { ref } from "vue";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

const usePersonInfo = () => {
  dayjs.extend(duration);

  const birthday = dayjs("19861024", "YYYYMMDD");
  const startWorkTime =  dayjs("20100601", "YYYYMMDD");
  const now = dayjs();
  const age = dayjs.duration(now.diff(birthday)).years();
  const yearsOfWorking = dayjs.duration(now.diff(startWorkTime)).years();

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
