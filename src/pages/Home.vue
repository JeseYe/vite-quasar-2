<template>
  <div class="q-pa-md column flex-center">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <q-btn label="hello" rounded size="md" />

    <q-icon name="event" size="md" />
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'src/components/HelloWorld.vue'
import { contentApi } from 'src/api/cms'
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const $q = useQuasar()
    onMounted(() => {
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Login Success'
      })
      getCms()
    })
    const getCms = () => {
      contentApi.get(2).then((res) => {
        console.log(2)
      })
    }
    return {
      getCms
    }
  }
}
</script>
