<template>
  <main>
    <router-view />
  </main>
</template>
<script>
  import { defineComponent } from 'vue'
  import { useRouter } from 'vue-router'
  export default defineComponent({
    setup() {
      const router = useRouter()
      return { router }
    },
  })
</script>
