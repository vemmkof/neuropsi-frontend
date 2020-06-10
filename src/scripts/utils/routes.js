import { Route } from './route'

const routes = [
  new Route(false, false, 'mdi-account-circle', 'Login', '/'),
  new Route(false, false, 'mdi-information', 'About', '/about'),
  new Route('admin', true, 'mdi-information', 'ADMINtest', '/about')
]
export { routes }
