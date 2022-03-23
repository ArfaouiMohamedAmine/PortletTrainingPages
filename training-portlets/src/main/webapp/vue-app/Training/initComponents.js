import TrainingApp from './components/TrainingApp.vue';
import WireFrame from './components/WireFrame.vue';
import secondPortlet from './components/secondPortlet.vue';

const components = {
  'training-app': TrainingApp,
  'wireframe-app': WireFrame,
  'second-app': secondPortlet
};

for (const key in components) {
  Vue.component(key, components[key]);
}
