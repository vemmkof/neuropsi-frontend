import Vue from 'vue'
const axiosConfig = () => {
  const accessToken = Vue.$cookies.get('access_token')
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
}

export default {
  BASE_URL: 'https://peaceful-thicket-50626.herokuapp.com/',
  axiosConfig
}
