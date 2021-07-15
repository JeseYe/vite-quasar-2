<template>
  <q-page class="q-pa-md column flex-center">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <q-btn label="hello" rounded size="md" />

    <q-icon name="event" size="md" />
    <icon-mdi-notification-clear-all class="text-h6 text-weight-bold" />
    <router-link to="/about">About</router-link>
  </q-page>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'src/components/HelloWorld.vue'
import { userApi } from 'src/api/user'
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    onMounted(() => {
      getCms()
    })
    const getCms = () => {
      userApi.currentUser().then((res) => {
        console.log(res)
      })
    }
    return {
      getCms
    }
  }
}
</script>
