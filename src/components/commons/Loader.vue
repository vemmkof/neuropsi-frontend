<template>
  <div class="text-center">
    <v-dialog
      v-model="loader"
      width="50%"
      persistent
    >
      <v-card
        color="secondary"
        dark
      >
        <v-card-text>
          <p class="pt-2">
            <strong>
              Cargando, por favor espere.
            </strong>
          </p>
          <v-progress-linear
            color="primary"
            height="10"
            indeterminate
            class="pa-1"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import commons from '@/scripts/store/commons'
export default {
  computed: {
    ...mapFields([
      ...Object.keys(commons)
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
