import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact me</h3>
            

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Nairobi - Kenya</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>Eroom1998@gmail.com | Mutheee57@gmail.com </p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+254706361004</p>
              </li>
            </ul>

            
            <div className={`${classes.social__links}`}>
              
              <Link href="https://github.com/eroom8">
                <i className="ri-github-line"></i>
              </Link>
             
              <Link href="https://www.linkedin.com/in/eric-muthee-697985233">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.instagram.com/eric.muthee/">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link href="https://twitter.com/EricMuthee11?t=6faKPptEMoHVwtP_4n0MKg&s=03">
                <i className="ri-twitter-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
