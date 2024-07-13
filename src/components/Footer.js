import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
//import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h2>&lt; / em_ritik_ ❤️&gt;</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/ritik-sharma-48486722a/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Emritik"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/em_ritik_/"><img src={navIcon3} alt="" /></a>
                <a href="https://x.com/emritiksharma"><img src={navIcon4} alt="" /></a>

            </div>
            <p>made by &lt; / em_ritik_ ❤️&gt;</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}