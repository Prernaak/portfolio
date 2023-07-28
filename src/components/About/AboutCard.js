import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Greetings, everyone!, I am <span className="purple">Prerna Kanekar </span>
          a final year student pursuing BE in<span className="purple"> Computer
             Engineering </span> at Mumbai University.
            <br />  I am a passionate and creative individual with a curious mind,
              always eager to explore new things.
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Juspay.
            <br /> */}
            <br />
            {/* When not immersed in the digital world, you'll find me indulging in my passions */}
           
Aside from everything mentioned, I take pleasure in engaging in various creative activities. 
These pursuits allow me to explore my imagination and express myself in unique ways which include :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Artistic expressions
            </li>
            <li className="about-activity">
              <ImPointRight />  crafting captivating Canva designs
            </li>
            <li className="about-activity">
              <ImPointRight /> freezing moments through photography
            </li>
          </ul>

          <p style={{ color: "#c1abe3" }}>  
          {/* rgb(150, 166, 222) */}
            " You don't have to DREAM to make it BEAUTIFUL  ! "  <br/>  -Prerna{" "}
          </p>
          {/* <footer className="blockquote-footer">Prerna</footer> */}
       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
