import React from 'react'
import {ReactComponent as LoadingPage} from '../assets/Loadingpage.svg'

export default function LoaderHOC(WrappedComponent) {
    return (
        class LoaderHOC extends React.Component{
            isLoaded = () => {
            
                return this.props.userData.fullName.length > 0
            }
            
            render(){
                    // console.log(this.isAuthorized())
                    return this.isLoaded() ? <WrappedComponent {...this.props} /> : <LoadingPage />
            }
        }
    )
}
