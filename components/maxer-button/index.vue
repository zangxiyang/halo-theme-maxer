<template>
<button class="btn btn-primary">
  <slot v-if="title == null"/>
  <span v-else>{{ title }}</span>
</button>
</template>

<script lang="ts" setup>

import {defineComponent} from "#imports";

defineComponent({
  name: 'MaxerButton'
})

defineProps({
  title: String,
})

</script>

<style scoped>

</style>
