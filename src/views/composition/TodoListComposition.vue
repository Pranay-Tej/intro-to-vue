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
import { ref } from "@vue/reactivity";
import useAxios from "../../composables/useAxios";

export default {
  name: "TodoListComposition",
  setup() {
    // data
    // const isLoading = ref(false);
    // const errorMessage = ref(null);
    // const todoList = ref([]);

    // methods
    // function fetchAll() {
    //   isLoading.value = true;
    //   axios
    //     .get(`http://localhost:3001/todos`)
    //     .then((res) => {
    //       isLoading.value = false;
    //       todoList.value = res.data;
    //     })
    //     .catch((error) => {
    //       isLoading.value = false;
    //       errorMessage.value = error;
    //       console.error(error);
    //     });
    // }

    const {
      data: todoList,
      isLoading,
      errorMessage,
      execute: fetchAll,
    } = useAxios("http://localhost:3001/todos");

    // created
    fetchAll();

    return {
      isLoading,
      errorMessage,
      todoList,
    };
  },
  // data() {
  //   return {
  //     isLoading: false,
  //     errorMessage: null,
  //     todoList: [],
  //   };
  // },
  // methods: {
  //   fetchAll() {
  //     this.isLoading = true;
  //     axios
  //       .get(`http://localhost:3001/todos`)
  //       .then((res) => {
  //         this.isLoading = false;
  //         this.todoList = res.data;
  //       })
  //       .catch((error) => {
  //         this.isLoading = false;
  //         this.errorMessage = error;
  //         console.error(error);
  //       });
  //   },
  // },
  // created() {
  //   this.fetchAll();
  // },
};
</script>

<style>
</style>
