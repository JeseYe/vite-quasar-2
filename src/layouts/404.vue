<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div>
      <p class="text-4xl">
        <carbon-warning class="inline-block" />
      </p>
    </div>
    <router-view />
    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.go(-1)">返回上一步</button>
    </div>
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
