import React, { useContext, useEffect } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { observer } from 'mobx-react-lite'
import { jwtDecode } from 'jwt-decode'
import { Context } from '../main'
import {
  SHOP_ROUTE,
  // COUNTER_ROUTE,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  ABOUT_ROUTE,
  SERVICE_ROUTE,
  OBJECT_ROUTE,
  BASCET_ROUTE,
} from '../utils/constants'
import logo from '../assets/logo.jpg'
import { check, checkRole } from '../http/userApi'

const NavBar = observer(() => {
  const navigate = useNavigate()

  const { user }: any = useContext(Context)

  useEffect(() => {
    // if (!(authInfo.role === 'ADMIN')) navigate(SHOP_ROUTE)
    checkRole()
      .then(() => {
        // user.setIsAuth(true)
        user.setIsAdmin(true)
      })
      .catch(() => {
        // user.setIsAuth(false)
        user.setIsAdmin(false)
      })
  }, [])

  // useEffect(() => {
  // if (!(authInfo.role === 'ADMIN')) navigate(SHOP_ROUTE)
  //   check()
  //     .then(() => {
  //       user.setIsAuth(true)
  //     })
  //     .catch(() => {
  //       user.setIsAuth(false)
  //     })
  // }, [user.setIsAdmin])

  //     .then(() => {
  //       checkRole()
  //         .then(() => {
  //           user.setIsAdmin(true)
  //           user.setIsAuth(true)
  //         })
  //         .catch(() => {
  //           user.setIsAuth(true)
  //           user.setIsAdmin(false)
  //         })
  //     })
  //     .catch(() => {
  //       user.setIsAuth(false)
  //       user.setIsAdmin(false)
  //     })
  // }, [user.setIsAdmin, user.setIsAuth])

  console.log(user)

  //   checkRole()
  //     .then(() => {
  //       user.setIsAuth(true)
  //       user.setIsAdmin(true)
  //     })
  //     .catch(() => {
  //       user.setIsAuth(false)
  //       user.setIsAdmin(false)
  //     })
  // }, [])
  // const token: any = localStorage.getItem('token')

  // const authInfo: { role: 'ADMIN' } = jwtDecode(token)

  const logOut = () => {
    localStorage.setItem('token', '')
    navigate(LOGIN_ROUTE)
    user.setUser({})
    user.setIsAuth(false)
    user.setIsAdmin(false)
  }

  const auth = () => {
    if (user.isAuth) {
      if (user.isAdmin) {
        return (
          <>
            <Nav className="ms-auto" style={{ color: 'white' }}>
              <Button
                variant="outline-light"
                onClick={() => {
                  navigate(ADMIN_ROUTE)
                }}
              >
                Админпанель
              </Button>
            </Nav>
            <Button variant="outline-light" className="ms-2" onClick={() => logOut()}>
              Выйти
            </Button>
          </>
        )
      }
      return (
        <Button variant="outline-light" className="ms-2" onClick={() => logOut()}>
          Выйти
        </Button>
      )
    }
    return (
      <Nav className="ms-auto" style={{ color: 'white' }}>
        <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>
          Авторизация
        </Button>
      </Nav>
    )
  }

  // if (!user.isAuth) {
  //   return (
  //     <Nav className="ms-auto" style={{ color: 'white' }}>
  //       <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>
  //         Авторизация
  //       </Button>
  //     </Nav>
  //   )
  // }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link
          className="d-flex"
          style={{
            background: `url(${logo}) no-repeat center center`,
            width: 60,
            height: 60,
            backgroundSize: 'cover',
            fontSize: 24,
          }}
          to={ABOUT_ROUTE}
        />
        <NavLink className="m-2" style={{ color: 'white' }} to={ABOUT_ROUTE}>
          О нас
        </NavLink>
        <NavLink className="m-2" style={{ color: 'white' }} to={SERVICE_ROUTE}>
          Наши услуги
        </NavLink>
        <NavLink className="m-2" style={{ color: 'white' }} to={OBJECT_ROUTE}>
          Наши объекты
        </NavLink>
        <NavLink className="m-2" style={{ color: 'white' }} to={SHOP_ROUTE}>
          Магазин
        </NavLink>
        <NavLink className="m-2" style={{ color: 'white' }} to={BASCET_ROUTE}>
          Корзина
        </NavLink>
        {auth()}
        {/* <NavLink style={{ color: 'white' }} to={COUNTER_ROUTE}>
          Счетчик
        </NavLink> */}

        {/* {!user.isAuth ? (
          <Nav className="ms-auto" style={{ color: 'white' }}>
            <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>
              Авторизация
            </Button>
          </Nav>
        ) : (
          <Button variant="outline-light" className="ms-2" onClick={() => logOut()}>
            Выйти
          </Button>
        )} */}
        {/* {user.isAdmin && user.isAuth ? ( */}
      </Container>
    </Navbar>
  )
})

export default NavBar
