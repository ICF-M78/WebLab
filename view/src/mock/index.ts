import Mock from "mockjs";

/** @description 处方列表 */
export const rx_ls = Mock.mock({
  "list|3-6": [
    {
      id: "@id",
    }
  ],
});

export const test_org_ls = Mock.mock({
  "list|30-60": [
    {
      "id|+1": 1000,
      name: "xxx医院",
      "pt_id|+1": 1010,
      "lvl|1-3": 1,
      "doc_ttl|3-100": 5,
      "nr_ttl|3-100": 5,
      "bed_ttl|10-100": 10,
    },
  ],
});

export const test_user_ls = Mock.mock({
  "list|30-60": [
    {
      pid: "@id",
      mi_opr_id: "@id",
      pwd: "@word(6, 12)",
      sex: "@pick(['男', '女'])",
      name: "@cname",
      bday: "@date('yyyy-MM-dd')",
      tel: "@integer(10000000000, 19999999999)",
      email: "@word(6, 12)@pick(['@qq.com', '@163.com', '@gmail.com'])",
      cert_type: "@pick(['身份证', '护照'])",
      mar_stat: "@pick(['未婚', '已婚', '离异', '丧偶'])",
      pol_stat: "@pick(['党员', '团员', '群众'])",
      join_part_time: "@date('yyyy-MM-dd')",
      nation_id: "@integer(1, 56)",
      nation_name:
        "@pick(['汉族', '蒙古族', '回族', '藏族', '维吾尔族', '苗族', '彝族'])",
      edu: "@pick(['大专', '本科', '硕士', '博士'])",
      work_beg_time: "@date('yyyy-MM-dd')",
      photo: "@image('200x200', '#50B347', '#FFF', 'Mock.js')",
      sig_photo: "@image('200x200', '#50B347', '#FFF', 'Mock.js')",
      opr_nature: "@pick(['全职', '兼职'])",
      opr_catergory: "@pick(['医生', '护士', '行政', '后勤'])",
      tech_title: "@pick(['初级', '中级', '副高', '正高'])",
      org_inner_id: "@integer(1000, 9999)",
      org_id: "@integer(1000, 9999)",
      org_name:
        "@pick(['*** 县第一人民医院','*** 县第二人民医院', '*** 镇卫生院','*** 镇第一人民医院院', '*** 县中医医院'])",
      org_inner_dept_id: "@integer(1000, 9999)",
      org_inner_dept_name:
        "@pick(['内科', '外科', '妇产科', '儿科', '五官科'])",
      crt_opr_id: "@id",
      crt_opr_name: "@cname",
      crt_time: "@date('yyyy-MM-dd')",
      upd_opr_id: "@id",
      upd_opr_name: "@cname",
      upd_time: "@date('yyyy-MM-dd')",
    },
  ],
});

/** 测试用 pacs服务器列表 */
export const test_pacs_svr_ls = Mock.mock({
  "list|10-30": [
    {
      id: "@id",
      // mock 中文的 某某医院
      name: "@pick(['*** 县第一人民医院','*** 县第二人民医院', '*** 镇卫生院','*** 镇第一人民医院院', '*** 县中医医院'])",
      ip: "@ip",
      "port|1000-9999": 1000,
      is_link: "@boolean",
    },
  ],
});

/** 测试用 pacs服务器日志 */
export const test_pacs_log_ls = Mock.mock({
  "list|30-160": [
    {
      id: "@id",
      org_name:
        "@pick(['*** 县第一人民医院','*** 县第二人民医院', '*** 镇卫生院','*** 镇第一人民医院院', '*** 县中医医院'])",
      svr_ip: "@ip",
      port: "@integer(1000, 9999)",
      log_time: "@datetime('MM-dd HH:mm')",
      handle: "@pick(['连接成功', '连接失败'])",
      is_error: "@boolean",
    },
  ],
});

/** 测试用 pacs服务器列表 */
export const test_lis_svr_ls = Mock.mock({
  "list|10-30": [
    {
      id: "@id",
      // mock 中文的 某某医院
      name: "@pick(['*** 县第一人民医院','*** 县第二人民医院', '*** 镇卫生院','*** 镇第一人民医院院', '*** 县中医医院'])",
      ip: "@ip",
      "port|1000-9999": 1000,
      is_link: "@boolean",
    },
  ],
});

/** 测试用 lis服务器日志 */
export const test_lis_log_ls = Mock.mock({
  "list|30-160": [
    {
      id: "@id",
      org_name:
        "@pick(['*** 县第一人民医院','*** 县第二人民医院', '*** 镇卫生院','*** 镇第一人民医院院', '*** 县中医医院'])",
      svr_ip: "@ip",
      port: "@integer(1000, 9999)",
      log_time: "@datetime('MM-dd HH:mm')",
      handle: "@pick(['连接成功', '连接失败'])",
      is_error: "@boolean",
    },
  ],
});

/** 测试用 登录日志记录 */
export const test_login_log_ls = Mock.mock({
  "list|30-160": [
    {
      id: "@id",
      user_name: "@cname",
      org_name:
        "@pick(['*** 县第一人民医院','*** 县第二人民医院', '*** 镇卫生院','*** 镇第一人民医院院', '*** 县中医医院'])",
      login_time: "@datetime('MM-dd HH:mm')",
      handle: "@pick(['登录成功', '登录失败'])",
      is_error: "@boolean",
    },
  ],
});

/** 测试用 角色权限id */
export const test_role_authz_id_ls = Mock.mock({
  "list|20-40": [
    {
      id: "@integer(1, 59)",
    },
  ],
});

/** 测试用 EMPI 列表 */
export const test_empi_ls = Mock.mock({
  "list|200-400": [
    {
      // 姓名
      name: "@cname",
      // 身份证号
      p_id: "@id",
      // 性别
      sex: "@pick(['男', '女'])",
      // 地址
      addr: "@county(true)",
      // 电话
      tel: "@integer(10000000000, 19999999999)",
      // 医院数量
      hosp_ttl: "@integer(1, 3)",
    },
  ],
});

/** 测试用 登录统计报告 */
export const test_login_rpt_ls = Mock.mock({
  "list|30-160": [
    {
      id: "@id",
      user_name: "@cname",
      org_name:
        "@pick(['*** 县第一人民医院','*** 县第二人民医院', '*** 镇卫生院','*** 镇第一人民医院院', '*** 县中医医院'])",
      /** 登录次数 */
      login_ttl: "@integer(1, 100)",
      handle: "@pick(['登录成功', '登录失败'])",
    },
  ],
});

/** 测试用 共享阅读日志 */
export const test_share_read_log_ls = Mock.mock({
  "list|30-160": [
    {
      mr_id: "@id",
      mr_pt_name: "@cname",
      /** 来源 */
      org_id: "@integer(1000, 9999)",
      org_name:
        "@pick(['*** 县第一人民医院','*** 县第二人民医院', '*** 镇卫生院','*** 镇第一人民医院院', '*** 县中医医院'])",
      doc_id: "@integer(1000, 9999)",
      doc_name: "@cname",
      /** 阅读 */
      read_hosp_id: "@integer(1000000, 9999000)",
      read_org_name:
        "@pick(['*** 县第一人民医院','*** 县第二人民医院', '*** 镇卫生院','*** 镇第一人民医院院', '*** 县中医医院'])",
      read_doc_id: "@integer(1000, 9999)",
      read_doc_name: "@cname",
      reason: "@pick(['病情诊断', '上转', '下转', '平转'])",
    },
  ],
});

/** 测试用 集采药品审批 */
export const test_cp_drug_aud_ls = Mock.mock({
  "list|100-200": [
    {
      id: "@id",
      /** 申请医院 */
      hosp_id: "@integer(1000000, 9999000)",
      hosp_name:
        "@pick(['*** 县第一人民医院','*** 县第二人民医院', '*** 镇卫生院','*** 镇第一人民医院院', '*** 县中医医院'])",
      /** 申请医生 */
      doc_id: "@integer(1000, 9999)",
      doc_name: "@cname",
      /** 药品名称 */
      drug_name: "@pick(['阿莫西林', '头孢', '阿司匹林', '布洛芬', '氯化钠'])",
      /** 药品数量 */
      drug_num: "@integer(1, 100)",
      /** 药品规格 */
      drug_spec: "@pick(['片剂', '胶囊', '颗粒', '注射液', '滴剂'])",
      /** 药品单位 */
      drug_unit: "@pick(['盒', '瓶', '袋', '支', '粒'])",
      /** 申请时间 */
      apply_time: "@datetime('MM-dd HH:mm')",
      /** 审批时间 */
      aud_time: "@datetime('MM-dd HH:mm')",
      /** 审批状态 */
      aud_stat: "@pick(['待审批', '已审批'])",
      /** 审批结果 */
      aud_result: "@pick(['通过', '不通过'])",
    },
  ],
});

/** 测试用 集采药品使用情况 */
export const test_cp_drug_use_ls = Mock.mock({
  "list|100-160": [
    {
      id: "@id",
      /** 使用医院 */
      hosp_id: "@integer(1000000, 9999000)",
      hosp_name:
        "@pick(['*** 县第一人民医院','*** 县第二人民医院', '*** 镇卫生院','*** 镇第一人民医院院', '*** 县中医医院'])",
      /** 药品名称 */
      drug_name: "@pick(['阿莫西林', '头孢', '阿司匹林', '布洛芬', '氯化钠'])",
      /** 使用数量 */
      drug_num: "@integer(1, 100)",
      /** 药品规格 */
      drug_spec: "@pick(['片剂', '胶囊', '颗粒', '注射液', '滴剂'])",
      /** 药品单位 */
      drug_unit: "@pick(['盒', '瓶', '袋', '支', '粒'])",
      /** 使用占比 */
      drug_rate: "@float(0, 100, 2, 2)",
    },
  ],
});

/** 测试用 集采病历质控规则项目 */
export const test_mrqc_rule_proj_ls = [
  { text: "病案首页" },
  { text: "一般项目" },
  { text: "病历认可签" },
  { text: "现病史" },
  { text: "既往史" },
  { text: "个人史" },
  { text: "家族史" },
  { text: "体格检查" },
  { text: "辅助检查" },
  { text: "诊断" },
  { text: "首次病程记录" },
  { text: "上级医师首次查房记录" },
  { text: "日常上级医师查房记录" },
  { text: "日常病程记录" },
  { text: "围手术期记录" },
  { text: "出院（死亡）记录" },
  { text: "知情同意书" },
  { text: "医嘱单及辅助检查" },
  { text: "病历书写基本原则与要求" },
  { text: "病历书写基本原其它要求（一般缺陷）" },
  { text: "主诉" },
  { text: "合计" },
  { text: "VTE质控	此规则只用于VTE质" },
  { text: "专科情况" },
  { text: "入院记录" },
];

export const test_mrqc_rule_ls = [
  {
    id: 1005,
    qc_proj_id: 1005,
    qc_proj_name: "病案首页",
    cont: "有未填写、填写不规范、填写错误项目",
    explain: "各项目填写 完整、正确、规范",
    is_point: true,
    point: 0.5,
    is_stop: false,
  }
];
