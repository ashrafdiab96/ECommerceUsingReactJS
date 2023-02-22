import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import mobile from '../../assets/images/mobile.png';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import { useParams } from 'react-router-dom';
import GetProductDetailsHook from '../../hook/products/get-product-details-hook';

const ProductGallery = () => {
    const {id} = useParams();
    const [item] = GetProductDetailsHook(id);

    let imgs = [];
    if (item.images) {
        imgs = item.images.map((img) => {
            return {
                original: img,
                thumbnail: img,
            };
        });
    } else {
        imgs = [{
            original: `${mobile}`,
            thumbnail: `${mobile}`,
        }];
    }
    const images = imgs;

    return (
        <div
            className="product-gallary-card d-flex justfiy-content-center align-items-start"
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
