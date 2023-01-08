import 'element-plus/lib/theme-chalk/index.css'
import {
  ElForm, ElButton, ElFormItem, ElInput, ElMessage,ElContainer,ElHeader,ElAside,ElMain,ElMenu,ElSubmenu,ElMenuItem,ElBreadcrumb,
  ElBreadcrumbItem,ElCard,ElRow,ElCol,ElTable,ElTableColumn,ElSwitch,ElTooltip,ElPagination,ElDialog,ElMessageBox, ElTag, ElTree, ElSelect,
  ElOption
} from 'element-plus'

export default (app) => {
  app.use(ElForm)
  app.use(ElButton)
  app.use(ElFormItem)
  app.use(ElInput)
  app.use(ElMessage)
  app.use(ElContainer)
  app.use(ElHeader)
  app.use(ElAside)
  app.use(ElMain)
  app.use(ElMenu)
  app.use(ElSubmenu)
  app.use(ElMenuItem)
  app.use(ElBreadcrumb)
  app.use(ElBreadcrumbItem)
  app.use(ElCard)
  app.use(ElRow)
  app.use(ElCol)
  app.use(ElTable)
  app.use(ElTableColumn)
  app.use(ElSwitch)
  app.use(ElTooltip)
  app.use(ElPagination)
  app.use(ElDialog)
  app.use(ElMessageBox)
  app.use(ElTag)
  app.use(ElTree)
  app.use(ElSelect)
  app.use(ElOption)
}
