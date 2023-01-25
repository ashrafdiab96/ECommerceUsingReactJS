import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import mobile from '../../assets/images/mobile.png';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const ProductGallery = () => {
    const images = [
        {
            original: `${mobile}`,
            thumbnail: `${mobile}`,
        },
        {
            original: `${mobile}`,
            thumbnail: `${mobile}`,
        },
        {
            original: `${mobile}`,
            thumbnail: `${mobile}`,
        },
    ];

    return (
        <div
            className="
                product-gallary-card d-flex justfiy-content-center align-items-center
                pt-2
            "
        >
            <ImageGallery
                items={images}
                defaultImage={mobile}
                showFullscreenButton={true}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={true}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    );
}

export default ProductGallery;
