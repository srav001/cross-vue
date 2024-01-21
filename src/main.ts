import { createApp } from 'vue';

import { createPinia } from 'pinia';

import { IonicVue } from '@ionic/vue';

import App from './App.vue';

import router from './router';

import './core/index';

import BaseView from './core/BaseView.vue';

const app = createApp(App).use(createPinia()).use(IonicVue).use(router);

app.component('BaseView', BaseView);

router.isReady().then(() => {
	app.mount('#app');
});
