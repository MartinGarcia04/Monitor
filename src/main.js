import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3tQ-M0AqyKkGvTv5NbbIi9zCW6EhzmTg",
  authDomain: "loginfirebase-d5a28.firebaseapp.com",
  databaseURL: "https://loginfirebase-d5a28-default-rtdb.firebaseio.com",
  projectId: "loginfirebase-d5a28",
  storageBucket: "loginfirebase-d5a28.firebasestorage.app",
  messagingSenderId: "691319492884",
  appId: "1:691319492884:web:e90ceaef43c393d93df201"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(appFirebase)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
