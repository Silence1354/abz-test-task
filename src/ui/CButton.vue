<template>
  <button class="c-button" :class="{ 'c-button--disabled': disabled }" @click="onClick">
    <span class="c-button__text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
