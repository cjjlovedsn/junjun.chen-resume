import { ref } from "vue";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

const usePersonInfo = () => {
  dayjs.extend(duration);

  const birthday = dayjs("19891227", "YYYYMMDD");
  const startWorkTime =  dayjs("20130301", "YYYYMMDD");
  const now = dayjs();
  const age = dayjs.duration(now.diff(birthday)).years();
  const yearsOfWorking = dayjs.duration(now.diff(startWorkTime)).years();

  const personInfo = ref({
    name: "吴振雪",
    gender: "男",
    phone: "150-1005-7138",
    email: "15010057138@163.com",
    birthday: "19891227",
    age,
    yearsOfWorking
  });

  return {
    personInfo,
  };
};

export default usePersonInfo;
