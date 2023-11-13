/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { Context } from '../main'
import { DEVICE_ROUTE } from '../utils/constants'
import star from '../assets/star.png'
// import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
  const navigate = useNavigate()
  const { device } = useContext(Context)

  return (
    <Row>
      <h5 className="text-center">Товары</h5>
      {device.devices.map((divice) => (
        <Col md-3 className="mt-4" onClick={() => navigate(`${DEVICE_ROUTE}/${divice.id}`)}>
          <Card style={{ width: 150, cursor: 'pointer' }} border="light">
            <Image width={150} height={150} src={`http://localhost:5000/${divice.img}`} />
            <div className="text-black-50 mt-1 d-flex justify-content-between">
              <div>{divice.name}</div>
              <div className="d-flex align-items-center">
                <div>{divice.rating}</div>
                <Image width={18} height={18} src={star} />
              </div>
            </div>
            <div>{divice.price} руб.</div>
          </Card>
        </Col>
        // <div key={divice.id}>{divice.name}</div>
        // <DeviceItem
        // key={divice.id}
        // name={divice.name}
        // price={divice.price}
        // rating={divice.rating}
        // img={divice.img}
        // typeId={divice.typeId}
        // brandId={divice.brandId}
        // />
      ))}
    </Row>
  )
})

export default DeviceList
