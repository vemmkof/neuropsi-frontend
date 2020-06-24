import { Route } from './route'
import { roles } from '../constants'

const routes = [
  new Route(false, false, 'mdi-account-circle', 'Iniciar sesión', '/'),
  new Route(false, false, 'mdi-information', 'Acerca de', '/about'),
  new Route(roles.admin, true, 'mdi-home', 'Inicio (Admin)', '/admin'),
  new Route(roles.specialist, true, 'mdi-home', 'Inicio (Especialista)', '/specialist'),
  new Route(roles.patient, true, 'mdi-home', 'Inicio', '/patient')
]
export { routes }
