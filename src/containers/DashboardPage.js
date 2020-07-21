import React from "react";
import PrivacyHOC from '../HOCs/PrivacyHOC'
class DashboardPage extends React.Component {
  
  
    render() {
    return (
      <div>
        <h1>Dashboard Page Temp</h1>
      </div>
    );
  }
}
export default PrivacyHOC(DashboardPage)