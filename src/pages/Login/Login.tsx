import React from "react";
import { Container, Row, Col, Form , Button } from "react-bootstrap";
import cx from "./Login.module.scss";
import logo from "../../assets/logo.jpg";
import mob_templet from "../../assets/mob_templet.jpg";
import templet from "../../assets/templet-transformed.png";
import {  MdKeyboardArrowDown} from "react-icons/md";

const Login = () => {
  return (
    <>
      <section className={`${cx.loginpage}`}>
        <img src={mob_templet} alt="" className={`${cx.mbg}`}/>
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className={`${cx.loginbanner}`}>
                <img src={logo} alt="" />
                <div className={`${cx.bannerDetails}`}>
                  <h1>Welcome</h1>
                  <p>
                    You are 30 seconds away <br /> from earning your own <br />{" "}
                    money!
                  </p>
                  <img src={templet} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className={`${cx.logsinbtn}`}>
                <button>sign up</button>
                <button>Log in </button>
              </div>
              <div className={`${cx.logindetails}`}>
                <h3>Apply as a Employee</h3>

                <Row>
                  <Col lg={6} md={6} >
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Control type="text" placeholder="First name" />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} >
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Control type="number" placeholder="Phone" />
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Select>
                        <option value="1">Industry Type</option>
                        <option value="2">Information Technology</option>
                        <option value="2">Digital Marketing</option>
                      </Form.Select>
                      <MdKeyboardArrowDown className={`${cx.selecticon}`}/>
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <div className={`${cx.signupbtn}`}>
                    <Button > Sign up</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
