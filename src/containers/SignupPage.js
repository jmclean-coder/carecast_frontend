import React from 'react';
import SignupForm from '../components/homepage/SignupForm';

export default function SignupPage(props){
    return(
        <SignupForm onSignup={props.onSignup} routerProps={props}/>
    )

}
