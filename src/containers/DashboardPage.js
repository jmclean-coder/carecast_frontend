import React from "react";
import PrivacyHOC from '../HOCs/PrivacyHOC'
class DashboardPage extends React.Component {
  
  
  render() {
    const {fullName, username, journalEntries, todos, feelings, userRatings} = this.props.userData

    return (
     <div>
       
       { fullName ? <h1>Hello {`${fullName}`}</h1> : <h1>Hello!</h1>}
     </div>
    );
  }
}
export default PrivacyHOC(DashboardPage)