<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Administración de Claves</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Claves</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid class="ion-margin">
        <!-- Encabezados de la tabla -->
        <ion-row class="header-row">
          <ion-col size="4">Clave</ion-col>
          <ion-col size="4">Estado</ion-col>
          <ion-col size="4">Usuario</ion-col>
        </ion-row>
        
        <!-- Filas de datos -->
        <ion-row 
          v-for="(item, index) in listaClaves" 
          :key="listaKeys[index] || index"
          class="data-row"
        >
          <ion-col size="4">{{ listaKeys[index] || 'N/A' }}</ion-col>
          <ion-col size="4">
            <ion-badge :color="getStatusColor(item.status)">
              {{ item.status || 'Disponible' }}
            </ion-badge>
          </ion-col>
          <ion-col size="4">{{ (item.usuario || 'No asignado').slice(0, 20) + '...' }}
</ion-col>
        </ion-row>
        
        <!-- Mensaje cuando no hay datos -->
        <ion-row v-if="listaClaves.length === 0">
          <ion-col class="ion-text-center" size="12">
            <ion-text color="medium">No hay claves registradas</ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  IonCol,
  IonGrid,
  IonRow,
  IonBadge,
  IonText
} from "@ionic/vue";
import { getDatabase, ref, onValue } from "firebase/database";
import { ref as vueRef, onMounted } from 'vue';

const listaClaves = vueRef([]);
const listaKeys = vueRef([]);

// Función para determinar el color del badge según el estado
const getStatusColor = (status) => {
  switch(status?.toLowerCase()) {
    case 'activo': return 'badge-activo';
    case 'inactivo': return 'badge-inactivo';
    case 'pendiente': return 'badge-pendiente';
    default: return 'badge-desconocido';
  }
};


onMounted(() => {
  const db = getDatabase();
  const clavesRef = ref(db, "claves/");
  
  onValue(clavesRef, (snapshot) => {
    try {
      const newKeys = [];
      const newClaves = [];
      
      snapshot.forEach((element) => {
        newKeys.push(element.key);
        newClaves.push({
          status: element.val().status || '',
          usuario: element.val().usuario || ''
        });
      });
      
      listaKeys.value = newKeys;
      listaClaves.value = newClaves;
      
      console.log("Datos actualizados:", {
        keys: newKeys,
        claves: newClaves
      });
      
    } catch (error) {
      console.error("Error al procesar datos:", error);
    }
  });
});
</script>

<style scoped>
/* Hace que el contenido de la tabla no se desborde */
ion-grid {
  overflow-x: auto;
  width: 100%;
}

/* Celdas: corta texto largo con puntos suspensivos */
ion-col {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Encabezados también cortan el texto */
.header-row ion-col {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* El badge solo ocupa el espacio necesario */
ion-badge {
  width: fit-content;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}

/* En pantallas pequeñas, evita que las columnas colapsen */
@media (max-width: 767px) {
  ion-row {
    flex-wrap: nowrap;
  }

  ion-col {
    font-size: 13px;
    padding: 8px;
  }
}

  .data-row ion-col:nth-child(2)::before {
    
    font-weight: bold;
    color: #4a5568;
  }
  .data-row ion-col:nth-child(3)::before {
    
    font-weight: bold;
    color: #4a5568;
  }

  .data-row ion-col::before {
    margin-right: 5px;
  }

/* ========== Header ========== */
ion-header ion-toolbar {
  --background: #ffffff; /* Fondo blanco */
  --color: #1a73e8; /* Texto azul */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid #e0e0e0; /* Borde sutil */
}

ion-title {
  font-weight: 600;
  font-size: 1.2rem;
}

/* ========== Fondo del contenido ========== */
ion-content {
  --background: #f8fafc; /* Fondo muy claro azulado */
}

/* ========== Tabla ========== */
ion-col {
  border: 1px solid #e2e8f0; /* Borde azul muy claro */
  padding: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  font-size: 14px;
  color: #2d3748; /* Texto azul oscuro */
  background-color: #ffffff; /* Fondo blanco para celdas */
}

/* Estilo para la primera fila (encabezados) */
ion-row:first-child ion-col {
  background-color: #ebf4ff; /* Azul muy claro */
  color: #1a56db; /* Azul más intenso */
  font-weight: 600;
  border-bottom: 2px solid #c3dafe; /* Borde azul */
}

ion-row {
  border-collapse: collapse;
}

/* Efecto hover para filas */
ion-row:hover ion-col {
  background-color: #f0f7ff; /* Azul muy claro al pasar el mouse */
}

/* ========== Badges ========== */
ion-badge {
  text-transform: capitalize;
  font-size: 13px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 12px;
  background-color: #e1effe; /* Fondo azul claro */
  color: #1a56db; /* Texto azul oscuro */
}

/* Variantes de badges para diferentes estados */
ion-badge.success {
  background-color: #e6fffa;
  color: #065f46;
}

ion-badge.warning {
  background-color: #fef3c7;
  color: #92400e;
}

ion-badge.danger {
  background-color: #fee2e2;
  color: #b91c1c;
}
</style>

