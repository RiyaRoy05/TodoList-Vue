import { createApp } from 'vue'
import App from './App.vue'

if (import.meta.env.PROD) {
  if (typeof window.__VUE_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined') {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = null;
  }
}

createApp(App).mount('#app')
