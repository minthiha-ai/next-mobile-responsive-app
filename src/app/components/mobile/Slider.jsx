import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({ data }) => {

    return (
        <Carousel
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={2000}
        >
            {data.map((item, index) => (
                <div key={index}>
                    <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </Carousel>
    )
}

export default Slider
