import axios from 'axios'

const ENTRYPOINT = process.env.NEXT_PUBLIC_ENTRYPOINT
const APIKEY = process.env.NEXT_PUBLIC_APIKEY

export function get(endpoint, params = {}) {
  return axios
    .get(ENTRYPOINT + endpoint, {
      params: {
        ...params,
        key: APIKEY,
      },
    })
    .then((res) => res.data)
}

export function fetch(endpoint) {
  return axios.get(endpoint).then((res) => res.data)
}
