<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
      <q-toolbar-title> Quasar App </q-toolbar-title>
    </q-toolbar>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" :width="260" show-if-above bordered class="bg-grey-1">
    <q-expansion-item
      expand-separator
      icon="perm_identity"
      label="Account settings"
      caption="John Doe"
    >
      <q-list>
        <q-item v-ripple clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="bluetooth" />
          </q-item-section>

          <q-item-section>Icon as avatar</q-item-section>
        </q-item>

        <q-item v-ripple clickable>
          <q-item-section avatar>
            <q-avatar color="teal" text-color="white" icon="bluetooth" />
          </q-item-section>

          <q-item-section>Avatar-type icon</q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
    <q-expansion-item
      expand-separator
      icon="perm_identity"
      label="Account settings"
      caption="John Doe"
    >
      <q-list>
        <q-item v-ripple clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="bluetooth" />
          </q-item-section>

          <q-item-section>Icon as avatar</q-item-section>
        </q-item>

        <q-item v-ripple clickable>
          <q-item-section avatar>
            <q-avatar color="teal" text-color="white" icon="bluetooth" />
          </q-item-section>

          <q-item-section>Avatar-type icon</q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
    <q-list>
      <q-item-label header class="text-grey-8"> Essential Links </q-item-label>

      <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
    </q-list>
  </q-drawer>

  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script>
import EssentialLink from '../components/EssentialLink.vue'
const linksList = [
  {
    title: 'Homepage',
    caption: 'quasar.dev',
    icon: 'home',
    link: '/',
    target: '_self'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
    target: '_blank'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
    target: '_blank'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
    target: '_blank'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
    target: '_blank'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
    target: '_blank'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
    target: '_blank'
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    // const { lang, langOptions } = useLangSwitcher()
    return {
      // lang,
      // langOptions,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style lang="scss" scoped></style>
