import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sz2.jpeg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is Yunqi Zhang, from Guangzhou, China. You can call me Stephanie.
              <br />
              <br />I have attained
              <i>
                <b className="purple"> a bachelor degree in Urban Studies </b>
              </i>
              from University of Toronto and
              <i>
                <b className="purple"> a master degree in Geographic Information Science </b>
              </i> 
              in University of Illinois at Urbana-Champaign.
              <br />
              <br />
              I have worked in the IT industry since I graduated at 2018. And I am now working as a software enginner in Shenzhen, China. 
              <br />
              <br />
              I am keen in both frontend and backend development, and database management. I have experiencd with languages of python, javascript, and SQL, as well as nodejs, ReactJS, postgresSQL, SQL Server, and ArcGIS, etc. 
              <br />
              <br />
              I am happy to connect with you in &nbsp; 
              <a
                  href="https://www.linkedin.com/in/stephanieieiezhang/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                  </a>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
