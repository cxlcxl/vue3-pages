import { createApp } from 'vue'
import Router from './routes'
import App from './App.vue'
import installElementPlus from './plugins/element'
import './assets/style.scss'

const app = createApp(App)
installElementPlus(app)

app.use(Router).mount('#app')