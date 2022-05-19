import React, { useState } from "react";


const SubscribeForm = () => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });

    _handleChange = (event) => {
        setUser((prevStates) => ({
            [event.target.name]: event.target.value
        }))
    };

    _handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }
    
    return (
         <div>
             <form onSubmit={_handleSubmit}>
                 
                 <input name="first_name" type="text" min={2} placeholder="First Name" required onChange={_handleChange} />
                 <input name="last_name" type="text" placeholder="Last Name" required onChange={_handleChange} />
                 <input name="email" type="email" placeholder="Email Address" required onChange={_handleChange} />


                 <button>Subscribe</button>
             </form>

         </div>
    )

}

export default SubscribeForm;