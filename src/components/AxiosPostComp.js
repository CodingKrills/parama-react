import React from 'react'


import axios from 'axios';


export default function AxiosPostComp(props) {

    // Send a POST request
    axios({
        method: 'post',
        url: 'http://www.api.paramafashion.com/api/user_signup_email'
    });

    
        return (
            <div>
                <h2> {props.message} </h2>
            </div>
        )
    
}
