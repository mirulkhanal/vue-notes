import { createApp } from 'vue';
import App from './App.vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { RiSearchLine, RiAddLine } from 'oh-vue-icons/icons';

addIcons(RiSearchLine, RiAddLine);

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.mount('#app');
