import CAMap from '@/components/CAMap/index.vue'
import CMBMap from '@/components/CMBMap/index.vue'

const components = [
  CAMap,
  CMBMap
];

const install = function (app, options) {
  components.forEach((component) => {
    console.log('component: ', component);
    app.component(component.name, component);
  });
};

export {
  CAMap,
  CMBMap
};

export default {
  install,
};
