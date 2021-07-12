<template>
  <q-page class="q-pa-md text-center">
    <icon-mdi-notification-clear-all class="text-h6 text-weight-bold" />
    <icon-mdi-chevron-left class="text-primary text-h6" />

    <div>{prefix}-{collection}-{icon}</div>

    <div>
      The collection field follows
      <a href="https://iconify.design/icon-sets/">Iconify's collection IDs.</a>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
