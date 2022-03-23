import fetchApp from './components/fetch.vue';


const components = {
  'fetch-app': fetchApp,
};

for (const key in components) {
  Vue.component(key, components[key]);
}
