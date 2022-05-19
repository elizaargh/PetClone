import React, { useState } from "react";

const SubscribeForm = (props) => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });
    const [error, setError] = useState({
        first_name_error: 'test',
        last_name_error: 'test',
        email_error: 'test'
    });

    const _handleChange = (event) => {
        setUser((prevStates) => ({
            ...prevStates, [event.target.name]: event.target.value
        }))
    };

    const _handleSubmit = (event) => {
        event.preventDefault();
        console.log(error)
        if (validateForm()) {
            setUser((prevStates) => ({
                ...prevStates, [event.target.name]: event.target.value
            }))
            // alert('Form submitted');
        }
    }


    const validateForm = function () {
        // let errors = {}
        let formIsValid = true;
  
        if (!user["first_name"]) {
            formIsValid = false;
            setError({["first_name_error"]: "*Please enter your username."}) ;
            console.log('1')
        }

        if (user["first_name"]) {
            if (!user["first_name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                setError({["first_name_error"]: "*Please enter alphabet characters only."});
                console.log('2')
            }
        }

        if (user["first_name"].length < 2) {
            formIsValid = false;
            setError({["first_name"]: "*Please a name must be at least two letters."});
            console.log('3')
        }

        if (!user["last_name"]) {
            formIsValid = false;
            setError({["last_name_error"]: "*Please enter your last name."});
            // errors["last_name_error"] = "*Please enter your last name."
            console.log('4')
        }

        if (!user["email"]) {
            formIsValid = false;
            setError({["email_error"]: "*Please enter your email."});
            console.log('5')
        }
  
        if (typeof user["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(user["email"])) {
            formIsValid = false;
            setError({["email_error"]: "*Please enter valid email."});
            // errors["email_error"] = "*Please enter valid email."
            console.log('6')
            }
        }

        console.log(error)
        
        return formIsValid;
    }
    
    return (
        <div>
            <form onSubmit={_handleSubmit}>
                
                <input name="first_name" placeholder="First Name"
                    onChange={_handleChange} value={user.first_name} />
                <div>{error.first_name_error}</div>

                <input name="last_name" placeholder="Last Name"
                    onChange={_handleChange} value={user.last_name} />
                <div>{error.last_name_error}</div>
                
                <input name="email" placeholder="Email Address"
                    onChange={_handleChange} value={user.email} />
                <div>{error.email_error}</div>

                <button>Subscribe</button>
            </form>
        </div>
    )

}

export default SubscribeForm;