<template>
  <q-layout view="hHh Lpr lFf" class="column">
    <router-view />
  </q-layout>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
