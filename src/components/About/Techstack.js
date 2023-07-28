import cpp from "../../Assets/tech-img/cpp.avif";
// import meter2 from "../../Assets/prerna1.jpeg";
// import meter3 from "../../Assets/prerna2.jpg";
import c from "../../Assets/tech-img/c.png";
import java  from "../../Assets/tech-img/java.png";
import python from "../../Assets/tech-img/python.png";
import html from "../../Assets/tech-img/html.png";
import css from "../../Assets/tech-img/css.png";
import machine  from "../../Assets/tech-img/data.png";
import android  from "../../Assets/tech-img/android.jpg";
import canva  from "../../Assets/tech-img/canva.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import arrow1 from "../../Assets/prerna2.jpg";
//import arrow2 from "../../Assets/prerna2.jpg";
// import colorSharp from "../assets/img/color-sharp.png";
// import hmtlimg from "../assets/img/html.png";
// import jsimg from "../assets/img/javascript.png";
// import javaimg from "../assets/img/java.png";
// import cppimg from "../assets/img/s.png";
// import pythonimg from "../assets/img/python-language-logo.png";
// import nvidiaimg from "../assets/img/nvidia.png";
// import arduinoimg from "../assets/img/arduino.png";
// import rapie from "../assets/img/raspberry-pi.png";
// import flaskimg from "../assets/img/flask.png";
// import mlimg from "../assets/img/machine-learning.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        
                        {<h4>Practical knowledge is the cornerstone of true understanding.</h4>
                        /* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                       <p> My skillset encompasses a strong understanding of various 
          technical programming languages, as listed below, and proficiency
           in utilizing a wide array of creative and technical tools</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={cpp} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C programming</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={machine} alt="Image" />
                                <h5>Data Science</h5>
                            </div>
                            <div className="item">
                                <img src={canva} alt="Image" />
                                <h5>Canva</h5>
                            </div>
                            <div className="item">
                                <img src={android} alt="Image" />
                                <h5>Basic Android</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
