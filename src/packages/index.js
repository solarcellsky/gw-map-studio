import AMap from './amap/index'

// 全局安装
const install = app => {
  app.use(AMap)
}
const GwMapStudio = {
  install
}

export {
  AMap
}

export default GwMapStudio