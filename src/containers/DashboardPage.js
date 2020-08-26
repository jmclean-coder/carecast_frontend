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

    const firstName = `${fullName.split(" ")[0]}`;
 
    return (
      <>
          <div className="dsh-wrapper">
        <DailyAffirmations
          affirmation={this.props.affirmation}
          firstName={firstName}
        />

<h2 className="dsh-title" > Today's Dashboard</h2>


          <DailyTrackerAccordion
        
            categories={this.props.categories}
            todaysRatings={todaysRatings}
            incrementRating={this.props.incrementRating}
            decrementRating={this.props.decrementRating}
          />
          <MoodAccordion
        
            feelings={this.props.feelings}
            userFeelings={feelings}
            todaysFeelings={todaysFeelings}
            addFeeling={this.props.addFeeling}
          />
          <JournalAccordion
        
            journalEntries={journalEntries}
            addJournalEntry={this.props.addJournalEntry}
            updateJournalEntry={this.props.updateJournalEntry}
          />
          {/* <TodoAccordion todos={todos} addTodo={this.props.addToDo} updateToDo={this.props.updateToDo} /> */}
        </div>
      </>
    );
  }
}
export default PrivacyHOC(LoaderHoc(DashboardPage));
