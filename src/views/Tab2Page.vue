<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Administración de Claves</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <div v-for="(user, usuario) in usuariosAgrupados" :key="usuario">
          <ion-item>
            <ion-label>
              <h2>{{ usuario || 'Usuario no definido' }}</h2>
              <p>{{ user.claves.length }} claves</p>
            </ion-label>
            <ion-button slot="end" fill="clear" @click="toggleDropdown(usuario)">
              <ion-icon :icon="dropdownAbierto[usuario] ? chevronUpOutline : chevronDownOutline"></ion-icon>
            </ion-button>
          </ion-item>

          <div v-if="dropdownAbierto[usuario]">
            <ion-item-sliding v-for="clave in user.claves" :key="clave.id">
              <ion-item>
                <ion-label>
                  <p>ID: {{ clave.id }}</p>
                  <p>Creado: {{ formatDate(clave.timestamp) }}</p>
                </ion-label>
              </ion-item>
              <ion-item-options side="end">
                <ion-item-option color="danger" @click="confirmarEliminacion(clave.id, usuario)">
                  <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
                </ion-item-option>
              </ion-item-options>
            </ion-item-sliding>
          </div>
        </div>
      </ion-list>
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
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  IonButton,
  IonIcon,
  alertController
} from '@ionic/vue';
import { trashOutline, chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { ref as vueRef, onMounted, computed, reactive } from 'vue';

const listaClaves = vueRef([]);
const dropdownAbierto = reactive({});

// Agrupar claves por usuario
const usuariosAgrupados = computed(() => {
  const agrupados = {};
  
  listaClaves.value.forEach(clave => {
    const usuario = clave.usuario || 'Sin usuario';
    
    if (!agrupados[usuario]) {
      agrupados[usuario] = { claves: [] };
      dropdownAbierto[usuario] = false;
    }
    
    agrupados[usuario].claves.push({
      id: clave.id,
      timestamp: clave.timestamp || Date.now()
    });
  });
  
  return agrupados;
});

// Manejar dropdown
const toggleDropdown = (usuario) => {
  dropdownAbierto[usuario] = !dropdownAbierto[usuario];
};

// Formatear fecha
const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};

// Confirmar eliminación
const confirmarEliminacion = async (claveId, usuario) => {
  const alert = await alertController.create({
    header: 'Confirmar eliminación',
    message: `¿Eliminar la clave ${claveId} de ${usuario}?`,
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Eliminar',
        handler: () => eliminarClave(claveId, usuario)
      }
    ]
  });
  
  await alert.present();
};

// Eliminar clave de Firebase y actualizar lista local
const eliminarClave = (claveId ) => {
  const db = getDatabase();
  const claveRef = ref(db, `claves/${claveId}`);
  
  remove(claveRef)
    .then(() => {
      console.log(`Clave ${claveId} eliminada`);
      
      // Actualizar la lista local eliminando la clave
      listaClaves.value = listaClaves.value.filter(clave => clave.id !== claveId);
    })
    .catch(error => {
      console.error('Error al eliminar:', error);
      // Mostrar alerta de error si es necesario
    });
};

// Obtener datos iniciales
onMounted(() => {
  const db = getDatabase();
  const clavesRef = ref(db, "claves/");
  
  onValue(clavesRef, (snapshot) => {
    const nuevasClaves = [];
    snapshot.forEach((element) => {
      nuevasClaves.push({
        id: element.key,
        usuario: element.val().usuario || '',
        timestamp: element.val().timestamp || Date.now()
      });
    });
    listaClaves.value = nuevasClaves;
  });
});
</script>

<style scoped>
/* ========== Header (Mismo estilo) ========== */
ion-header ion-toolbar {
  --background: #ffffff;
  --color: #1a73e8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid #e0e0e0;
}

ion-title {
  font-weight: 600;
  font-size: 1.2rem;
}

/* ========== Fondo del contenido ========== */
ion-content {
  --background: #f8fafc;
}

/* ========== Items principales (usuarios) ========== */
ion-item {
  --background: #ffffff;
  --color: #1a237e;
  border-bottom: 1px solid #e2e8f0;
}

ion-label h2 {
  color: #1a56db; /* Azul oscuro para nombres de usuario */
}

ion-label p {
  color: #4a5568; /* Gris azulado para información secundaria */
}

/* ========== Botón de dropdown ========== */
ion-button[slot="end"] {
  --color: #1a73e8; /* Azul principal para iconos */
}

/* ========== Items desplegables (claves) ========== */
ion-item-sliding {
  background: #f8faff; /* Fondo azul muy claro para items desplegados */
}

ion-item[slot] {
  --background: #f8faff; /* Fondo azul claro */
  --color: #2d3748; /* Texto azul oscuro */
  border-left: 2px solid #c3dafe; /* Borde lateral azul */
}

/* ========== Botón de eliminar ========== */
ion-item-option[color="danger"] {
  --background: #fee2e2; /* Fondo rojo claro */
  --color: #b91c1c; /* Texto rojo oscuro */
  --background-activated: #fecaca; /* Rojo más claro al presionar */
}

/* Mantenemos todos los demás estilos sin cambios */
ion-item-sliding {
  margin-bottom: 1px;
}

ion-item-option {
  width: 70px;
}

ion-item[slot] {
  --padding-start: 16px;
  --inner-padding-end: 16px;
}
</style>