<template>
  <label class="c-radio-button">
    <input type="radio" class="c-radio-button__input" :name="name" @input="onInput" />
    <div class="c-radio-button__fake-input" />
    <span class="c-radio-button__value"> {{ label }} </span>
  </label>
</template>

<script>
export default {
  name: 'CRadioButton',
  props: {
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    onInput() {
      this.$emit('input', this.label);
    },
  },
};
</script>
