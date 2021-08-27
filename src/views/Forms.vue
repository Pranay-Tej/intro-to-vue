<template>
  <!-- Forms -->
  <!-- Text input -->
  <div>
    <p>Text</p>
    <input type="text" name="textInput" id="textInput" v-model="textInput" />
    {{ textInput }}
  </div>

  <!-- Number input -->
  <div>
    <p>Number</p>
    <input
      type="number"
      name="numberInput"
      id="numberInput"
      v-model="numberInput"
    />
    {{ numberInput }}
  </div>

  <!-- Date input -->
  <div>
    <p>Date</p>
    <input type="date" name="dateInput" id="dateInput" v-model="dateInput" />
    {{ dateInput }}
  </div>

  <!-- Time input -->
  <div>
    <p>Time</p>
    <input type="time" name="timeInput" id="timeInput" v-model="timeInput" />
    {{ timeInput }}
  </div>

  <!-- Select -->
  <div>
    <p>Select</p>
    <select name="selectDropDown" id="selectDropDown" v-model="selectDropDown">
      <option value="">Select Value</option>
      <option value="🍎">🍎</option>
      <option value="🍍">🍍</option>
      <option value="🍉">🍉</option>
      <option value="🍕">🍕</option>
    </select>
    {{ selectDropDown }}
  </div>

  <!-- Multi Select -->
  <div>
    <p>Multi Select</p>
    <select
      name="multiSelectDropDown"
      id="multiSelectDropDown"
      multiple="true"
      v-model="multiSelectDropDown"
    >
      <option value="🍎">🍎</option>
      <option value="🍍">🍍</option>
      <option value="🍉">🍉</option>
      <option value="🍕">🍕</option>
    </select>
    {{ multiSelectDropDown }}
  </div>

  <!-- Radio Group -->
  <div>
    <p>Radio Group</p>
    <label for="🍎">🍎</label>
    <input type="radio" name="🍎" value="🍎" v-model="radioInput" />
    <label for="🍍">🍍</label>
    <input type="radio" name="🍍" value="🍍" v-model="radioInput" />
    <label for="🍉">🍉</label>
    <input type="radio" name="🍉" value="🍉" v-model="radioInput" />
    <label for="🍕">🍕</label>
    <input type="radio" name="🍕" value="🍕" v-model="radioInput" />
    <br />
    {{ radioInput }}
  </div>

  <!-- Checkbox Group -->
  <div>
    <p>Checkbox Group</p>
    <label for="🍎">🍎</label>
    <input type="checkbox" name="🍎" value="🍎" v-model="checkboxInput" />
    <label for="🍍">🍍</label>
    <input type="checkbox" name="🍍" value="🍍" v-model="checkboxInput" />
    <label for="🍉">🍉</label>
    <input type="checkbox" name="🍉" value="🍉" v-model="checkboxInput" />
    <label for="🍕">🍕</label>
    <input type="checkbox" name="🍕" value="🍕" v-model="checkboxInput" />
    <br />
    {{ checkboxInput }}
  </div>
  <br />
  <!-- Dynamic form array -->
  <template v-for="(email, i) in emails" :key="i">
    <div>
      <label :for="`email${i}`">Email{{ i }}</label>
      <input
        type="text"
        :name="`email${i}`"
        :id="`email${i}`"
        v-model="emails[i]"
      />
      <button @click="removeEmailField(i)" type="button">X</button>
    </div>
  </template>
  <button @click="addEmailField" type="button">Add Email</button>
  {{ emails }}
</template>

<script>
export default {
  name: "Forms",
  data() {
    return {
      textInput: "TextInputValue",
      numberInput: null,
      dateInput: null,
      timeInput: null,
      selectDropDown: "",
      multiSelectDropDown: [],
      radioInput: null,
      checkboxInput: [],

      emails: [],
    };
  },
  methods: {
    // dynamic emails
    addEmailField() {
      this.emails = this.emails.concat([""]);
    },

    removeEmailField(i) {
      this.emails = this.emails.filter((val, index) => i !== index);
    },
  },
};
</script>

<style>
input,
select {
  margin-bottom: 0.5em;
}
</style>
