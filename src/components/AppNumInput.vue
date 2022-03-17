<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'AppNumInput',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: Number,
      default: ''
    }
  }
}
</script>