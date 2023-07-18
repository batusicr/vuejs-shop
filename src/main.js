import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import createLocalStoragePlugin from './plugins/localStoragePlugin';

import 'bootstrap/dist/css/bootstrap.css';

const localStoragePlugin = createLocalStoragePlugin('vuejs-shop');
localStoragePlugin(store);

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
