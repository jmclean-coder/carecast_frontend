import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';

// import './App.css';

function HomePage() {
  return (
    <>
    <Card className="text-center">
    <Card.Body>
      <Card.Title>Care Cast</Card.Title>
      <Card.Text>
        Give yourself the gift of care today.
      </Card.Text>
      <Link to="/signup">
      <Button variant="primary">Signup</Button>
      </Link>
    </Card.Body>
  </Card>
<br></br>
<CardDeck>
<Card>
  <div className="text-center">
<svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<rect x="0.5" y="0.5" width="85" height="85" rx="7.5" fill="#C4C4C4" stroke="black"/> </svg>
  </div>
  <Card.Body>
    <Card.Title className="text-center">Journal</Card.Title>
    <Card.Text>
      Release your inner thoughts. Write it out.
    </Card.Text>
  </Card.Body>
</Card>
<Card>
<div className="text-center">
<svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<rect x="0.5" y="0.5" width="85" height="85" rx="7.5" fill="#C4C4C4" stroke="black"/> </svg>
  </div>
  <Card.Body>
    <Card.Title className="text-center">Care Tracker</Card.Title>
    <Card.Text>
      Stay on top of your self-care by tracking your habits.
    </Card.Text>
  </Card.Body>
</Card>
<Card>
<div className="text-center">
<svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<rect x="0.5" y="0.5" width="85" height="85" rx="7.5" fill="#C4C4C4" stroke="black"/> </svg>
  </div>
  <Card.Body>
    <Card.Title className="text-center">Daily Affirmations</Card.Title>
    <Card.Text>
      Set the tone for the Start your day on a positive note
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
  <br></br>


<Card.Footer>
  <small className="text-muted">Footer</small>
</Card.Footer>

</>
  );
}

export default HomePage;
