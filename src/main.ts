import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { IonicVue } from '@ionic/vue';

import 'uno.css';
import './assets/main.css';

import App from './App.vue';
import { routerCreated } from './pages/router';
import BasePage from './layouts/BasePage.vue';

const app = createApp(App).use(createPinia()).use(IonicVue).use(routerCreated);

app.component('Page', BasePage);

routerCreated.isReady().then(function () {
	app.mount('#app');
});
