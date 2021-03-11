import { createApp } from 'vue';
import App from './App.vue';
// import './registerServiceWorker';
import router from './router';
// import './../node_modules/bulma/css/bulma.css';

// use(BootstrapVue);

createApp(App)
	.use(router)
	.mount('#app');
