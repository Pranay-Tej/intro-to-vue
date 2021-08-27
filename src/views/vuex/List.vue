<template>
  <div>
    <ul v-if="todoList?.length > 0">
      <li v-for="todo in todoList" :key="todo.id">
        {{ todo.title }}
        <button @click="viewTodo(todo.id)">E</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    store.dispatch("fetchTodoList");

    function viewTodo(id) {
      store.dispatch("fetchTodoById", id);
    }

    return {
      todoList: computed(() => store.state.todo.todoList),
      viewTodo,
    };
  },
};
</script>

<style scoped>
div {
  margin: 0 3em;
}
</style>