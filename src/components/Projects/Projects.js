import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import openvino from "../../Assets/Projects/openvino.webp";
import nss from "../../Assets/Projects/National-Service-Scheme.png";
import crypto from "../../Assets/Projects/crypto1.avif";
import fruit from "../../Assets/Projects/fruit.jpg";
import android from "../../Assets/Projects/adc1.jpg";
import airline from "../../Assets/Projects/airline.jpg";
import oasis from "../../Assets/Projects/oasis.jpg";
import peka from "../../Assets/Projects/peka.jpg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        My latest  <strong className="purple">Endeavors </strong>
        </h1>
        
        <p style={{ color: "white" }}>
          
<h4 >Below are some of the projects I have worked on, along with my contributions to various organizations.</h4>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fruit}
              isBlog={false}
              title="Fruit detection and classification"
              description="Developing an AI/ML fruit detection and classification app for visually impaired users. Using image
              processing and real-time audio feedback, it assists in identifying and locating fruits based on size, shape,
              and color. The app aims to improve user experience, predict fruit quality, and enable independent fruit
              selection for visually impaired individuals."
             ghLink="https://github.com/Shubs2002/Sem5_miniproj_Fruit_detection_and_classification"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

       

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airline}
              isBlog={false}
              title="Up in the Air"
              description="Creating a dashboard displaying US domestic airline flight
              performance and yearly average delay statistics. Visualizing key
              insights and trends to aid analysis and decision-making, the project
              enhances understanding of flight delays and overall airline
              operations."
             ghLink="https://github.com/Prernaak/Up-in-the-air-"
             // demoLink="https://blogs..tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Cryto-mapping"
              description="The Cryptocurrency Past Data Visualizer is a web app that presents historical data of 
              various cryptocurrencies through charts, graphs, and heatmaps. Investors can analyze trends, 
              compare multiple cryptocurrencies, and make informed investment decisions. 
              An essential tool for managing portfolios effectively."
              ghLink="https://github.com/Prernaak/Crypto-Mapping"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={openvino}
              isBlog={false}
              title="Intel openvino"
              description=" The detailed project description, outlining its objectives, scope , and potential expected outcomes will be drafted shortly ."
                //  In the realm of open-source development, I proudly contribute to Intel's OpenVINO toolkit. 
                //  As a valued member, my primary responsibility revolves around crafting operators for this innovative toolkit. 
                // These operators play a crucial role in enhancing the functionality and capabilities of OpenVINO, empowering developers with 
                //   cutting-edge tools for their projects.
             // ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peka}
              isBlog={false}
              title="Peka consultancy pvt.ltd."
              description="Contributed in building web applications using the Laravel
              framework and utilizing XAMPP for local development
              environments. Proficient in front-end development,
              contributing to creating engaging and responsive user
              interfaces to enhance the overall user experience. Created
              unit test cases to validate input fields and ensure accurate
              data handling within the application."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oasis}
              isBlog={false}
              title="Oasis Infobyte"
              description="I actively contributed to three projects: an interactive landing page,
               a skillfully designed portfolio with a seamless 
              user experience, and a practical temperature converter. These experiences honed my skills in 
              crafting engaging and functional web pages."
              ghLink="https://github.com/Prernaak/Task-1"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
            
          </Col> 
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="Android development club "
              description="As a member of the Android Development Club and part of the technical team, my role and 
              responsibilities likely revolve around contributing to the club's efforts in technical aspects."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nss}
              isBlog={false}
              title="National service scheme "
              description="An active NSS member, I thrive in both the creative and technical teams, contributing ideas and skills. 
              Actively participating in events, aiming to make a positive impact on the community."
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}


export default Projects;
