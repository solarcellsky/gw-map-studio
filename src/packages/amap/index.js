import AMap from './src/main.vue'
AMap.install = app => {
  app.component(AMap.name, 'AMap')
}

export default AMap