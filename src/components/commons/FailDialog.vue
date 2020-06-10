<template>
  <v-snackbar
    v-model="errorDialog"
    :multi-line="true"
    :timeout="8000"
    :absolute="true"
    top
    right
    color="secondary"
  >
    <v-container class="pa-0 ma-0">
      <v-row class="title pa-0 ma-0">
        {{ errorTitle }}
        <v-spacer></v-spacer>
        <v-btn
          icon
          color="error"
          @click.stop="errorDialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
      <v-row class="subtitle-1 pa-0 ma-0">{{ errorMessage }}</v-row>
    </v-container>
  </v-snackbar>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import commons from '@/scripts/store/commons'
export default {
  computed: {
    ...mapFields([...Object.keys(commons)])
  }
}
</script>

<style lang="scss" scoped></style>
