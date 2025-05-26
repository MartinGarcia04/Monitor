<template>
  <ion-page>
    <ion-content class="login-content">
      <div class="login-container">
        <!-- Logo/Header con más espacio superior -->
        <div class="logo-section">
          <h1 class="welcome-text">Acceso al Sistema</h1>
          <p class="subtitle">Ingresa tus credenciales para continuar</p>
        </div>

        <!-- Formulario con textos en negro -->
        <div class="form-section">
          <ion-item lines="none" class="custom-input">
            <ion-icon :icon="mailOutline" slot="start" class="input-icon"></ion-icon>
            <ion-label position="floating" class="input-label">Correo electrónico</ion-label>
            <ion-input 
              v-model="email" 
              type="email" 
              autocomplete="email"
              placeholder="ejemplo@dominio.com"
              class="input-field"
            ></ion-input>
          </ion-item>

          <ion-item lines="none" class="custom-input">
            <ion-icon :icon="lockClosedOutline" slot="start" class="input-icon"></ion-icon>
            <ion-label position="floating" class="input-label">Contraseña</ion-label>
            <ion-input 
              v-model="password" 
              type="password" 
              autocomplete="current-password"
              placeholder="Ingresa tu contraseña"
              class="input-field"
            ></ion-input>
          </ion-item>

          <ion-button 
            expand="block" 
            @click="login" 
            class="login-button"
            :disabled="!email || !password"
          >
            Ingresar al sistema
            <ion-spinner v-if="loading" name="crescent" class="spinner"></ion-spinner>
          </ion-button>
        </div>

        <!-- Mensaje de error -->
        <transition name="fade">
          <ion-text color="danger" class="error-message" v-if="errorMessage">
            <p>{{ errorMessage }}</p>
          </ion-text>
        </transition>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { 
  IonPage, IonContent, IonItem, IonLabel, 
  IonInput, IonButton, IonText, IonIcon, IonSpinner
} from '@ionic/vue';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const loading = ref(false);
const router = useRouter();

const login = async () => {
  if (!email.value || !password.value) return;
  
  loading.value = true;
  errorMessage.value = '';
  
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.replace('/tabs/tab1');
  } catch (error) {
    console.error("Error:", error.message);
    switch(error.code) {
      case 'auth/invalid-email':
        errorMessage.value = 'Por favor ingresa un correo válido';
        break;
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        errorMessage.value = 'Credenciales incorrectas';
        break;
      case 'auth/too-many-requests':
        errorMessage.value = 'Demasiados intentos fallidos';
        break;
      default:
        errorMessage.value = 'Error en el inicio de sesión';
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-content {
  --background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 30px 25px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 60px;
}

.logo-section {
  text-align: center;
  margin-bottom: 30px;
}

.welcome-text {
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 8px;
}

.subtitle {
  color: #333333;
  font-size: 14px;
  margin: 0;
}

.form-section {
  margin-bottom: 20px;
}

.custom-input {
  --background: #f8f9fa;
  --padding-start: 12px;
  --inner-padding-start: 12px;
  --inner-padding-end: 12px;
  --inner-padding-top: 14px;
  --inner-padding-bottom: 14px;
  --highlight-color-focused: #3880ff;
  border-radius: 12px;
  margin-bottom: 20px;
  min-height: 70px;
  display: flex;
  align-items: center;
}

.input-icon {
  color: #555555;
  margin-right: 10px;
  font-size: 20px;
}

ion-item.custom-input ion-label.input-label {
  font-size: 14px;
  color: #000000 !important;
  display: block;
  margin-bottom: 8px; /* Mejora separación del input */
}


ion-item.custom-input ion-input.input-field {
  font-size: 15px;
  color: #000000 !important;
  --padding-top: 6px;
  --padding-bottom: 6px;
}

::placeholder {
  color: #555555 !important;
  opacity: 0.8 !important;
}

.login-button {
  --border-radius: 12px;
  --box-shadow: none;
  height: 48px;
  font-weight: 600;
  margin-top: 15px;
  --background: #3880ff;
  --background-activated: #3171e0;
  --color: white;
}

.login-button:disabled {
  --background: #bdc3c7;
}

.spinner {
  margin-left: 8px;
}

.error-message {
  display: block;
  text-align: center;
  margin: 15px 0;
  font-size: 14px;
  color: #eb445a;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .login-container {
    padding: 20px 16px;
    margin-top: 40px;
  }

  .welcome-text {
    font-size: 20px;
  }

  .subtitle {
    font-size: 13px;
  }

  .custom-input {
    --inner-padding-top: 12px;
    --inner-padding-bottom: 12px;
    min-height: 60px;
  }

  ion-item.custom-input ion-label.input-label {
    font-size: 15px;
    margin-bottom: 10px;
  }

  ion-item.custom-input ion-input.input-field {
    font-size: 15px;
    margin-top: 0;
  }

  .login-button {
    height: 44px;
    font-size: 15px;
  }
}

</style>