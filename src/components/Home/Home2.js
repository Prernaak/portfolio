import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/home2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Here's a   <span className="purple"> Quick Rundown </span> of who I am!
            </h1>
            <p className="home-about-body">
            I am an Ambitious individual with good knowledge of
            <b className="purple"> Web development and Data Science  </b>  Skilled in practical solution
 development and implementation.
              <br />
              <br />Supports <b className="purple"> productive teamwork  </b>  through<b className="purple">  good planning, adaptability  </b> 
             
 and <b className="purple">communication</b>  I have potential enough towards a 
              <i>
                <b className="purple"> strong aptitude for learning new concepts and
 technologies,  </b>
              </i>
              which allows me to quickly adapt and apply them in practical scenarios
              <br />
              <br />
              <i> I am eager to
              
                <b className="purple"> continuously expand my knowledge </b>and actively engage in hands-on experience to effectively utilize new
 skills.{" "}
                {/* <b className="purple">
                  Blockchain.
                </b> */}
              </i>
              <br />
              {/* <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="abc" />
            </Tilt>
          </Col>
        </Row>
        <Row>

       
          <Col md={12} className="home-about-social">
            <h1> Let's get in touch </h1>
            <p>
            and explore exciting possibilities <span className="purple"> </span>together
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Prernaak"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Prernaak27"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prerna-kanekar-46148a271/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/prernaak._"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>


              <li className="social-icons">
        <a
          href="mailto:prernakanekar@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
