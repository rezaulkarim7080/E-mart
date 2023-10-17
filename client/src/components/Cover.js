/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// react carosel npm

const Cover = () => {
    return (
        <div className="">


            <Carousel>
                <div>
                    <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image-1" />

                </div>
                <div>
                    <img src="https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image-1" />

                </div>
                <div >
                    <img src="https://images.pexels.com/photos/675764/pexels-photo-675764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image-1" />

                </div>
            </Carousel>
        </div>
    )
}

export default Cover