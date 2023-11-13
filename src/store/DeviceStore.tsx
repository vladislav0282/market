import { makeAutoObservable } from 'mobx'

// для того чтобы реакт следил за этими переменными и при их изменении страница будет перерендориваться

export interface Type {
  id?: number
  name?: string
}

export interface Brand {
  id?: number
  name?: string
}

export interface Device {
  id?: number
  name?: string
  price?: number
  rating?: number
  img?: string
}

export type SelectedType = object

export default class DeviceStore {
  _types?: Type[]

  _brands?: Brand[]

  _devices?: Device[]

  _selectedType?: any

  _selectedBrand?: any

  _page?: number

  _totalCount?: number

  _limit?: number

  constructor() {
    this._types = []

    this._brands = []

    this._devices = []

    this._selectedType = {}
    this._selectedBrand = {}

    this._page = 1
    this._totalCount = 0
    this._limit = 3
    makeAutoObservable(this)
  }

  setType(types: Type[]) {
    this._types = types
  }

  setBrand(brands: Brand[]) {
    this._brands = brands
  }

  setDevice(devices: Device[]) {
    this._devices = devices
  }

  setPage(page: number) {
    this._page = page
  }

  setTotalCount(totalCount: number) {
    this._totalCount = totalCount
  }

  setLimit(limit: number) {
    this._limit = limit
  }

  setSelectedType(type: Type): any {
    this.setPage(1)
    this._selectedType = type
  }

  setSelectedBrand(brand: Brand): any {
    this.setPage(1)
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }

  get totalCount() {
    return this._totalCount
  }

  get page() {
    return this._page
  }

  get limit() {
    return this._limit
  }
}
