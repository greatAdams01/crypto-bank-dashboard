<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      class="rounded-full"
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid #fcfcff;
  width: 100%;
  height: 40px;
  padding-left: 30px;
}
</style>