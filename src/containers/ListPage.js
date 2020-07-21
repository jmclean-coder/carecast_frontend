import React from 'react';
import PrivacyHOC from '../HOCs/PrivacyHOC'
 class ListPage extends React.Component{

    render(){
        return(
            <div>
            <h1>
                List Page Temp
            </h1>
        </div>
    )
}
}
export default PrivacyHOC(ListPage)