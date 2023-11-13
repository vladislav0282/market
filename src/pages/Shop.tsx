/* eslint-disable react/function-component-definition */
import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { Context } from '../main'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi'
import Pages from '../components/Pages'
import { checkRole } from '../http/userApi'

const Shop = observer(() => {
  const { device } = useContext(Context)
  const { user } = useContext(Context)
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

  useEffect(() => {
    fetchTypes().then((data) => device.setType(data))
    fetchBrands().then((data) => device.setBrand(data))
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then((data) => {
      device.setDevice(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then((data) => {
      device.setDevice(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.selectedType, device.selectedBrand, device.page])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  )
})
export default Shop
