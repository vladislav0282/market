/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/function-component-definition */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import { LOGIN_ROUTE } from '../utils/constants'
import { Context } from '../main'
import { fetchOneDevice } from '../http/deviceApi'

const Bascet = () => {
  const [device, setDevice] = useState({ info: [] })

  console.log({ device })

  // const { id }: any = useParams()

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate(LOGIN_ROUTE)
    }
  }, [token])

  // useEffect(() => {
  //   fetchOneDevice(id).then((data) => setDevice(data))
  // }, [])
  return (
    <Container className="mt-3">
      <div className="d-flex">
        <h1>Корзина</h1>
        <p>количество товаров в корзине</p>
      </div>
      <Row>
        <Col md-10 style={{ border: '1px solid black' }}>
          <h2>Название устройства</h2>
          <div className="d-flex flex-row justify-content-between">
            <Image width={150} height={150} />
            <div className="d-flex flex-row">
              <div>+</div>
              количество
              <div>-</div>
            </div>
            <div>
              <div className="d-flex flex-row justify-content-between gap-2">
                <div>удалить</div>
                <div>избранное</div>
              </div>
              <div>цена</div>
            </div>
          </div>
        </Col>
        <Col md-2 style={{ border: '1px solid black' }}>
          <div className="d-flex flex-column gap-4">
            <div>
              <p>итого:</p>
              <div className="d-flex flex-row justify-content-between gap-2">
                <h5>количество товаров</h5>
                <h5>на 10 000 руб.</h5>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button>Перейти к оформлению</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Bascet
