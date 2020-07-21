import React from 'react';
import LoginForm from '../components/homepage/LoginForm';


export default function LoginPage(props){
    return(
        <LoginForm onLogin={props.onLogin} routerProps={props}/>
    )

}


  
