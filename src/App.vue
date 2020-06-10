<template>
  <v-app id="app">
    <menu-vue />
    <header-vue></header-vue>
    <router-view></router-view>
    <footer-vue></footer-vue>
    <success-dialog-vue></success-dialog-vue>
    <fail-dialog-vue></fail-dialog-vue>
    <loader-vue></loader-vue>
  </v-app>
</template>

<script lang="ts">
import HeaderVue from './components/commons/Header.vue'
import MenuVue from './components/commons/Menu.vue'
import FooterVue from './components/commons/Footer.vue'
import LoaderVue from './components/commons/Loader.vue'
import FailDialogVue from './components/commons/FailDialog.vue'
import SuccessDialogVue from './components/commons/SuccessDialog.vue'
export default {
  name: 'App',

  components: {
    MenuVue,
    HeaderVue,
    FooterVue,
    LoaderVue,
    FailDialogVue,
    SuccessDialogVue
  },

  data: () => ({
    //
  })
}
</script>
