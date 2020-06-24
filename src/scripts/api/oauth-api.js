import axios from 'axios'
import config from './config'
import queryString from 'query-string'
import Vue from 'vue'
const BASE_URL = `${config.BASE_URL}auth/oauth/`
const TOKEN_URL = `${BASE_URL}token`
const TOKEN_CHECK_URL = `${BASE_URL}check_token`
const TOKEN_LOGOUT_URL = `${BASE_URL}logout`
const bearerConfig = config.axiosConfig
const axiosConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic dnVlTmV1cm9wc2k6NmEyNmMwOTY4MzMzMjE2MWYyNjU0YTI3MWUzMjFlYTg='
  }
}

const login = (credentials) => {
  // eslint-disable-next-line @typescript-eslint/camelcase
  credentials.grant_type = 'password'
  return axios.post(
    TOKEN_URL,
    queryString.stringify(credentials),
    axiosConfig
  )
}

const checkToken = () => {
  const body = {}
  body.token = Vue.$cookies.get('access_token')
  return axios.post(
    TOKEN_CHECK_URL,
    queryString.stringify(body),
    axiosConfig
  )
}

const logoutToken = () => {
  return axios.delete(TOKEN_LOGOUT_URL, bearerConfig())
}

export { login, checkToken, logoutToken }
