import React from "react";

import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/Contact/ContactItem';
import styled from 'styled-components';

// import PrimaryButton from '../Components/PrimaryButton';
// import ContactMe from "../Components/Contact/ContactMe";
import ContactMe from "../Components/Contact/ContactMe";

export default function ContactPage() {
                
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

  




  return (
    <MainLayout>
    <Title title={'Contact'} span={'Contact'} />
    <ContactPageStyled >
    <InnerLayout className={'contact-section'}>
        <div className="left-content">
            <div className="contact-title">
                <h4>Get In Touch</h4>
            </div>
           
              {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
                <ContactMe />

        </div>
        <div className="right-content">
            <ContactItem title={'Phone'} icon={phone} cont1={'+94717644829'} cont2={'0123123123'} />
            <ContactItem title={'Email'} icon={email} cont1={'dumindad@gmail.com'}  />
            <ContactItem title={'Address'} icon={location} cont1={'27 Station Road, Nugegoda'}  />
            
        </div>
    </InnerLayout>
    </ContactPageStyled>
</MainLayout>
   
  );
}

const ContactPageStyled = styled.section`

    .submit-feedback success{
        color: green;
    }
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }

                
            }

            
        }
    }
`;
