<template>
	<main>
		<form @submit.prevent="handleSubmit">
			<input
				type="text"
				required
				placeholder="display name"
				v-model="displayN"
			/>
			<input type="email" required placeholder="email" v-model="email" />
			<input
				type="password"
				required
				placeholder="password"
				v-model="password"
			/>
			<h4>Upload a profile image</h4>
			<input type="file" name="file" @change="Upload" accept="image/" />
			<div class="error">
				{{ error }}
			</div>
			<button>Sign Up</button>
		</form>
	</main>
</template>

<script>
import { ref } from 'vue';
import { projectAuth, storage } from '../firebase/config';
import { useRouter } from 'vue-router';
export default {
	setup() {
		// refs

		const displayN = ref('');
		const email = ref('');
		const password = ref('');
		const error = ref(null);
		const router = useRouter();
		let file = {};
		const Upload = (e) => {
			file = e.target.files[0];
		};

		const handleSubmit = () => {
			projectAuth
				.createUserWithEmailAndPassword(email.value, password.value)
				.then((auth) => {
					console.log(auth.user, displayN.value);

					auth.user
						.updateProfile({
							displayName: displayN.value,
						})
						.catch((err) => console.log(err));
					storage
						.ref('users/' + auth.user.uid + '/profile.jpg')
						.put(file)
						.then(() => {
							console.log('success');
							router.push('/login');
						})
						.catch((err) => {
							console.log(err.message);
						});
				})
				.catch((err) => {
					error.value = err.message;
				});
		};

		return { displayN, email, password, handleSubmit, error, Upload };
	},
};
</script>

<style>
button {
	font-style: normal;
	font-weight: 700;

	text-transform: uppercase;
	font-size: 0.66rem;
	border: 2px solid #3174dc;
	border-radius: 50px;
	/* padding: 0.75rem 3rem; */
	background-color: #3174dc;

	color: aliceblue;
	cursor: pointer;
	margin: 1.1rem 0.5rem;
}
button:hover {
	background: #fff;
	cursor: pointer;
	color: #3174dc;
}
a {
	color: #3174dc;
	font-weight: 700;
}

h4 {
	text-align: center;
}
</style>
