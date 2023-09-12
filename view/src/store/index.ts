import { createPinia } from 'pinia'
/** 持久化工具 */
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia();
pinia.use(piniaPersist)
export default pinia;
