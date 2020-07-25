import React from "react";
import BlankCalendar from '../assets/svgComponents/BlankCalendar'
import PrivacyHOC from '../HOCs/PrivacyHOC'
import Calendar from '../components/feeling tracker/Calendar'
import { Container } from "react-bootstrap";
class FeelingPage extends React.Component {
  render() {
    return (
      <Container>
        
      <div>
       <BlankCalendar ></BlankCalendar>
      </div>

      <div>
        <Calendar />
      </div>

      </Container>
    );
  }
}
export default PrivacyHOC(FeelingPage)
