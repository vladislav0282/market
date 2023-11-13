import { jwtDecode } from 'jwt-decode'
import { $authHost, $host } from './index'

// С правами (ролью) администратора
// export const registration = async (email: string, password: string, role: string) => {
//   const { data } = await $host.post('api/v1/user/registration', { email, password, role: 'ADMIN' })
//   localStorage.setItem('token', data.token)
//   return jwtDecode(data.token)
// }

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post('api/v1/user/registration', { email, password })
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const login = async (email: string, password: string) => {
  const { data } = await $host.post('api/v1/user/login', { email, password })
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const check = async () => {
  const { data } = await $authHost.get('api/v1/user/auth')
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const checkRole = async () => {
  const { data } = await $authHost.get('api/v1/user/role')
  // localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}
