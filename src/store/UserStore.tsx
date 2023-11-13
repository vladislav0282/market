import { makeAutoObservable } from 'mobx'

// для того чтобы реакт следил за этими переменными и при их изменении страница будет перерендориваться

export type IsAdminType = boolean
export type IsAuthType = boolean
export type User = object

export default class UserStore {
  _isAdmin: IsAdminType

  _isAuth: IsAuthType

  _user: User

  constructor() {
    this._isAuth = false
    this._isAdmin = false
    this._user = {}
    makeAutoObservable(this)
  }

  setIsAdmin(bool: boolean) {
    this._isAdmin = bool
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool
  }

  setUser(user: object) {
    this._user = user
  }

  get isAdmin() {
    return this._isAdmin
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }
}
