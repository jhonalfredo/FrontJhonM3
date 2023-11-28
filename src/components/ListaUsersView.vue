<template>
  <div class="text-right">
    <router-link to="/users/create">
      <v-btn
      prepend-icon="mdi-plus"
      color="primary"
      stacked
      rounded="xl"
      :style="{ margin: '5px' }"
    >
      Agregar
    </v-btn>
    </router-link>
  </div>
  <v-data-table
    v-model:expanded="expanded"
    :headers="userHeaders"
    :items="users"
    color="primary"
    item-value="id"
    show-expand
    single-expand
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Lista Usuarios</v-toolbar-title>
      </v-toolbar>
    </template>
    <template v-slot:expanded-row="{ columns, item }">
      <tr>
        <td :colspan="columns.length">
          <div class="d-flex" :style="{ margin: '10px' }">
            <student-detail-view :detalle="item" />

            <!-- Botones de acción de Vuetify -->
            <div class="d-flex">
              <router-link :to="'users/' + item.id + '/edit'">
                <v-btn
                  :style="{ margin: '5px' }"
                  border
                  color="primary"
                  class="me-2 text-none"
                  prepend-icon="mdi-pencil"
                  variant="flat"
                  @click="editUser(item)"
                  >Editar</v-btn
                >
              </router-link>
              <v-btn
                :style="{ margin: '5px' }"
                class="me-2 text-none"
                color="red"
                prepend-icon="mdi-delete"
                variant="flat"
                @click="deleteUser(item)"
                >Eliminar</v-btn
              >
            </div>
            <!-- Agrega más botones según tus necesidades -->
          </div>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
import StudentDetailView from "./StudentDetailView.vue";

export default {
  components: { StudentDetailView },
  data() {
    return {
      expanded: [],
      userHeaders: [
        {
          title: "Id Usuario",
          align: "start",
          sortable: false,
          key: "id",
        },
        { title: "Nombres", key: "first_name" },
        { title: "Apellidos", key: "last_name" },
        { title: "Edad", key: "age" },
        { title: "Fecha de Nacimiento", key: "birth_day" },
        { title: "Detalles", key: "data-table-expand" },
      ],
      users: [],
    };
  },

  methods: {
    getUsersList() {
      axios
        .get("http://localhost:8089/api/useraccount")
        .then((res) => {
          console.log(res.data);
          this.users = res.data;
        })
        .catch((e) => {
          console.error(e);
        });
    },

    editUser(user) {
      // Lógica para editar usuario
    },
    deleteUser(user) {
      // Lógica para eliminar usuario
      axios
        .delete("http://localhost:8089/api/user/"+user.id)
        .then((res) => {
          console.log(res);
          this.getUsersList();
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },

  mounted() {
    this.getUsersList();
  },
};
</script>
<!--
users: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ],

  
<script>
  export default {
    data () {
      return {
        expanded: [],
        userHeaders: [
          {
            title: 'user (100g serving)',
            align: 'start',
            sortable: false,
            key: 'name',
          },
          { title: 'Calories', key: 'calories' },
          { title: 'Fat (g)', key: 'fat' },
          { title: 'Carbs (g)', key: 'carbs' },
          { title: 'Protein (g)', key: 'protein' },
          { title: 'Iron (%)', key: 'iron' },
          { title: '', key: 'data-table-expand' },
        ],
        users: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ],
      }
    },
  }
</script>

<template>

    <h2>Usuarios</h2>

    <v-data-table :headers="headers" :items="users"
    :items-per-page-text="'Usuarios por página'"
    :pageText="'{0}-{1} de {2}'"
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.username }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.createdAt }}</td>
      </template>
    </v-data-table>

</template>

<script>
import axios from 'axios';

export default {
  name: "ListaUsersView",
  data() {
    return {
      users: [],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Username', value: 'username' },
        { text: 'Email', value: 'email' },
        { text: 'Fecha de Creación', value: 'createdAt' },
      ],
    };
  },

  methods: {
    getUsersList() {
      axios.get("http://localhost:8089/api/useraccount").then(res => {
        console.log(res.data);
        this.users = res.data;
      }).catch(e => {
        console.error(e);
      })
    }
  },

  mounted() {
    this.getUsersList();
  }
};
</script>
-->