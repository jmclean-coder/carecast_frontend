import React from 'react'
import { ReactComponent as  Happy} from "../../assets/svgComponents/Icons/Boxsmiley.svg";
import { ReactComponent as  Unhappy} from "../../assets/svgComponents/Icons/Boxunhappy.svg";
import { Container, Card } from "react-bootstrap";
export default function FeelingCard(props) {
    return props.feeling.need_condition == "satisfied" ? (
        <Card>
        <Happy/>
        <Card.body>
          <Card.Title>{props.feeling.name}</Card.Title>
          <Card.Text>{props.feeling.need_condition}</Card.Text>
        </Card.body>
      </Card>)
            :
            (
      <Card>
          <Unhappy/>
          <Card.body>
            <Card.Title>{props.feeling.name}</Card.Title>
            <Card.Text>{props.feeling.need_condition}</Card.Text>
          </Card.body>
        </Card>
            )
    
   }
