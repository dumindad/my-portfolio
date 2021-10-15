import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../../styles/Layouts';
import Title from '../Title';
import ServiceCard from '../About/ServiceCard';
import design from '../../img/design.svg';
import intelligence from '../../img/intelligence.svg';
import gamedev from '../../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={'I think perfect design is like a "magnet". If a service or product is magnet to attract more and more customers, it is the role of design to act as an intermediary for users to master it. I strive every day to create a "magnet" that matches the user.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'DevOps'} 
                            paragraph={'Technology expertise using Kubernetes, AWS, Heroku, DockerTerraform & more..'}
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'eCommerce Development Solutions'} 
                        paragraph={"Shopify & WooCommerce custom designs & integration that help to grow your business prosesses."}
                       />
                    
                </div>
                        
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
