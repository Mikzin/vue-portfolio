import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';

import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';

const app = createApp(App);

app.use(store);

app.component('base-button', BaseButton).component('base-badge', BaseBadge);

app.mount('#app');
