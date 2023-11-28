<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Crear Usuario</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-form @submit.prevent="saveChanges">
          <!-- Campos para los datos del usuario -->
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.firstName" label="Nombre"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.lastName" label="Apellido"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.age" label="Edad" type="number"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              Fecha de Nacimiento

              <v-date-picker
                v-model="formattedBirthDay"
                :value="formattedBirthDay"
                label="Fecha de Nacimiento"
                @input="updateBirthDay"
              >
              </v-date-picker>
            </v-col>
          </v-row>

          <!-- Campos para los datos de la cuenta -->
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="user.username"
                label="Nombre de Usuario"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="user.email"
                label="Correo Electrónico"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.password" label="Contraseña"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                readonly
                v-model="user.createdAt"
                label="Fecha de Creación"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Botón para guardar cambios -->
          <v-btn type="submit" color="primary">Crear Usuario</v-btn>
        </v-form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        age: 0,
        birthDay: "2023-01-02",
        username: "",
        password: "",
        email: "",
        createdAt: "",
      },
      formattedBirthDay: null, // Se inicializa con la fecha actual, se actualizará al montar el componente
    };
  },
  watch: {
    "user.birthDay"(newBirthDay) {
      // Convertir la cadena a un objeto Date cuando birthDay cambia
      this.formattedBirthDay = new Date(newBirthDay);
    },
  },
  methods: {
    updateBirthDay(selectedDate) {
      // Actualizar user.birthDay cuando el usuario selecciona una fecha en el calendario
      this.user.birthDay = selectedDate.toISOString().split("T")[0];
    },

    obtenerFechaFormateada() {
      const fechaActual = new Date();
      const año = fechaActual.getFullYear();
      const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
      const día = String(fechaActual.getDate()).padStart(2, '0');
      const horas = String(fechaActual.getHours()).padStart(2, '0');
      const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
      const segundos = String(fechaActual.getSeconds()).padStart(2, '0');

      const fechaHoraFormateada = `${año}-${mes}-${día}T${horas}:${minutos}:${segundos}`;
      this.fechaHoraActual = fechaHoraFormateada;

      this.user.createdAt = fechaHoraFormateada;
    },

    saveChanges() {
      // Imprimir el objeto modificado en la consola

      console.log("Datos modificados:", this.user);

      axios
        .post(`http://localhost:8089/api/user`, this.user)
        .then((response) => {
          // Almacena los datos del usuario en userData
          console.log("creadodetalle..........", response.data);

          const confirmacion = window.confirm("Usuario craedo correctamente");

          if (confirmacion) {
            // Redirige a /users
            window.location.href = "/users";
          } else {
            // El usuario ha cancelado la alerta, puedes manejarlo de alguna manera si es necesario
          }

        })
        .catch((error) => {
          console.error("Error al obtener los datos del usuario:", error);
        });
      // Puedes enviar this.user al backend para guardar los cambios
    },
  },
  mounted() {
    // Inicializar formattedBirthDay con la fecha de user.birthDay
    this.formattedBirthDay = new Date(this.user.birthDay);
    this.obtenerFechaFormateada();
  },
};
</script>
