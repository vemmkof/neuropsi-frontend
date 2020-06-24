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
              v-model="username"
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
              v-model="password"
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
import { mapFields } from 'vuex-map-fields'
import commons from '@/scripts/store/commons'
import { emailRule, passwordRule } from '@/scripts/regex'
import { login, checkToken } from '../scripts/api/oauth-api.js'
import { setToken, setData } from '../scripts/helper/cookie-helper.js'
import { roles } from '../scripts/constants'

export default {
  data () {
    return {
      emailRule,
      passwordRule,
      show: null,
      username: 'admin@gmail.com',
      password: 'abc123??'
    }
  },
  computed: {
    ...mapFields([...Object.keys(commons)])
  },
  methods: {
    count (x) {
      if (!x) return 0
      return x.length < 8 ? x.length : 8
    },
    login () {
      if (this.$refs['form-login'].validate()) {
        this.loader = true
        login({
          username: this.username,
          password: this.password
        }).then((result) => {
          setToken(result.data)
          return checkToken()
        }).then((result) => {
          const role = setData(result.data)
          switch (role) {
            case roles.admin:
              this.$router.push({ name: 'AdminHome' })
              break
            case roles.specialist:
              this.$router.push({ name: 'SpecialistHome' })
              break
            case roles.patient:
              this.$router.push({ name: 'PatientHome' })
              break
          }
        }).catch((error) => {
          console.error(error)
          this.errorDialog = true
          this.errorTitle = 'ERROR'
          this.errorMessage = 'Credenciales incorrectas'
        }).finally(() => {
          this.loader = false
        })
      } else {
        this.errorDialog = true
        this.errorTitle = 'AVISO'
        this.errorMessage = 'Por favor llena el formulario'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
