<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>JMUsers CRUD</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="content">
      <!-- Tu contenido aquí -->
      <v-container fluid>
        <ListaUsersView />

        <v-row>
          <v-col>
            <!-- Tu contenido aquí -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ListaUsersView from "./ListaUsersView.vue";
import MiComponent from "./MiComponent.vue";

export default {
  name: "ContenidoApp",
  components: { MiComponent, ListaUsersView },
};
</script>

<style scoped>
/* Estilos específicos del componente */
</style>
