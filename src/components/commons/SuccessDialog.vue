<template>
  <v-row justify="center">
    <v-dialog
      v-model="successDialog"
      persistent
      max-width="25%"
    >
      <v-card>
        <v-card-title class="headline">{{ successTitle }}</v-card-title>
        <v-card-text class="title">{{ successMessage }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click.stop="successContinue"
          >Continuar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import commons from '@/scripts/store/commons'
export default {
  computed: {
    ...mapFields([...Object.keys(commons)])
  },
  methods: {
    successContinue () {
      this.successDialog = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
