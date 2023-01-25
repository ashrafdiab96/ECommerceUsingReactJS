import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Utilities/SubTitle';
import CategoryCard from '../Category/CategoryCard';
import clothe from '../../assets/images/clothe.png';
import cat2 from '../../assets/images/cat2.png';
import labtop from '../../assets/images/labtop.png';
import sale from '../../assets/images/sale.png';
import pic from '../../assets/images/pic.png';

const HomeCategory = () => {
    return (
        <Container>
            <SubTitle title='التصنيفات' btnTitle='المزيد' pathText='/categories' />
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title='أجهزة منزلية' background='#F4DBA4' img={clothe} />
                <CategoryCard title='أجهزة منزلية' background='#F4DBA4' img={cat2} />
                <CategoryCard title='أجهزة منزلية' background='#0034FF' img={labtop} />
                <CategoryCard title='أجهزة منزلية' background='#F4DBA4' img={sale} />
                <CategoryCard title='أجهزة منزلية' background='#FF6262' img={clothe} />
                <CategoryCard title='أجهزة منزلية' background='#F4DBA4' img={pic} />
            </Row>
        </Container>
    );
}

export default HomeCategory;
