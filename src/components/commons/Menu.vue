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
        @click="to(e.name)"
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
            Logout
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
    to (name) {
      const same = window.location.href.includes(name.toLowerCase())
      if (same) return
      if (name === 'Login') {
        window.location.href = '/'
      } else {
        this.$router.push({
          name
        })
      }
    },
    updateNavigationDrawer () {
      const logged = this.$cookies.get('access_token')
      const authority = this.$cookies.get('authority')
      console.log(logged)
      console.log(authority)
      if (logged) {
        this.showLogout = true
        this.routes = routes
          .filter(e => e.logged && e.authority === authority)
      } else {
        this.routes = routes
          .filter(e => !e.logged)
      }
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
