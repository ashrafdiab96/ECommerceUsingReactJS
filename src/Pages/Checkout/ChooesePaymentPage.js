import React from 'react';
import { Container } from 'react-bootstrap';
import ChoosePayMethoud from '../../Components/Checkout/ChoosePayMethoud';
import UserLayout from '../../Components/Layout/UserLayout';

const ChooesePaymentPage = () => {
    return (
        <UserLayout>
            <div>
                <Container>
                    <ChoosePayMethoud />
                </Container>
            </div>
        </UserLayout>
    );
}

export default ChooesePaymentPage;
