# Intro to Vue

## Resources

Links
- [Slides](https://slides.com/pranay_teja/intro-to-vue)
- [Vue Docs](https://v3.vuejs.org/guide/introduction.html)
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
    - `v-base`
  - Prettier
- Additional
  - Indent rainbow
  - Bracker Pair Colorizer
  - Tabnine
- npm packages
  - vite
  - axios
  - vue-router
  - vuex

---

## Tasks

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
- [ ] Set Forms Route
- [ ] Set Todo route
- [X] Create Dynamic routes
- [X] Bonus: Add `404 NOT FOUND` route