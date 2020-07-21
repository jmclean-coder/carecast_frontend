import React from 'react';
import SignupForm from '../components/homepage/SignupForm';

export default function SignupPage(props){
    return(
        <SignupForm onLogin={props.onLogin} routerProps={props}/>
    )

}
