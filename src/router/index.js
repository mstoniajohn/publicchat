import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Chat from '../views/Chat.vue';

import LoginForm from '../components/LoginForm.vue';

const routes = [
	{
		path: '/',
		name: 'Welcome',
		component: Welcome,
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginForm,
	},
	{
		path: '/chat',
		name: 'Chat',
		component: Chat,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
