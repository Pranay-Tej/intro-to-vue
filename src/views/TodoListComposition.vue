<template>
  <h2>TodoList Composition</h2>

  <p v-if="isLoading">Loading...</p>

  <p v-if="errorMessage">{{ errorMessage }}</p>

  <ul v-if="!isLoading && !errorMessage">
    <li v-for="todoItem in todoList" :key="todoItem.id">
      {{ todoItem.title }}
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoListComposition",
  setup() {
    // TODO: Convert options API ▶ composition API
  },
  data() {
    return {
      isLoading: false,
      errorMessage: null,
      todoList: [],
    };
  },
  methods: {
    fetchAll() {
      this.isLoading = true;
      axios
        .get(`http://localhost:3001/todos`)
        .then((res) => {
          this.isLoading = false;
          this.todoList = res.data;
        })
        .catch((error) => {
          this.isLoading = false;
          this.errorMessage = error;
          console.error(error);
        });
    },
  },
  created() {
    this.fetchAll();
  },
};
</script>

<style>
</style>
