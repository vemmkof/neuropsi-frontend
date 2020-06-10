
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
const emailRule = [
  value => !!value || 'La dirección de correo es requerida',
  value => RegExp(emailRegex).test(value) || 'Ingresa un correo válido'
]
const passwordRule = [
  value => !!value || 'La contraseña es requerida',
  value => RegExp(passwordRegex).test(value) || 'La contraseña no es válida'
]
export { emailRule, passwordRule }
