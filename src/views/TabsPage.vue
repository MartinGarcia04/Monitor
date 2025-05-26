<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      
      <ion-tab-bar slot="bottom" class="custom-tab-bar">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="keyOutline" />
          <ion-label>Claves</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="personOutline" />
          <ion-label>Usuarios</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="addCircleOutline" />
          <ion-label>Agregar Claves</ion-label>
        </ion-tab-button>

        <!-- Botón de Logout -->
        <ion-tab-button @click="logout" tab="logout">
          <ion-icon aria-hidden="true" :icon="logOutOutline" />
          <ion-label>Salir</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet
} from '@ionic/vue';

import { keyOutline, addCircleOutline, logOutOutline, personOutline } from 'ionicons/icons';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    router.push('/login');
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};
</script>

<style scoped>
.custom-tab-bar {
  --background: white;
  --color: #888;
  --color-selected: #3880ff;
  --border: none;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  padding-top: 6px;
  padding-bottom: 6px;
  border-top: 1px solid #e0e0e0;
}

ion-tab-button {
  --ripple-color: #3880ff;
  font-size: 13px;
  font-weight: 500;
}

.tab-icon {
  font-size: 20px;
  margin-bottom: 2px;
  color: inherit;
}
</style>