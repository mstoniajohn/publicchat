<template>
	<main>
		<div class="welcome">
			<h2>Welcome</h2>
			<div v-if="showLogin">
				<h3>Login</h3>
				<LoginForm />
				<p>Need an account? <span @click="showLogin = false">Sign up</span></p>
			</div>
			<div v-else>
				<h3>Sign up</h3>
				<SignupForm />
				<p>
					Already have an account? <span @click="showLogin = true">Login</span>
				</p>
			</div>
			<div>
				Created by <a href="www.toniaroganti.com" target="_blank">Tonia</a>
			</div>
		</div>
	</main>
</template>

<script>
import SignupForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm.vue';

import { ref } from 'vue';
export default {
	components: { SignupForm, LoginForm },
	setup() {
		const showLogin = ref(true);

		return { showLogin };
	},
};
</script>

<style>
.welcome {
	text-align: center;
	padding: 30px;
	color: #333;
	/* height: 60vh; */
	background: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);
	border-radius: 20px;
}
.welcome span {
	font-weight: bold;
	cursor: pointer;
	text-decoration: underline;
}
.welcome button {
	margin: 20px auto;
}
.welcome form {
	width: 300px;
	margin: 20px auto;
}
.welcome label {
	display: block;
	margin: 20px 0 10px;
}
.welcome input {
	width: 100%;
	padding: 10px;
	border-radius: 20px;
	border: 1px solid #eee;
	outline: none;
	color: #999;
	margin: 10px auto;
}
</style>
