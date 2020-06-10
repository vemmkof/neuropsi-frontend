<template>
  <v-footer
    dark
    app
    inset
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-text class="py-2 white--text text-center">
        <v-row
          align="center"
          justify="center"
        >
          <v-btn
            text=""
            class="ma-2"
            color="accent"
            href="http://feggylab.mex.tl/"
            target="_blank"
          >
            <v-icon left="">mdi-doctor</v-icon> Dra. Feggy Ostrosky
          </v-btn>
          <v-img
            class="ma-2 link"
            src="@/assets/logoipn.png"
            max-width="60"
            @click.stop="to('https://www.ipn.mx/')"
          ></v-img>
          <span class="ma-2">
            <strong>Instituto Politécnico Nacional - Escuela Superior de Cómputo</strong>
          </span>
          <v-img
            class="ma-2 link"
            src="@/assets/logoescom.png"
            max-width="50"
            @click.stop="to('https://www.escom.ipn.mx/')"
          ></v-img>
          <v-btn
            text=""
            class="ma-2"
            color="accent"
            href="https://neuropsi.com.mx/"
            target="_blank"
          >
            <v-icon left="">mdi-alpha-n-box</v-icon> NEUROPSI
          </v-btn>

        </v-row>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  methods: {
    to (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style lang="css" scoped>
.link {
  cursor: pointer;
}
</style>
