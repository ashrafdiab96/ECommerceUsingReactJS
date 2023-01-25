import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import slider1 from '../../assets/images/slider1.png';
import slider4 from '../../assets/images/slider4.png';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedImdex) => {
        setIndex(selectedImdex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='slider-background'>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <img className="slider-img" src={slider4} alt="First slide" />
                    <div>
                        <h3 className='slider-title'>هناك خصم كبير </h3>
                        <span className='slider-text'>خصم يصل إلى ٥٠% عند شرائك </span>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='slider-background2'>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <img className="slider-img" src={slider1} alt="Second slide" />
                    <div>
                        <h3 className='slider-title'>هناك خصم كبير </h3>
                        <span className='slider-text'>خصم يصل إلى ٥٠% عند شرائك </span>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='slider-background3'>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <img className="slider-img" src={slider4} alt="Third slide" />
                    <div>
                        <h3 className='slider-title'>هناك خصم كبير </h3>
                        <span className='slider-text'>خصم يصل إلى ٥٠% عند شرائك </span>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
