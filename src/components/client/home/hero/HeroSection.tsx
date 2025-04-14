import { Carousel } from 'antd';
import React from 'react'

const banners: string[] = [
    "/hoitruong.jpg",
    "slide-bg.png"
];
const HeroSection: React.FC = () => {
    return (
        <div className='my-container' style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000} arrows className='w-full h-[80vh] relative'>
                {banners.map((banner, index) => (
                    <div key={index} className='w-full h-[80vh] relative'>
                        <img src={banner} className='object-cover' alt={`Banner ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default HeroSection;
