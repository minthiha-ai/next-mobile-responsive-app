import Slider from '@/app/components/mobile/Slider';
import React from 'react';

const Banner = () => {

    const sliderItems = [
        { imageUrl: '/mobile_images/banners/banner1.png' },
        { imageUrl: '/mobile_images/banners/banner2.png' },
        { imageUrl: '/mobile_images/banners/banner3.png' },
        { imageUrl: '/mobile_images/banners/banner4.png' },
    ];

    return (
        <div className="banner-slider">
            <Slider data={sliderItems} />
        </div>
    )
}

export default Banner
