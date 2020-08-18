import React from "react";
import PrivacyHOC from "../HOCs/PrivacyHOC";
import LoaderHoc from "../HOCs/LoaderHOC";
import { Container, Row, Col } from "react-bootstrap";
import DailyTrackerAccordion from "../components/dashboard/DailyTrackerAccordion";
import MoodAccordion from "../components/dashboard/MoodAccordion";
import JournalAccordion from "../components/dashboard/JournalAccordion";
import DailyAffirmations from "../components/dashboard/DailyAffirmations";
import TodoAccordion from "../components/list items/ToDoAccordion";

class DashboardPage extends React.Component {
  render() {
    const {
      fullName,
      journalEntries,
      todos,
      feelings,
      todaysRatings,
      todaysFeelings,
    } = this.props.userData;

    const accordStyle = {
      border: "3px solid #BDCEAE",
      boxSizing: "border-box",
      borderRadius: "5px",
      backgroundColor: "white",
    };

    const firstName = `${fullName.split(" ")[0]}`;
    const containerStyle = {
      paddingRight: "0.9375em",
      paddingLeft: "0.9375em",
      paddingTop: "5em",
      marginRight:" auto",
      marginLeft: "auto",
      textAlign: "center",
  
    }

    return (
      <>
        <DailyAffirmations
          affirmation={this.props.affirmation}
          firstName={firstName}
        />
        <Container  className="hm-wrapper" style={containerStyle}>
          <h2> Today's Dashboard</h2>

          <DailyTrackerAccordion
            accordStyle={accordStyle}
            categories={this.props.categories}
            todaysRatings={todaysRatings}
            incrementRating={this.props.incrementRating}
            decrementRating={this.props.decrementRating}
          />
          <MoodAccordion
            accordStyle={accordStyle}
            feelings={this.props.feelings}
            userFeelings={feelings}
            todaysFeelings={todaysFeelings}
            addFeeling={this.props.addFeeling}
          />
          <JournalAccordion
            accordStyle={accordStyle}
            journalEntries={journalEntries}
            addJournalEntry={this.props.addJournalEntry}
            updateJournalEntry={this.props.updateJournalEntry}
          />
          {/* <TodoAccordion todos={todos} addTodo={this.props.addToDo} updateToDo={this.props.updateToDo} /> */}
        </Container>
      </>
    );
  }
}
export default PrivacyHOC(LoaderHoc(DashboardPage));
