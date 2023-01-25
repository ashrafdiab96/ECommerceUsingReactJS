import React from 'react'
import { Row } from 'react-bootstrap'
import AdminOrdersCard from './AdminOrdersCard'

const AdminOrders = () => {
    return (
        <div>
            <Row className='justify-content-start'>
                <AdminOrdersCard />
                <AdminOrdersCard />
                <AdminOrdersCard />
            </Row>
        </div>
    )
}

export default AdminOrders