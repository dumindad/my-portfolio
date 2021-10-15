import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/About/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/About/ServicesSection';
// import ReviewsSection from '../Components/About/ReviewsSetion';
 
function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
