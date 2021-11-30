import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from '@/router'
import copyText from "@meforma/vue-copy-to-clipboard";

const app = createApp(App);

app.use(VueSweetalert2);
app.use(router)
app.use(copyText)

app.mount('#app')
