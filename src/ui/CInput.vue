<template>
  <label class="c-input" :class="{ 'c-input--error': error }">
    <span
      class="c-input__placeholder"
      :class="{
        'c-input__placeholder--focused': focused || value,
        'c-input__placeholder--error': error,
      }"
    >
      {{ placeholder }}
    </span>
    <input
      class="c-input__input"
      :type="type"
      :name="name"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
    <span
      v-if="error || helperText"
      class="c-input__helper"
      :class="{ 'c-input__helper--error': error }"
    >
      {{ error ? error : helperText }}
    </span>
  </label>
</template>

<script>
export default {
  name: 'CInput',
  props: {
    placeholder: {
      type: String,
      default: 'Enter',
    },
    value: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    helperText: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    focused: false,
  }),
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
    onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
  },
};
</script>
