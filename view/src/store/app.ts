import { defineStore } from "pinia";
export const useAppStore = defineStore("main", {
  state: () => {
    return {
      token: "",
      /** 登录账户信息 */
      acc_info: {} as AccInfo,
      /** 登入科室信息 */
      dept_info: {} as DeptInfo,
      /** 正在新增的处方 */
      cache_rx: {} as Rx,
      /** 展示门诊病历 */
      is_show_ops_mr: false,
      /** 病人信息 */
      pt_info: {} as OpsPtInfo,
    };
  },
  persist: {
    enabled: true,
  },
});
