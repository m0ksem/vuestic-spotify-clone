import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

createApp(App).use(createVuestic({
  config: {
    colors: {
      variables: {
        primary: '#1DB954',
        secondary: '#a7a7a7',

        backgroundPrimary: '#121212',
        backgroundSecondary: '#101010',
        backgroundElement: '#000000',
        backgroundBorder: '#181818',

        // Custom colors
        backgroundTopGradient: '#1f1f1f'
      }
    },
    components: {
      VaButton: {
        round: true,
      },
      VaCard: {
        color: '#171717',
      }
    }
  }
})).mount('#app')
