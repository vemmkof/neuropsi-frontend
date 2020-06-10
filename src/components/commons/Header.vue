<template>
  <v-app-bar
    app
    clipped-left
    color="primary"
    dark
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <span>Aplicación web para la automatización de pruebas <strong>N E U R O P S I</strong></span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import commons from '@/scripts/store/commons'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapFields([...Object.keys(commons)])
  }
}
</script>

<style lang="scss" scoped></style>
