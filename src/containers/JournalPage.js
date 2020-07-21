import React from "react";
import PrivacyHOC from '../HOCs/PrivacyHOC'
class JournalPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Journal Page Temp</h1>
      </div>
    );
  }
}
export default PrivacyHOC(JournalPage)