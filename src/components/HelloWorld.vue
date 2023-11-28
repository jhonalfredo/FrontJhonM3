<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>JMUsers CRUD</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="content" :style="{margin:'10px'}">
      <v-card-title>Bienvenido al sistema de administración de usuarios</v-card-title>
      <RouterLink to="users">
        <v-btn color="primary">Ingresar</v-btn>
      </RouterLink>
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script>
