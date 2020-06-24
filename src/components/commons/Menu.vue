<template>
  <v-navigation-drawer
    app
    clipped
    dark
    fixed
    v-model="drawer"
    class="secondary"
  >
    <v-list dense>
      <v-list-item
        v-for="(e, i) in routes"
        :key="i"
        @click="to(e.path)"
      >
        <v-list-item-action>
          <v-icon>{{ e.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ e.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="showLogout"
        @click.stop="logout"
      >
        <v-list-item-action>
          <v-icon dark>
            mdi-account-arrow-left
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            Cerrar sesión
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import commons from '@/scripts/store/commons'
import { routes } from '../../scripts/utils/routes'
import { removeData } from '../../scripts/helper/cookie-helper'
import { logoutToken } from '../../scripts/api/oauth-api'
import { roles } from '../../scripts/constants'

export default {
  data () {
    return {
      routes: routes,
      showLogout: false
    }
  },
  computed: {
    ...mapFields([...Object.keys(commons)])
  },
  methods: {
    to (path) {
      const same = path === this.$route.fullPath
      if (same) return
      if (path === '/') {
        window.location.href = '/'
      } else {
        this.$router.push({
          path
        })
      }
    },
    updateNavigationDrawer () {
      const logged = this.$cookies.get('access_token')
      const authority = this.$cookies.get('authority')
      if (logged) {
        this.showLogout = true
        this.setRoutes(authority)
      } else {
        this.routes = routes
          .filter(e => !e.logged)
      }
    },
    setRoutes (authority) {
      if (authority === roles.admin) {
        this.routes = routes
          .filter(e => e.logged &&
            ((e.authority === roles.admin) ||
              (e.authority === roles.specialist)))
      } else {
        this.routes = routes
          .filter(e => e.logged && e.authority === authority)
      }
    },
    logout () {
      logoutToken()
        .then((result) => {
          if (result.data) {
            removeData()
            window.location.href = '/'
          }
        }).catch((error) => {
          console.error(error)
        })
    }
  },
  watch: {
    '$route.path': {
      immediate: true,
      deep: true,
      handler () {
        this.updateNavigationDrawer()
      }
    }
  }

}
</script>

<style lang="scss" scoped></style>
