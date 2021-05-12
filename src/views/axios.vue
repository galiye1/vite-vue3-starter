<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// eslint-disable-next-line import/no-unresolved
import axios from '@/utils/axios'

export default defineComponent({
  name: 'axios',
  setup() {
    axios
      .get('/users/XPoet')
      .then(() => {})
      .catch(() => {})
  }
})
</script>

<style scoped></style>
