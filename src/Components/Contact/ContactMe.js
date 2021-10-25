import React from 'react'
import { useState } from 'react';
// import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
// import PrimaryButton from '../PrimaryButton';


const ContactMe = () => {


    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm();
    const [disabled, setDisabled] = useState(false);
  
    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifySuccess = () => {
      toast('Form sent!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: 'submit-feedback success',
        toastId: 'notifyToast'
      });
    };
  
    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
      // Destrcture data object
      const { name, email, subject, message } = data;
      try {
        // Disable form while processing submission
        setDisabled(true);
  
        // Define template params
        const templateParams = {
          name,
          email,
          subject,
          message
        };
  
        // Use emailjs to email contact form data
        await emailjs.send(
          //process.env.REACT_APP_SERVICE_ID,
            process.secrets.REACT_APP_SERVICE_ID,
          //process.env.REACT_APP_TEMPLATE_ID,
            process.secrets.REACT_APP_TEMPLATE_ID,
          templateParams,
          //process.env.REACT_APP_USER_ID
            process.secrets.REACT_APP_USER_ID
        );
  
        // Reset contact form fields after submission
        reset();
        // Display success toast
        toastifySuccess();
        // Re-enable form submission
        setDisabled(false);
      } catch (e) {
        console.log(e);
      }
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} >

                <div className="form-field">
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="name"  >Enter your Name*</label>
                <input
                 name="name" 
                 id="name" 
                 placeholder="Your Name..."
                 variant="outlined" 
                 {...register("name", { required: true })} />
                {errors.name && <span style={{color:'#d32f2f'}}>This field is required</span>}

                {/* {...register("name", { required: "First Name is required." })}
          error={Boolean(errors.name)}
          helperText={errors.name?.message} */}
                    </div>
                
                <div className="form-field">
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="email" >Enter your Email*</label>
                <input 
                name="email" 
                id="email" 
                placeholder="Email "
                variant="outlined" 
                {...register("email", { required: true, pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} />
                {errors.email && <span style={{color:'#d32f2f'}}>Email field is required</span>}
                </div>
                <div className="form-field">
                            <label htmlFor="subject"  >Enter your subject</label>
                            <input type="text" id="subject" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your Message*</label>
                            <textarea 
                            name="textarea" 
                            id="textarea" 
                            placeholder="Enter Your Message"
                            cols="30" rows="10"
                            {...register("textarea", { required: true })} >
                                 
                            </textarea>
                {errors.textarea && <span style={{color:'#d32f2f'}}>Message field is required</span>}
                        </div>
                {/* errors will return when field validation fails  */}
                
                
                <div className="form-field f-button">
                <input type="submit" style={{cursor:'pointer'}} />
                {/* <PrimaryButton title="Send Email" onClick="submit"/> */}
                {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
                </div>
                
                <ToastContainer />
                </form>
    )
}

export default ContactMe;

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

