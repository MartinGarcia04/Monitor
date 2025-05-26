<template>
  <ion-page>
    <ion-header class="custom-header">
      <ion-toolbar>
        <ion-title>Agregar Claves</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="custom-content">
      <div class="form-container">
        <ion-list lines="none">
          <ion-item class="clean-input-item">
            <ion-label position="floating" class="clean-label">Número de claves a agregar</ion-label>
            <ion-input
              v-model.number="claves"
              type="number"
              min="1"
              class="clean-input"
              inputmode="numeric"
            ></ion-input>
          </ion-item>
        </ion-list>

        <ion-button expand="block" class="custom-button" @click="agregarClaves">
          <span class="button-text">Agregar Claves</span>
          <ion-icon :icon="addCircleOutline" slot="end" class="button-icon"></ion-icon>
        </ion-button>
      </div>

      <ion-alert
        :is-open="alerta"
        :header="titulo"
        :sub-header="subtitulo"
        :message="mensaje"
        :buttons="alertButtons"
        @didDismiss="alerta = false"
        class="custom-alert"
      ></ion-alert>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAlert,
  IonIcon
} from "@ionic/vue";
import { ref } from "vue";
import { getDatabase, ref as dbRef, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import { addCircleOutline } from "ionicons/icons";

const claves = ref(1);
const titulo = ref("");
const subtitulo = ref("");
const mensaje = ref("");
const alerta = ref(false);
const alertButtons = ["Continuar"];

const agregarClaves = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    titulo.value = "Error de autenticación";
    subtitulo.value = "Usuario no autenticado";
    mensaje.value = "Debes iniciar sesión para agregar claves.";
    alerta.value = true;
    return;
  }

  const usuario = user.email || user.uid || "usuario_desconocido";
  const fecha = new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

  const db = getDatabase();
  const promises = [];
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < claves.value; i++) {
    promises.push(
      push(dbRef(db, "claves/"), {
        status: "Disponible",
        usuario,
        fechaCreacion: fecha,
      })
    );
  }

  const results = await Promise.allSettled(promises);
  results.forEach((result) => {
    result.status === "fulfilled" ? successCount++ : errorCount++;
  });

  if (errorCount > 0) {
    titulo.value = "Resultado parcial";
    subtitulo.value = "Algunas claves no se agregaron";
    mensaje.value = `Se agregaron ${successCount} claves con éxito, ${errorCount} fallaron.`;
  } else {
    titulo.value = "Claves agregadas";
    subtitulo.value = "Todas las claves agregadas con éxito";
    mensaje.value = `Se agregaron ${successCount} claves correctamente.`;
  }

  alerta.value = true;
};
</script>

<style scoped>
/* ========== Estilo Limpio para el Input ========== */
.clean-input-item {
  --background: transparent;
  --padding-start: 0;
  --inner-padding-end: 0;
  --border-width: 0;
  --inner-border-width: 0;
  --min-height: 72px;
  margin-bottom: 8px;
}

.clean-label {
  color: white; /* Azul/gris suave */
  font-weight: 500;
  font-size: 15px;
  transform-origin: left center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 4px;
}

.clean-input {
  --background: transparent;
  --padding-top: 12px;
  --padding-bottom: 8px;
  --padding-start: 0;
  border-bottom: 1.5px solid #c3dafe; /* Línea inferior azul muy suave */
  color: white; /* Azul oscuro para el texto */
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  background-image: none !important;
}

/* Efectos cuando el input está enfocado */
.clean-input.ion-focused {
  border-bottom-color: #1a73e8; /* Azul más intenso */
  border-bottom-width: 2px;
}

/* Estilo para el label cuando el input está enfocado o tiene valor */
.clean-input-item.ion-focused .clean-label,
.clean-input-item.ion-has-value .clean-label {
  color: white;
  transform: scale(0.9) translateY(-70%);
}

/* Quitamos los controles de número en navegadores modernos */
.clean-input::-webkit-outer-spin-button,
.clean-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* ========== Estilos Globales ========== */
:root {
  --ion-color-primary: #1a73e8;
  --ion-color-primary-rgb: 26, 115, 232;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255, 255, 255;
  --ion-color-primary-shade: #1565d6;
  --ion-color-primary-tint: #3181ea;
}

/* ========== Header ========== */
.custom-header ion-toolbar {
  --background: #ffffff;
  --color: #1a56db;
  --border-width: 0;
  --border-color: transparent;
  box-shadow: 0 2px 12px rgba(26, 115, 232, 0.1);
}

.custom-header ion-title {
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
}

/* ========== Contenido ========== */
.custom-content {
  --background: #f5f9ff;
  --padding-top: 16px;
  --padding-bottom: 16px;
  --padding-start: 16px;
  --padding-end: 16px;
}

/* ========== Contenedor del Formulario ========== */
.form-container {
  background: #ffffff;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(26, 115, 232, 0.08);
  border: 1px solid #e0e9ff;
  max-width: 600px;
  margin: 0 auto;
}

/* ========== Items del Formulario ========== */
.custom-item {
  --background: transparent;
  --padding-start: 0;
  --inner-padding-end: 0;
  --inner-border-width: 0;
  margin-bottom: 20px;
}

.label-spacing {
  margin-bottom: 10px;
  color: #2d3748;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.3px;
  display: block;
}

/* ========== Input ========== */
.custom-input {
  border: 1px solid #d6e4ff;
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 15px;
  color: #1a237e;
  background: #f8faff;
  transition: all 0.25s ease;
  width: 100%;
}

.custom-input:focus {
  border-color: #1a73e8;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.15);
  outline: none;
}

/* ========== Botón ========== */
.custom-button {
  --background: #1a73e8;
  --background-activated: #1557b0;
  --background-hover: #1a56db;
  --color: #ffffff;
  --border-radius: 12px;
  --padding-top: 18px;
  --padding-bottom: 18px;
  --box-shadow: 0 4px 14px rgba(26, 115, 232, 0.3);
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  margin-top: 28px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.custom-button:hover {
  --box-shadow: 0 6px 18px rgba(26, 115, 232, 0.4);
  transform: translateY(-2px);
}

.custom-button:active {
  transform: translateY(0);
}

.button-text {
  margin-right: 8px;
}

.button-icon {
  font-size: 20px;
}

/* ========== Alerta ========== */
.custom-alert {
  --backdrop-opacity: 0.6;
  --background: #ffffff;
  --border-radius: 16px;
  --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.custom-alert .alert-title {
  color: #1a56db;
  font-weight: 600;
}

.custom-alert .alert-sub-title {
  color: #4a5568;
  font-weight: 500;
}

.custom-alert .alert-message {
  color: #4a5568;
}

.custom-alert .alert-button {
  color: #1a73e8;
  font-weight: 500;
}

/* ========== Responsive ========== */
@media (min-width: 768px) {
  .form-container {
    padding: 32px;
  }
  
  .custom-header ion-title {
    font-size: 1.5rem;
  }
  
  .label-spacing {
    font-size: 16px;
  }
  
  .custom-input {
    padding: 16px 18px;
    font-size: 16px;
  }
}
</style>