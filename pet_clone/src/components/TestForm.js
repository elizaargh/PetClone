import React, { useState } from "react";
import Popup from 'reactjs-popup';
import './App.css'
import SubscribeForm from "./SubscribeForm";


const TestForm = () => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });
    const [error, setError] = useState({});

    const _handleChange = (event) => {
        setUser((prevStates) => ({
            ...prevStates, [event.target.name]: event.target.value
        }))
    };

    const _handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setUser((prevStates) => ({
                ...prevStates, [event.target.name]: event.target.value
            }))
            // alert('Form submitted');
        }
    }


    const validateForm = function () {
        let error = {}
        let formIsValid = true;
  
        if (!user["first_name"]) {
            formIsValid = false;
            error["first_name_error"] = "*Please enter your username. ";
            console.log('1')
        }

        if (user["first_name"]) {
            if (!user["first_name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                error["first_name_error"] = "*Please enter alphabet characters only. ";
                console.log('2')
            }
        }

        if (user["first_name"].length < 2) {
            formIsValid = false;
            error["first_name_error"] += "*Please a name must be at least two letters.";
            console.log('3')
        }

        if (!user["last_name"]) {
            formIsValid = false;
            error["last_name_error"] = "*Please enter your last name.";
            console.log('4')
        }

        if (!user["email"]) {
            formIsValid = false;
            error["email_error"] = "*Please enter your email.";
            console.log('5')
        }
  
        if (typeof user["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(user["email"])) {
            formIsValid = false;
            error["email_error"] = "*Please enter valid email.";
            console.log('6')
            }
        }

        // setError(prevError => ({
        //     ...prevError, ...error
        // }));

        setError({...error});
        
        return formIsValid;
    }

    return (
      
        <div className="modalHome">
                <div className="header"> <h2> Subscribe to stay updated!</h2></div>
                    <div className="content">
                    {' '}
                    <p> To be the first to know about exciting promos & ways to clone your pet!</p>
                        <br />    <br />

                    <form onSubmit={_handleSubmit}> 
                        <input name="first_name" placeholder="first name" onChange={_handleChange} value={user.first_name}/>
                           

                        <input name="last_name" placeholder="last name" onChange={_handleChange} value={user.last_name}></input>
                            <div>{error.last_name_error}</div> <div>{error.first_name_error}</div>
                       
                        <input name="email" className="email" placeholder="email" onChange={_handleChange} value={user.email}></input>
                            <div>{error.email_error}</div>
        
         
          
                    <div className="subscribe"> <button className="subscribeButton">Subscribe</button></div>
                </form>
                </div>
                   
            <div className="content"> 
                <a href="">Privacy Policy</a>
            </div>
        </div>
    )};
export default TestForm;