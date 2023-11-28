<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Editar Usuario</v-toolbar-title>
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
              <v-text-field v-model="user.first_name" label="Nombre"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="user.last_name" label="Apellido"></v-text-field>
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
          <v-btn type="submit" color="primary">Guardar Cambios</v-btn>
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
        id: -1,
        first_name: "",
        last_name: "",
        age: 0,
        birth_day: "1990-01-01",
        username: "",
        password: "",
        email: "",
        createdAt: "",
      },
      formattedBirthDay: null, // Se inicializa con la fecha actual, se actualizará al montar el componente
      id: null,
    };
  },
  watch: {
    "user.birth_day"(newBirthDay) {
      // Convertir la cadena a un objeto Date cuando birth_day cambia
      this.formattedBirthDay = new Date(newBirthDay);
    },
  },
  methods: {
    updateBirthDay(selectedDate) {
      // Actualizar user.birth_day cuando el usuario selecciona una fecha en el calendario
      this.user.birth_day = selectedDate.toISOString().split("T")[0];
    },

    saveChanges() {
      // Imprimir el objeto modificado en la consola
      console.log("Datos modificados:", this.user);

      axios
        .put(`http://localhost:8089/api/user/` + this.id, this.user)
        .then((response) => {
          // Almacena los datos del usuario en userData
          console.log("creadodetalle..........", response.data);

          const confirmacion = window.confirm("Usuario editado correctamente");

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

    getUsers() {
      axios
        .get(`http://localhost:8089/api/useraccount/${this.id}`)
        .then((response) => {
          // Almacena los datos del usuario en userData
          this.user = response.data;
        })
        .catch((error) => {
          console.error("Error al obtener los datos del usuario:", error);
        });
    },
  },
  mounted() {
    // Inicializar formattedBirthDay con la fecha de user.birth_day
    this.formattedBirthDay = new Date(this.user.birth_day);

    this.id = this.$route.params.id;
    console.log(this.id, ":::::::::::::::::::::::::::");

    this.getUsers();
  },
};
</script>
