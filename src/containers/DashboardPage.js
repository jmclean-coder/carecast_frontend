import React from "react";
import PrivacyHOC from "../HOCs/PrivacyHOC";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import DailyTrackerAccordion from "../components/dashboard/DailyTrackerAccordion"
import MoodAccordion from '../components/dashboard/MoodAccordion'
import JournalAccordion from '../components/dashboard/JournalAccordion'


class DashboardPage extends React.Component {
  render() {
    const {
      fullName,
      username,
      journalEntries,
      todos,
      feelings,
      userRatings,
    } = this.props.userData;

    return (
      <div>
        {fullName ? <h1>Hello {`${fullName}`}</h1> : <h1>Hello!</h1>}
        <Container>
        <DailyTrackerAccordion categories={this.props.categories} trackerData={userRatings} incrementRating={this.props.incrementRating} decrementRating={this.props.decrementRating}/>
        <MoodAccordion feelings={this.props.feelings} userFeelings={feelings} addFeeling={this.props.addFeeling}/>
      <JournalAccordion journalEntries={journalEntries} addJournalEntry={this.props.addJournalEntry}/>
        </Container>
      </div>
    );
  }
}
export default PrivacyHOC(DashboardPage);
