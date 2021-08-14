<template>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      {{ todo.title }}
      <!-- TODO: edit/delete todo -->
      <button>✒️</button>
      <button>❌</button>
    </li>
  </ul>

  <!-- TODO: Form to create/edit todo -->
  <form @submit.prevent="saveTodo">
    <label for="title">Todo</label>
    <input type="text" name="title" id="title" v-model="todo.title" />
    <button type="submit">{{ todo?.id ? "Update" : "Create" }}</button>
    <button type="button" @click="resetTodoForm" v-if="todo?.id">Cancel</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoList",
  data() {
    return {
      todoList: [],
      todo: {
        id: "",
        title: "",
      },
    };
  },
  methods: {
    // reset
    resetTodoForm() {
      this.todo = {
        id: "",
        title: "",
      };
    },
    fetchAll() {
      // fetch(`http://localhost:3001/todos`)
      //   .then((res) => res.json())
      //   .then((data) => (this.todoList = data))
      //   .catch((error) => console.error(error));

      axios
        .get(`http://localhost:3001/todos`)
        .then((res) => (this.todoList = res.data))
        .catch((error) => console.error(error));
    },
    // fetchById
    fetchById(id) {
      console.log("edit", id);
    },
    // delete
    deleteTodo(id) {
      console.log("deleting", id);
    },
    // saveForm
    saveTodo() {
      if (this.todo?.id) {
        this.updateTodo();
      } else {
        this.createTodo();
      }
    },
    // create
    createTodo() {
      console.log("saving");
    },
    // update
    updateTodo() {
      console.log("updating", this.todo.id);
    },
  },
  created() {
    this.fetchAll();
  },
};
</script>

<style>
input,
select {
  margin-bottom: 0.5em;
}
</style>
