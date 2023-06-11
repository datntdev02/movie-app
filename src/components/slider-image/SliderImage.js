import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './SliderImage.scss'
import { Carousel } from 'react-responsive-carousel';
import { Trending } from '../../shared/ListOfTrending';

function SliderImage() {
    return (
        <div className='slider-container'>
            <h2>Trending Now</h2>
            <div className='slider-show'>
                <Carousel autoPlay infiniteLoop>
                    {Trending.map((trending) => (
                        <div key={trending.id}>
                            <img src={trending.img} alt='' />
                            <div className='title'>{trending.title}</div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default SliderImage