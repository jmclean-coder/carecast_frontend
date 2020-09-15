import React from "react";
import { Card} from "react-bootstrap";
import { ReactComponent as Happy} from "../../assets/svgComponents/Icons/Boxsmiley.svg";
import { ReactComponent as Unhappy} from "../../assets/svgComponents/Icons/Boxunhappy.svg";
export default function MoodCard(props) {


  const foundFeeling = props.feelingList.find(feeling => feeling.id === props.userFeeling.feeling_id)
  return foundFeeling.need_condition === "satisfied" ? (
   <div className="feeling_summ">
      <div className="feeling_card">
      <Happy className="happy"/>
      <Card.Title>{foundFeeling.name}</Card.Title> 
      </div>

   </div>
  ) : (
    <div className="feeling_summ2">
      <div className="feeling_card">
      <Unhappy className="frown"/>
      <Card.Title>{foundFeeling.name}</Card.Title>
      </div>
   </div>
  );
}
