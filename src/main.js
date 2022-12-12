import { createApp } from 'vue';
import App from './App.vue';

import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';

const app = createApp(App);

app.component('base-button', BaseButton).component('base-badge', BaseBadge);

app.mount('#app');
