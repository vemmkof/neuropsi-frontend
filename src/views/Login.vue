<template>
  <v-content>
    <v-container>
      <v-card elevation="0">
        <v-card-title>
          <v-toolbar
            flat
            color="primary"
            dark
            elevation="0"
          >
            <v-toolbar-title>Acceso</v-toolbar-title>
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <v-form
            lazy-validation
            ref="form-login"
          >
            <v-text-field
              label="Usuario (correo electrónico)"
              name="username"
              prepend-icon="mdi-account"
              type="text"
              :rules="emailRule"
            />
            <v-text-field
              label="Contraseña"
              name="password"
              prepend-icon="mdi-lock"
              :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="show = !show"
              :type="show ? 'text' : 'password'"
              :rules="passwordRule"
              counter="8"
              :counter-value="count"
            />
            <v-btn
              block
              color="primary"
              dark
              :loading="loader"
              @click.stop="login"
            >Ingresar</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import commons from '@/scripts/store/commons'
import { emailRule, passwordRule } from '@/scripts/regex'
export default {
  data () {
    return {
      emailRule,
      passwordRule,
      show: null
    }
  },
  computed: {
    ...mapFields([...Object.keys(commons)])
  },
  methods: {
    ...mapMutations(['setSuccess']),
    ...mapActions(['login']),
    count (x) {
      if (!x) return 0
      return x.length < 8 ? x.length : 8
    }
  }
}
</script>

<style lang="scss" scoped></style>
