import CAMap from '@/components/cAMap/index.vue'

const components = [
  CAMap
];

const install = function (app, options) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export {
  CAMap
};

export default {
  install,
};
