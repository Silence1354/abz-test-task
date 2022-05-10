<template>
  <div class="c-upload" :class="{ 'c-upload--error': error }">
    <label for="file-upload" class="c-upload__button" :class="{ 'c-upload__button--error': error }">
      Upload
    </label>
    <input
      id="file-upload"
      class="c-upload__input"
      type="file"
      accept="image/*"
      :name="name"
      @change="onInput"
    />
    <span class="c-upload__placeholder" :class="{ 'c-upload__placeholder--dark': value }">
      {{ !value ? placeholder : value.name }}
    </span>
    <div v-if="error" class="c-upload__error">
      <span class="c-upload__error-text"> {{ error }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CUpload',
  props: {
    placeholder: {
      type: String,
      default: 'Upload your photo',
    },
    name: {
      type: String,
      default: '',
    },
    value: File,
    error: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(event) {
      if (event.target.files.length !== 0) {
        this.$emit('input', event.target.files[0]);
      }
    },
  },
};
</script>
