<template>
  <q-page class="p-md text-center">
    <div class="row justify-center">
      <icon-mdi-notification-clear-all class="text-h6 text-weight-bold" />
      <icon-mdi-chevron-left class="text-primary text-h6" />
      <icon-mdi-receipt class="text-primary text-h3" />
      <icon-mdi-bookmark class="text-warning text-h3" />
      <icon-mdi-stars class="text-accent text-h2" />
      <icon-mdi-beenhere class="text-dark text-h5" />
      <icon-mdi-arrow-right />
      <icon-ic-outline-favorite class="text-info text-h2" />
    </div>

    <div>{prefix}-{collection}-{icon}</div>

    <div>
      The collection field follows

      <span> https://icones.js.org/</span>
      <a href="https://iconify.design/icon-sets/" class="text-primary">Iconify's collection IDs.</a
      >, search icon from searchBar
    </div>
    <div>
      Also see<a href="https://fonts.google.com/icons?selected=Material+Icons&icon.query=sav"
        >Material icon</a
      >
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
