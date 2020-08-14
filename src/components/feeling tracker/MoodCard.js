import React from "react";
import { Container, Card} from "react-bootstrap";
import { ReactComponent as  Happy} from "../../assets/svgComponents/Icons/Boxsmiley.svg";
import { ReactComponent as  Unhappy} from "../../assets/svgComponents/Icons/Boxunhappy.svg";
export default function MoodCard(props) {
  // const foundFeeling = props.feelingList.find(feeling => feeling.id === props.feeling.id)
  return props.feeling.need_condition === "satisfied" ? (
   <div className="feeling_summ">
      <div className="feeling_card">
      <Happy className="happy"/>
      <Card.Title>{props.feeling.name}</Card.Title>
      <Card.Text>{props.feeling.need_condition}</Card.Text>
      </div>

   </div>
  ) : (
    <div className="feeling_summ2">
      <div className="feeling_card">
      <Unhappy className="frown"/>
      <Card.Title>{props.feeling.name}</Card.Title>
      <Card.Text>{props.feeling.need_condition}</Card.Text>
      </div>

   </div>
  );
}
