<template>
	<form @submit.prevent="handleLogin">
		<input type="email" required placeholder="email" v-model="email" />
		<input type="password" required placeholder="password" v-model="password" />
		<div class="error">
			{{ errors }}
		</div>
		<button>Login</button>
	</form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { projectAuth } from '../firebase/config';
export default {
	setup() {
		// refs
		const email = ref('');
		const password = ref('');
		const router = useRouter();

		const errors = ref(null);

		const handleLogin = () => {
			projectAuth
				.signInWithEmailAndPassword(email.value, password.value)
				.then((userCredential) => {
					// signed in
					let user = userCredential.user;
					console.log(user);
					router.push('/chat');
				})
				.catch((err) => {
					errors.value = `An error occured. ${err.message}`;
				});
		};

		return { email, password, handleLogin, errors };
	},
};
</script>

<style>
button {
	font-style: normal;
	font-weight: 700;

	text-transform: uppercase;
	font-size: 0.66rem;
	/* border: 2px solid #a0f4f7; */
	border-radius: 50px;
	padding: 0.75rem 3rem;
	background-color: #3174dc;
	color: aliceblue;
	border-color: #3174dc;

	cursor: pointer;
	margin: 1.1rem 0.5rem;
}
/* button:hover {
	text-shadow: none;
	color: #3174dc;
	border-color: #3174dc;
	-webkit-text-fill-color: transparent;
	background-color: aliceblue;

	cursor: pointer;
} */
</style>
