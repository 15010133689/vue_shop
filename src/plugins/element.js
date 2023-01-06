import 'element-plus/lib/theme-chalk/index.css'
import {ElForm, ElButton, ElFormItem, ElInput, ElMessage} from 'element-plus'

export default (app) => {
  app.use(ElForm)
  app.use(ElButton)
  app.use(ElFormItem)
  app.use(ElInput)
  app.use(ElMessage)
}
