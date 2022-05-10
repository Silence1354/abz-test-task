<template>
  <div class="main">
    <CButton>Normal</CButton>
    <CUpload v-model="file" />
    <CInput v-model="text" />
    <CRadioList v-model="option" name="option" :options="options" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {},
  data: () => ({
    file: null,
    text: '',
    options: ['option1', 'option2', 'option3'],
    option: '',
  }),
  methods: {
    onInput(value) {
      console.log(value);
    },
  },
};
</script>
