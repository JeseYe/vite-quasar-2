<template>
  <q-page class="page q-pa-md flex column flex-start">
    <q-btn color="primary" label="Send Sms code" @click="sendSmsCode" />
    <q-input v-model="form.captcha" borderless label="smsCode" />
    <q-btn color="secondary" label="Login" @click="login" />

    <q-btn color="purple" label="User info" @click="getCurrentUser" />
  </q-page>
</template>

<script>
  import qs from 'qs'
  import { toRefs, reactive } from 'vue'
  import { useQuasar } from 'quasar'
  import { userApi, captchaApi } from '@/api/user'
  import { useStore } from 'vuex'
  export default {
    setup() {
      const $q = useQuasar()
      const $store = useStore()
      async function sendSmsCode() {
        const result = await captchaApi.sendCaptchaCode('18658833279')
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: '验证码已发送',
        })
        console.log(result)
      }
      async function login() {
        const result = await userApi.captchaLogin(
          qs.stringify({
            contact: '18658833279',
            authCode: state.form.captcha,
          })
        )
        // $store.dispatch('User/updateToken', result.data)
        // console.log($store.getters['User/getAccessToken'])
      }
      // async function getCurrentUser() {
      //   const result = await userApi.currentUser()
      //   let user = result.data || {}
      //   if (user) {
      //     $store.dispatch('User/updateUser', user)
      //     console.log($store.getters['User/getAccessToken'])
      //     console.log($store.getters['User/getUser'])
      //     $q.notify({
      //       type: 'positive',
      //       message: `用户 ${user.username} 已登陆`
      //     })
      //   }
      // }
      function getCurrentUser() {
        userApi.currentUser().then((res) => {
          let user = res.data
          if (user) {
            $store.dispatch('User/updateUser', user)
            console.log($store.getters['User/getAccessToken'])
            console.log($store.getters['User/getUser'])
            $q.notify({
              type: 'positive',
              message: `用户 ${user.username} 已登陆`,
            })
          }
        })
      }

      const state = reactive({ form: { captcha: '' } })
      return {
        ...toRefs(state),
        login,
        sendSmsCode,
        getCurrentUser,
      }
    },
  }
</script>

<style></style>
