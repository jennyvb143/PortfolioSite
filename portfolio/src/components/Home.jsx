import React from 'react';
import Image from 'react-bootstrap/Image';
import { ContentWrapper } from './style'

const Home = () => {
    return (
        <ContentWrapper>
            <Image roundedCircle src='https://picsum.photos/200' alt='Jennifer Baxter' />
            <h1>Hi. I'm Jenn Baxter. I'm a developer and designer. My favorite place to be is in front of my computer, creating and building beautiful, useful things.</h1>
            <p>My focus is front end web development, working primarily in HTML, CSS, Javascript, and Javascript frameworks. 
            These days I'm really into React, which is what I used to build this responsive site. I love to learn and I love what I do. Take a look around to learn more about me or check out some of my work.</p>
        </ContentWrapper>
    )
}
 
export default Home;