import React from "react";
import PrivacyHOC from "../HOCs/PrivacyHOC";
import LoaderHoc from '../HOCs/LoaderHOC'
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import DailyTrackerAccordion from "../components/dashboard/DailyTrackerAccordion"
import MoodAccordion from '../components/dashboard/MoodAccordion'
import JournalAccordion from '../components/dashboard/JournalAccordion'
import DailyAffirmations from '../components/dashboard/DailyAffirmations'


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
        {fullName ? <h1 className="text-center">Hello {`${fullName.split(' ')[0]}`} </h1> : <h1 className="text-center">Hello!</h1>}
          <DailyAffirmations quoteOfDay={this.props.quoteOfDay}/>
        <Container>
        <DailyTrackerAccordion categories={this.props.categories} trackerData={userRatings} incrementRating={this.props.incrementRating} decrementRating={this.props.decrementRating}/>
        <MoodAccordion feelings={this.props.feelings} userFeelings={feelings} addFeeling={this.props.addFeeling}/>
        <JournalAccordion journalEntries={journalEntries} addJournalEntry={this.props.addJournalEntry} updateJournalEntry={this.props.updateJournalEntry}/>
        </Container>
      </div>
    );
  }
}
export default PrivacyHOC(LoaderHoc(DashboardPage));
