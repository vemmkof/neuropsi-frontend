import Vue from 'vue'

const setToken = (data) => {
  Vue.$cookies.set('access_token', data.access_token)
  Vue.$cookies.set('refresh_token', data.refresh_token)
}

const setData = (data) => {
  const role = data.authorities[0]
  Vue.$cookies.set('user_name', data.user_name)
  Vue.$cookies.set('authority', role)
  return role
}

const removeData = () => {
  Vue.$cookies.keys().forEach(key => {
    Vue.$cookies.remove(key)
  })
}

export { setToken, setData, removeData }
