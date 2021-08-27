# Intro to Vue

## Resources

Links
- [Slides](https://slides.com/pranay_teja/intro-to-vue)
- [Vue 3 Docs](https://v3.vuejs.org/guide/introduction.html)
- [dev-handbook notes](https://dev-handbook.vercel.app/frontend/vue/vue)
- [Replacing jQuery with Vue Article](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript)

Repos
- [Vue with plain HTML](https://github.com/Pranay-Tej/vue-plain-html)
- [Vue Forms](https://github.com/Pranay-Tej/vue-forms)

Chrome Extension
- [Vue 3 Dev tools (Beta)](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)

VS Code extensions
- Essential
  - Vetur (Pine Wu)
  - Vue VSCode Snippets (sarah.drasner)
    - `vbase`
  - Prettier
- Additional
  - Indent rainbow
  - Bracker Pair Colorizer
  - Tabnine
- npm packages
  - vite
  - json-server
  - axios
  - vue-router
  - vuex
  - cypress
  - chance
  - @capacitor/cli@2.4.7
  - @capacitor/core@2.4.7

---

## Tasks

### Instructions

- Clone the repo `git clone https://github.com/Pranay-Tej/intro-to-vue.git`
- `cd intro-to-vue` and `npm i` to install dependencies
- `npm run dev` for local development server
- All tasks have corresponding git branches. `git branch -a` to view all branches
- Solution for current task will be available in next task's branch
- Checkout to `1.1` branch to get started with the first assignment

### 1. Counter

- **1.1** Counter functionality
  - [X] Increase count
  - [X] Decrease count
  - [X] Reset count
  - [X] Add dynamic class to count text
    - [X] Red when number < 0
    - [X] Blue when number >= 0

- **1.2** Forms
  - [X] Text input
  - [X] Number
  - [X] Date
  - [X] Time
  - [X] Select
  - [X] Multi Select
  - [X] Radio group
  - [X] Checkbox group
  - [X] Input bind for step size
  - [X] Dynamic form array
  - [ ] Check [vue-forms](https://github.com/Pranay-Tej/vue-forms) repo for more complex forms

- **1.3** Component Basics
  - [X] Extract forms to a component
  - [X] Extract counter to a component
  - [X] Set step size as prop
  - [X] Send current value, step as event to parent component

### 2. CRUD App

- [X] JSON Server `npm i -D json-server`
- [X] Axios `npm i axios`
- [X] Install packages `npm i`
- [X] Run API `npm run api`
- [X] fetchAll
- [X] fetchById
- [X] create
- [X] updateById
- [X] deleteById
- [X] Bonus: highlight the selected item when editing

### 3. Routing

- [X] vue-router `npm i vue-router`
- [X] Configure `router/index.js`
- [X] Use router plugin
- [X] router-view
- [X] Set Counter Route
- [X] Set default `step` prop to Counter Component
- [X] Set Forms Route
- [X] Set Todo route
- [X] Create Dynamic routes
- [X] Lazy load routes
- [X] Bonus: Add `404 NOT FOUND` route

### 4. Composition API

- [X] ref
- [ ] reactive (Read Documentation)
- [X] computed
- [X] Convert CounterComposition to Composition API
- [X] Convert TodoListComposition to TodoList
- [X] useAxios custom composable/re-usable logic
  - [X] data, isLoading status, errorMessage

### 5. Vuex

- [X] `npm i vuex@next`
- [X] configure `store/index.js`
- [X] Use store plugin
- [X] state, mutations, actions, modules
- [X] Component communication
- [X] Store Devtools
- [X] Vuex TodoList
- [X] Event Chaining

### 6. Multiple Configurations

- [X] env variables configuration
- [X] npm scripts
  - [X] multiple dev setups
  - [X] multiple prod builds

### 7. Cypress (Automated Testing)

- [X] Automate TodoList functionality testing
  - [X] Add
  - [X] Edit
  - [X] Delete

### 8. Capacitor Hybrid app

- [ ] `npm i @capacitor/core@2.4.7`
- [ ] `npm i -D @capacitor/cli@2.4.7`
- [ ] `npx cap init`
- [ ] `npx cap add android`
- [ ] Configure capacitor
  - [ ] Add android studio path
  - [ ] Add webDir path
- [ ] `npx cap copy`
- [ ] `npx cap open android`
- [ ] Check capacitor v3 documentation
