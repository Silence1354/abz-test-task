<template>
  <div class="c-radio-list">
    <template v-for="(option, index) in options">
      <CRadioButton
        v-model="localValue"
        :key="index"
        class="c-radio-list__button"
        :name="name"
        :label="option"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'CRadioList',
  props: {
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
};
</script>
