import { createApp } from 'vue';

import { createPinia } from 'pinia';

import { IonicVue } from '@ionic/vue';

import App from './App.vue';

import { routerCreated } from './pages/router';

import './core/index';

import BaseView from './core/BaseView.vue';

const app = createApp(App).use(createPinia()).use(IonicVue).use(routerCreated);

app.component('BaseView', BaseView);

routerCreated.isReady().then(function () {
	app.mount('#app');
});
