import React from 'react'
import {Redirect} from 'react-router-dom'

export default function PrivacyHOC(WrappedComponent) {
    return (
        class PrivacyHOC extends React.Component{
            isAuthorized = () => {
                console.log(this.props)
                return this.props.loggedIn
            }
            
            render(){
                    console.log(this.isAuthorized())
                    return this.isAuthorized() ? <WrappedComponent {...this.props} /> : <Redirect to="/"/>
            }
        }
    )
}
