<template>
  <h2>{{ msg }}</h2>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    props: {
      msg: String,
    },

    setup() {
      const state = reactive({ count: 0 })
      return {
        state,
      }
    },
  }
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>
