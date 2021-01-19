<template>
  <BaseRadio 
    v-for="option in options"
    :key="option.value"
    :label="option.label"
    :value="option.value"
  />
</template>




<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>






<style>

</style>