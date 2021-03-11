<template>
	<div>
		<div class="nav">
			<button @click="Logout" href="">Logout</button>
		</div>

		<main>
			<h1 class="center">Hello</h1>
			<p class="center">{{ state.username }}</p>

			<div class="view chat">
				<section class="chat-box">
					<div
						v-for="message in state.messages"
						:key="message.key"
						:class="
							message.username == state.username
								? 'message current-user'
								: 'message'
						"
					>
						<div class="message-inner">
							<div class="username">{{ message.username }}</div>
							<div class="content">{{ message.content }}</div>
							<div class="dummy"></div>
						</div>
					</div>
				</section>

				<footer class="footer">
					<form @submit.prevent="SendMesage">
						<input
							type="text"
							v-model="InputMessage"
							placeholder="Write a message..."
						/>
						<input type="submit" value="Send" />
					</form>
				</footer>
			</div>
		</main>
	</div>
</template>

<script>
import { reactive, onMounted, ref } from 'vue';
import { projectAuth, db } from '../firebase/config';
import { useRouter } from 'vue-router';

export default {
	components: {},
	setup() {
		var InputUsername = projectAuth.currentUser;
		const InputMessage = ref('');
		const router = useRouter();
		const state = reactive({
			username: '',
			messages: [],
		});
		const GoHome = () => {
			router.push('/');
		};
		console.log(InputUsername);
		if (InputUsername != null) {
			state.username = InputUsername.email.split('@')[0];
		}
		// const Logout = () => {
		// 	state.username = '';
		// };
		const Logout = () => {
			projectAuth
				.signOut()
				.then(() => {
					console.log('out');
					router.push('/');
				})
				.catch((err) => {
					console.log(err.message);
					// errorLogin.value = err.message;
				});
		};

		const SendMesage = () => {
			const messagesRef = db.ref('messages');
			if (InputMessage.value === '' || InputMessage.value === null) {
				return;
			}
			const message = {
				username: state.username,
				content: InputMessage.value,
			};
			messagesRef.push(message);
			InputMessage.value = '';
		};
		onMounted(() => {
			const messagesRef = db.ref('messages');
			messagesRef.on('value', (snapshot) => {
				const data = snapshot.val();
				let messages = []; //temp

				Object.keys(data).forEach((key) => {
					messages.push({
						id: key,
						username: data[key].username,
						content: data[key].content,
					});
				});

				state.messages = messages;
			});
		});

		return { state, InputMessage, SendMesage, Logout, GoHome };
	},
};
</script>

<style scoped>
.nav {
	background: rgba(100, 100, 100, 0.15);
	padding: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
}

.view {
	display: flex;
	justify-content: center;
	min-height: 100vh;
	border-radius: 20px;
	widows: 100%;
	background: transparent;
}
.center {
	text-align: center;
	color: #fff;
}
.chat {
	flex-direction: column;
}

.chat-box {
	border-radius: 24px 24px 0px 0px;
	background-color: #fff;
	box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
	flex: 1 1 100%;
	padding: 20px;
}
.go-home {
	position: absolute;
	top: 15px;
	left: 15px;
	background: none;
	color: #fff;
	font-size: 17px;
	margin-bottom: 10px;
	text-align: left;
}
.logout {
	position: absolute;
	top: 15px;
	right: 15px;
	appearance: none;
	border: none;
	outline: #fff;
	background: none;

	color: #fff;
	font-size: 17px;
	margin-bottom: 10px;
	text-align: right;
}
.message {
	display: flex;
	margin-bottom: 10px;
}
.current-user {
	margin-top: 30px;
	justify-content: flex-end;
	text-align: right;
}
.current-user .message-inner .content {
	color: #fff;
	font-weight: 600;
	background-color: #3174dc;
}
.current-user .message-inner {
	max-width: 75%;
}
.message-inner .username {
	color: #888;
	font-size: 15px;
	margin-bottom: 5px;
	padding-left: 10px;
	padding-right: 10px;
}
.message-inner .content {
	display: inline-block;
	padding: 10px 20px;
	background-color: lightgrey;
	border-radius: 999px;
	color: #333;
	font-size: 18px;
	line-height: 1.2em;
	text-align: left;
}
.content {
	color: #726c6c;
	background-color: cadetblue;
	font-weight: 600;
}
footer {
	position: sticky;
	bottom: 0;
	background-color: #fff;
	padding: 20px;
	box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
}
form {
	width: 100%;
	display: flex;
}
input[type='text'] {
	flex: 1 1 100%;
	appearance: none;
	border: none;
	outline: none;
	font-size: 16px !important;
	background: none;
	display: block;
	width: 100%;
	padding: 10px 15px;
	border-radius: 0px 8px 8px 0px;
	color: #333;
}
input[type='submit'] {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	display: block;
	padding: 10px 15px;
	border-radius: 10px 20px;
	background-color: #3174dc;
	color: #fff;
	font-size: 17px;
	font-weight: 700;
}
</style>
