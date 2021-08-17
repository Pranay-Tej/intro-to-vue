import axios from "axios";

const BASE_URL = "http://localhost:3001";

const state = {
  todoList: [],
  selectedTodo: null,
  dataFromApi: [],
};

const mutations = {
  setTodoList(state, todoList) {
    state.todoList = todoList;
  },
  setSelectedTodo(state, todo) {
    state.selectedTodo = todo;
  },
  setDataFromApi(state, dataFromApi) {
    state.dataFromApi = dataFromApi;
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
  createTodo(context, todo) {
    // TODO
  },
  updateTodo(context, payload) {
    // TODO
  },
  dependentEvent(context) {
    const dataFromApi = [1, 2, 3];
    console.log("dependentEventData", { dataFromApi });
    context.dispatch("chainEvent", dataFromApi);
  },
  chainEvent(context, payload) {
    const dataFromAnotherApi = payload.map((data) => data * 10);
    console.log("chainedEventData", { dataFromAnotherApi });
    context.commit("setDataFromApi", dataFromAnotherApi);
  },
};

export default {
  state,
  mutations,
  actions,
};
