import { get } from 'http'
import { $authHost, $host } from './index'
import { Brand, Device, Type } from '../store/DeviceStore'

export const createType = async (type: Type) => {
  const { data } = await $authHost.post('api/v1/type', type)
  return data
}

export const createBrand = async (brand: Brand) => {
  const { data } = await $authHost.post('api/v1/brand', brand)
  return data
}

export const createDevice = async (device: Device) => {
  const { data } = await $authHost.post('api/v1/device', device)
  return data
}

export const fetchTypes = async () => {
  const { data } = await $host.get('api/v1/type')
  return data
}

export const fetchBrands = async () => {
  const { data } = await $host.get('api/v1/brand')
  return data
}

export const fetchDevices = async (typeId: any, brandId: any, page: any, limit: 3) => {
  const { data } = await $host.get('api/v1/device', {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  })
  return data
}

export const fetchOneDevice = async (id: number) => {
  const { data } = await $host.get(`api/v1/device/${id}`)
  return data
}

// export const check = async () => {
//   const { data } = await $authHost.get('api/v1/user/auth')
//   localStorage.setItem('token', data.token)
//   return JWT(data.token)
// }
