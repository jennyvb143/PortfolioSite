import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ElsHome from './images/projects/els-main.png';

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                    className='d-block w-100'
                    src={ElsHome}
                    alt='Redesign and relaunch of els.edu'
                    />
                    <Carousel.Caption>
                        <h3>Redesign and relaunch of els.edu</h3> 
                        <p>Achieved annual lead targets by increasing student applications and enrollments after site relaunch.</p>
                        <p>Visit els.edu</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='d-block w-100'
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