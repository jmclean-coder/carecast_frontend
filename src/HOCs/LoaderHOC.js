import React from 'react'
import {ReactComponent as LoadingPage} from '../assets/Loadingpage.svg'

export default function LoaderHOC(WrappedComponent) {
    return (
        class LoaderHOC extends React.Component{
            isLoaded = () => {
                return !this.props.isLoading
            
            }
            
            render(){
                    // console.log(this.props)
                    return this.isLoaded() ? <WrappedComponent {...this.props} /> : <LoadingPage />
            }
        }
    )
}
