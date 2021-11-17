import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueLocalStorage from 'vue-localstorage'
import colors from 'vuetify/lib/util/colors';

Vue.use(VueLocalStorage)
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true //created computed members from your variable declarations
})

Vue.use(Vuetify);

import en from '../assets/i18n/en'
import de from '../assets/i18n/de'
export default new Vuetify({    
    theme: { 
      dark: Vue.localStorage.get('theme') =='dark',
      themes: {
        light: {
          primary: '#F0F0F0',
          secondary: colors.grey.darken1,
          accent: colors.pink.darken1,
          error: colors.red.accent3,
          background: '#F0F0F0',
          cards: '#F5F5F5',
          info: colors.teal.darken1,
        },
        dark: {
          primary: colors.blue.darken4,
          background: '#787878',
          cards: '#303030',
          info: colors.teal.lighten1,
        },
      },
    },
    lang: {
      locales:{
        de,
        en
      },
      current:en
    },
  
    
});
