/* eslint-disable react/function-component-definition */
// import React from 'react'
// import { Card, Col, Image } from 'react-bootstrap'

// import { useNavigate } from 'react-router-dom'
// import star from '../assets/star.png'
// import { DEVICE_ROUTE } from '../utils/constants'
// import { DeviceType } from '../main'

// const DeviceItem = ({ id, name, price, rating, img }: any) => {
//   // console.log({ device })

//   const navigate = useNavigate()

//   return (
//     <Col md-3 className="mt-4" onClick={() => navigate(`${DEVICE_ROUTE}/${id}`)}>
//       <Card style={{ width: 150, cursor: 'pointer' }} border="light">
//         <Image width={150} height={150} src={`http://localhost:5000/${img}`} />
//         <div className="text-black-50 mt-1 d-flex justify-content-between">
//           <div>{name}</div>
//           <div className="d-flex align-items-center">
//             <div>{rating}</div>
//             <Image width={18} height={18} src={star} />
//           </div>
//         </div>
//         <div>{price}</div>
//       </Card>
//     </Col>
//   )
// }

// export default DeviceItem
