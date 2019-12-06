// eslint-disable-next-line
import http from './http'

const isDev = process.env.NODE_ENV === 'development'
// Example service
class CommonService {
  static getMenu = async () => {
    const payload = new FormData()
    payload.append('name', 'menu')
    const url = isDev ? '/menu/' : window.location
    const { data } = await http.post(url, payload)
    return data
  }
}

export default CommonService