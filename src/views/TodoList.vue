<template>
  <ul>
    <li
      v-for="todoItem in todoList"
      :key="todoItem.id"
      :class="todoItem.id === todo?.id ? 'selected' : ''"
    >
      {{ todoItem.title }}
      <!-- TODO: edit/delete todo -->
      <button
        @click="fetchById(todoItem.id)"
        :cy-data="`edit-${todoItem.title}`"
      >
        ✒️
      </button>
      <button
        @click="deleteById(todoItem.id)"
        :cy-data="`delete-${todoItem.title}`"
      >
        ❌
      </button>
    </li>
  </ul>

  <!-- TODO: Form to create/edit todo -->
  <form @submit.prevent="saveTodo" cy-data="todo-form">
    <label for="title">Todo</label>
    <input
      type="text"
      name="title"
      id="title"
      v-model="todo.title"
      cy-data="todo-input"
    />
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
      axios
        .get(`http://localhost:3001/todos/${id}`)
        .then((res) => (this.todo = res.data))
        .catch((error) => console.error(error));
    },
    // delete
    deleteById(id) {
      console.log("deleting", id);
      axios
        .delete(`http://localhost:3001/todos/${id}`)
        .then((response) => {
          console.log(response.data);
          // this.todo = response.data;
          this.fetchAll();
        })
        .catch((e) => console.error(e));
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
      axios
        .post(`http://localhost:3001/todos`, {
          title: this.todo.title,
        })
        .then((response) => {
          console.log(response.data);
          // this.todo = response.data;
          this.resetTodoForm();
          this.fetchAll();
        })
        .catch((e) => console.error(e));
    },
    // update
    updateTodo() {
      console.log("updating", this.todo.id);
      axios
        .put(`http://localhost:3001/todos/${this.todo.id}`, {
          title: this.todo.title,
        })
        .then((response) => {
          console.log(response.data);
          // this.todo = response.data;
          this.resetTodoForm();
          this.fetchAll();
        })
        .catch((e) => console.error(e));
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

.selected {
  background-color: hsl(0, 0%, 80%);
}
</style>
