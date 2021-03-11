<template>
	<main>
		<div class="welcome">
			<h2>Welcome to Ultra Coders Chatroom</h2>
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
				<p>
					Created by
					<a
						class="port"
						@click="redirectProfile"
						href="https://toniaroganti.com/"
						target="_blank"
						>Tonia</a
					>
				</p>
			</div>
		</div>
	</main>
</template>

<script>
import SignupForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm.vue';

import { ref } from 'vue';
// import { useRouter } from 'vue-router';
export default {
	components: { SignupForm, LoginForm },
	setup() {
		// const router = useRouter();
		const redirectProfile = () => {
			window.location.href = 'https://toniaroganti.com/';
		};
		const showLogin = ref(true);

		return { showLogin, redirectProfile };
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
