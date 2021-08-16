import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const Counter = () => import("../views/Counter.vue");
const Forms = () => import("../views/Forms.vue");
const TodoList = () => import("../views/TodoList.vue");
const NotFound = () => import("../views/NotFound.vue");
const Expenses = () => import("../views/expenses/Expenses.vue");
const ExpenseList = () => import("../views/expenses/ExpenseList.vue");
const ExpenseDetail = () => import("../views/expenses/ExpenseDetail.vue");

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/counter",
    component: Counter,
  },
  {
    path: "/forms",
    component: Forms,
  },
  {
    path: "/todos",
    component: TodoList,
  },
  {
    path: "/expenses",
    component: Expenses,
    children: [
      {
        path: "",
        component: ExpenseList,
      },
      {
        path: ":id",
        component: ExpenseDetail,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
