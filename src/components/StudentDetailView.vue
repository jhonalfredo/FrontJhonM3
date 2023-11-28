<template>
  <v-card
    class="ml-auto"
    :style="{ margin: '10px' }"
    max-width="344"
    :variant="outlined"
  >
    <v-card-item>
      <div>
        <div class="text-overline mb-1">Cuenta</div>
        <div class="text-h6 mb-1"></div>
        <div class="text-caption">
          <v-list lines="one">
            <v-list-item
              title="Nombre de usuario"
              :subtitle="detalle.username"
            ></v-list-item>

            <v-list-item
              title="Correo"
              :subtitle="detalle.email"
            ></v-list-item>

            <v-list-item
              title="Contraseña"
              :subtitle="detalle.password"
            ></v-list-item>

            <v-list-item
              title="Creado"
              :subtitle="detalle.createdAt"
            ></v-list-item>

          </v-list>
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>

<script>
export default {
    props: {
    detalle: Object,
  },
};
</script>

