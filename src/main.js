import { createApp } from 'vue'
import App from './App.vue'

// import { Quasar } from 'quasar'
// import { quasarConfig } from 'src/plugins/quasar.js'

import router from './router'
import store from './store'
// createApp(App).use(Quasar, quasarConfig).use(router).use(store).mount('#app')

createApp(App).use(router).use(store).mount('#app')
