<template>
  <q-page class="text-center mt-xl">
    <div class="full-screen">404 not found!</div>
    <pre>Params - {{ params }}</pre>
    <router-link to="/" tag="a" class="text-primary">Back to home page</router-link>
  </q-page>
</template>
<script>
export default {
  props: {
    all: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const params = JSON.stringify(props.all)
    return {
      params
    }
  }
}
</script>
<route lang="yaml">
meta:
  layout: blank
</route>
