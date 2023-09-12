import router from "@/router/index";

/**
 * @description post请求
 * @param {string} api_url 接口地址
 * @param {PostParams} params 请求参数
 * @param {string} params.func 函数名称
 * @param {string} params.args 函数参数
 * @returns {Promise<any>} 返回Promise
 */
export async function post(api_url: string, params: PostParams): Promise<any> {
  const base_url = import.meta.env.VITE_APP_BASE_URL;
  const url = base_url + api_url;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') as string
  };
  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(params),
  };
  const res = await fetch(url, options);
  if (res.ok) {
    const data: Promise<any> = res.json();
    return data;
  }
  else {
    const data = await res.text();
    let error = new Error();
    error.message = data;
    if (res.status === 401) {
      error.name = "401";
      router.push('/');
    }
    else {
      error.name = res.status.toString();
    }
    throw error;
  }
}