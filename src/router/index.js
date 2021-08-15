import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Counter from "../views/Counter.vue";
import Forms from "../views/Forms.vue";
import TodoList from "../views/TodoList.vue";
import NotFound from "../views/NotFound.vue";
import Expenses from "../views/expenses/Expenses.vue";
import ExpenseList from "../views/expenses/ExpenseList.vue";
import ExpenseDetail from "../views/expenses/ExpenseDetail.vue";

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
