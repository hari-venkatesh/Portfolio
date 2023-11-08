import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <br/>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="own-footer">
            <p className="text-laddu-gradient" > <a href="mailto:connectwithhari0513@gmail.com"><i  class="fas fa-envelope"></i> connectwithhari0513@gmail.com</a></p>
            <p className="text-laddu-gradient whatsapp"><a href="https://api.whatsapp.com/send?phone=919944616138" target="_blank" ><i class="fab fa-whatsapp"></i> 9944616138</a></p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hari-venkatesh-p-6b1bbb1a0/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/hmessi1" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/hari-venkatesh" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
