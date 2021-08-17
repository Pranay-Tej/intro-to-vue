import axios from "axios";

const BASE_URL = "http://localhost:3001";

const state = {
  todoList: [],
  selectedTodo: null,
};

const mutations = {
  setTodoList(state, todoList) {
    state.todoList = todoList;
  },
  setSelectedTodo(state, todo) {
    state.selectedTodo = todo;
  },
};

const actions = {
  fetchTodoList(context) {
    axios
      .get(`${BASE_URL}/todos`)
      .then((response) => context.commit("setTodoList", response.data))
      .catch((e) => console.error(e));
  },
  fetchTodoById(context, todoId) {
    axios
      .get(`${BASE_URL}/todos/${todoId}`)
      .then((response) => context.commit("setSelectedTodo", response.data))
      .catch((e) => console.error(e));
  },
  createTodo(context, todo) {},
  updateTodo(context, payload) {},
};

export default {
  state,
  mutations,
  actions,
};
