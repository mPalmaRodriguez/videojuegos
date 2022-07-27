import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Assets/img/cod.webp';
import image2 from '../Assets/img/forza.jpg';
import image3 from '../Assets/img/god.jpeg';
import image4 from '../Assets/img/minecraft.jpg';


function CarouselApp() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
            
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />

             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image4}
                    alt="four slide"
                />

               
            </Carousel.Item>

        </Carousel>
    )
}

export default CarouselApp
