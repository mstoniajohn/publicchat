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
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
