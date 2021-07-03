import { Notify } from 'quasar'
import 'quasar/dist/quasar.prod.css'
import '@quasar/extras/material-icons/material-icons.css'

export const quasarConfig = {
  config: {
    brand: {
      primary: '#027BE3',
      secondary: '#26A69A',
      accent: '#9C27B0',
      dark: '#1D1D1D',
      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    },
    globalProperties: {}
    // dark: true
  },
  plugins: {
    Notify
  }
}
