/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
//import { createVuetify } from 'vuetify/lib/framework.mjs'

const app = createApp(App)

/*const vuetify = createVuetify({
    lang: {
      current: 'es',
    },
  });

app.use(vuetify);*/
registerPlugins(app)

app.mount('#app')
