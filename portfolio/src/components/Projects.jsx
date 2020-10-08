import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                    className='w-50'
                    src='https://picsum.photos/800'
                    alt='First slide'
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='w-50'
                    src='https://picsum.photos/800'
                    alt='Third slide'
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
 
export default Projects;