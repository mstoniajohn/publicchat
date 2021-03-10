<template>
	<router-view />
</template>
<script>
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';
import firebase from 'firebase/app';
import '../public/main.css';
export default {
	setup() {
		const router = useRouter();

		onBeforeMount(() => {
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					router.push('/chat');
				} else {
					router.push('/');
				}

				// else if (route.path == '/') {
				// 	router.replace('/chat');
				// }
			});
		});
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
