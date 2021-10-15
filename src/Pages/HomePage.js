import { React, useEffect, useRef } from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
// import Particle from '../Components/Particle';
import { init } from 'ityped';

function HomePage() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60, 
            strings: ['Full Stack Software Engineer', 'Yeah!' ] })
    }, []);


    return (
        <HomePageStyled>
            <div className="particle-con">
                {/* <Particle /> */}
            </div>
            <div className="typography">
                <h1>Hello, I'm <span>De Silva</span></h1>
                &nbsp;
                <div className="itype">

                   <h2>
                       <sanp ref={textRef}></sanp>
                       </h2> 
                </div>
                <p>
                I'm a software engineer specializing in building and designing exceptional digital experience.
                 
                I learn fast, adapt quickly to changes and continuously absorb new technologies.
                {/* capabel of Buliding full stack applications with latest technologis, */}
                </p>
                <div className="icons">
                    <a href="https://" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    

    .typography{
        position: absolute;
        
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
