<template>
  <div class="full-screen">404 not found!</div>
  <pre>Params - {{ all }}</pre>
  <router-link to="/">Back to home page</router-link>
</template>
<script>
  export default {
    props: {
      all: {
        type: String,
        required: true,
      },
    },
  }
</script>
<route lang="yaml">
meta:
  layout: 404
</route>
