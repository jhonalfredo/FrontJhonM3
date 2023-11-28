<!-- src/components/MyComponent.vue -->
<template>
  <div>Hola</div>
  <h2>{{ titulo }}</h2>
  <p>{{ contenido }}</p>
  <v-btn> Button </v-btn>
</template>
  
<script>
export default {
  props: ["titulo", "contenido"],
};
</script>
  