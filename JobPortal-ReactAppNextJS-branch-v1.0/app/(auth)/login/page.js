"use client";
import { useState } from "react";
import Cookies from 'js-cookie';
import {
  Tab,
  Tabs,
  Form,
  Button,
  Container,
  Row,
  Col,
  Image,
  Alert,
} from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { forgotPassword, loginUser, registerUser } from "@/app/api/Login";

export default function LoginPage() {
  const [key, setKey] = useState("login");

  // State for Login Form
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({});

  // State for Registration Form
  const [registerData, setRegisterData] = useState({
    name: "",
    username: "",
    emailId: "",
    password: "",
    confirmPassword: "",
  });
  const [registerErrors, setRegisterErrors] = useState({});

  // State for Forgot Password Form
  const [forgotData, setForgotData] = useState({
    email: "",
  });
  const [forgotErrors, setForgotErrors] = useState({});
  // Alert State for displaying success/error messages
  const [alertMessage, setAlertMessage] = useState({
    show: false,
    message: "",
    variant: "", // 'success', 'danger', etc.
  });

// Reset the form data based on the active tab
const resetForm = (formType) => {
    setAlertMessage({
        show: false,
        message: "",
        variant: "",
      });
    if (formType === "login") {
      setLoginData({
        username: "",
        password: "",
      });
      setLoginErrors({});
    } else if (formType === "register") {
      setRegisterData({
        name: "",
        username: "",
        emailId: "",
        password: "",
        confirmPassword: "",
      });
      setRegisterErrors({});
    } else if (formType === "forgot-password") {
      setForgotData({
        email: "",
      });
      setForgotErrors({});
    }
  };

   // Handle Tab Change with form reset
   const handleTabChange = (newKey) => {
    setKey(newKey);
    resetForm(newKey); // Reset form when tab is changed
  };



  // Handle Input Changes for Login, Register, Forgot Password
  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "login") {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else if (formType === "register") {
      setRegisterData((prev) => ({ ...prev, [name]: value }));
    } else if (formType === "forgot") {
      setForgotData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Form validation for Login
  const validateLogin = () => {
    const errors = {};
    if (!loginData.username) errors.username = "Username is required";
    if (!loginData.password) errors.password = "Password is required";
    return errors;
  };

  // Form validation for Registration
  const validateRegister = () => {
    const errors = {};
    
    // Validate Full Name
    if (!registerData.name) errors.name = "Full Name is required";
    
    // Validate Username
    if (!registerData.username) errors.username = "Username is required";
    
    // Validate Email
    if (!registerData.emailId) {
      errors.emailId = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerData.emailId)) {
      errors.emailId = "Invalid email format";
    }
    
    // Validate Password
    if (!registerData.password) 
      errors.password = "Password is required";
    else if (registerData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    
    // Validate Confirm Password
    if (registerData.password !== registerData.confirmPassword) 
      errors.confirmPassword = "Passwords do not match";
    
    // Validate Terms and Conditions checkbox
    if (!registerData.termsAccepted) 
      errors.termsAccepted = "You must agree to the Terms and Conditions";
    
    return errors;
  };

  // Form validation for Forgot Password
  const validateForgotPassword = () => {
    const errors = {};
    if (!forgotData.email) errors.email = "Email is required";
    return errors;
  };

  // Handle form submission for Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const errors = validateLogin();
    setLoginErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await loginUser(loginData);
        console.log("Login successful:", response);
        setAlertMessage({
            show: true,
            message: "Login Successfull!",
            variant: "success",
          });
          Cookies.set('authdata', JSON.stringify(response, { expires: 7, path: '' }));
          setTimeout(() => {
            window.location.href = '/candidate/profile';
          }, 1000);
         
        // Handle success (e.g., redirect, store token, etc.)
      } catch (error) {
        setAlertMessage({
            show: true,
            message: "Invalid Username or Password!",
            variant: "danger",
          });
        // Handle error (e.g., show error message)
      }
    }
  };

  // Handle form submission for Registration
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const errors = validateRegister();
    setRegisterErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        registerData.roleId=2;
        const response = await registerUser(registerData);        
        // Handle success (e.g., redirect to login page)
        setAlertMessage({
          show: true,
          message: "Account Created Successfully! Login now.",
          variant: "success",
        });
        setKey("login");
      } catch (error) {
        setAlertMessage({
            show: true,
            message: "Registration failed. Please try again.",
            variant: "danger",
          });
      }
    }
  };

  // Handle form submission for Forgot Password
  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForgotPassword();
    setForgotErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await forgotPassword(forgotData);
        console.log("Password reset instructions sent:", response.data);
        // Handle success (e.g., show success message)
      } catch (error) {
        setAlertMessage({
            show: true,
            message: "Please Try Again Later",
            variant: "danger",
          });
      }
    }
  };

  return (
    <div className="page-wraper">
      <div className="browse-job login-style3">
        <div
          className="bg-img-fix"
          style={{
            backgroundImage: "url(/images/background/bg6.jpg)",
            height: "100vh",
          }}
        >
          <Row>
            <Col
              xl={4}
              lg={5}
              md={6}
              sm={12}
              className="bg-white z-index2 relative p-a0 content-scroll skew-section left-bottom"
            >
              <div className="login-form style-2">
                {/* Logo Header */}
                <div className="logo-header text-center p-tb30">
                  <Link href="/">
                    <Image
                      src="/images/seekers.png"
                      alt="logo"
                      className="logo"
                    />
                  </Link>
                </div>
                <div className="clearfix"></div>
                    {/* Alert Message Display */}
                    {alertMessage.show && (
                                    <Alert variant={alertMessage.variant} className="text-center">
                                        {alertMessage.message}
                                    </Alert>
                                    )}
                {/* Tabs Content */}
                <Tabs
                  id="login-tabs"
                  activeKey={key}
                  onSelect={handleTabChange}
                  className="mb-3 nav p-b30"
                  style={{display:'none'}}
                >
                  {/* Login Tab */}
                  <Tab eventKey="login" title="Login">
                    <Form className="dez-form p-b30" noValidate  onSubmit={handleLoginSubmit} autoComplete="off">
                      <h3 className="form-title m-t0">Login</h3>
                      <div className="dez-separator-outer m-b5">
                        <div className="dez-separator bg-primary style-liner"></div>
                      </div>
                      <p>Enter your e-mail address and your password.</p>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="User Name"
                          required
                          name="username"
                          value={loginData.username}
                          onChange={(e) => handleInputChange(e, "login")}
                          isInvalid={loginErrors.username}
                        />
                        <Form.Control.Feedback type="invalid">
                          {loginErrors.username}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          placeholder="Type Password"
                          required
                          name="password"
                          value={loginData.password}
                          onChange={(e) => handleInputChange(e, "login")}
                          isInvalid={loginErrors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {loginErrors.password}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <div className="form-group text-left d-flex align-items-center">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                        <Form.Check
                          type="checkbox"
                          label="Remember me"
                          id="remember-me"
                          className="ms-3"
                        />
                      </div>
                      <div className="mb-3">
                        <a
                          href="#"
                          
                          onClick={() => handleTabChange("forgot-password")}
                          className="forget-pass m-l5" style={{textDecoration:"underline"}}
                        >
                          <i className="fa fa-unlock-alt"></i> Forgot Password
                        </a>
                      </div>

                      {/* Social Login */}
                      <div className="dz-social clearfix">
                        <h5 className="form-title m-t5 float-start">
                          Sign In With
                        </h5>
                        <div className="d-flex justify-content-end">
                          <Button variant="primary" className="mx-1">
                            <i className="fab fa-facebook-f"></i>
                          </Button>
                          <Button variant="danger" className="mx-1">
                            <i className="fab fa-google-plus-g"></i>
                          </Button>
                          <Button variant="info" className="mx-1">
                            <i className="fab fa-linkedin-in"></i>
                          </Button>
                          <Button variant="primary" className="mx-1">
                            <i className="fab fa-twitter"></i>
                          </Button>
                        </div>
                      </div>
                    </Form>
                    <div className="text-center">
                      <Button
                        variant="primary"
                        className="w-100 btn-highlight"                        
                        onClick={() => handleTabChange("register")}
                      >
                        Create an account
                      </Button>
                    </div>
                  </Tab>

                  {/* Forgot Password Tab */}
                  <Tab eventKey="forgot-password" title="Forgot Password">
                    <Form className="dez-form" noValidate  onSubmit={handleForgotSubmit} autoComplete="off">
                      <h3 className="form-title m-t0">Forget Password ?</h3>
                      <div className="dez-separator-outer m-b5">
                        <div className="dez-separator bg-primary style-liner"></div>
                      </div>
                      <p>
                        Enter your e-mail address below to reset your password.
                      </p>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Email Address"
                          required
                          name="email"
                          value={forgotData.email}
                          onChange={(e) => handleInputChange(e, "forgot")}
                          isInvalid={forgotErrors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {forgotErrors.email}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <div className="d-flex justify-content-between">
                        <Button
                          variant="outline-secondary"
                          
                          onClick={() => handleTabChange("login")}
                        >
                          Back
                        </Button>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </Tab>

                  {/* Register Tab */}
                  <Tab eventKey="register" title="Register">
                    <Form className="dez-form" noValidate  onSubmit={handleRegisterSubmit} autoComplete="off">
                      <h3 className="form-title m-t0">Sign Up</h3>
                      <div className="dez-separator-outer m-b5">
                        <div className="dez-separator bg-primary style-liner"></div>
                      </div>
                      <p>Enter your personal details below:</p>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          required
                          name="name"
                          value={registerData.name}
                          onChange={(e) => handleInputChange(e, "register")}
                          isInvalid={registerErrors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {registerErrors.name}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="User Name"
                          required
                          name="username"
                          value={registerData.username}
                          onChange={(e) => handleInputChange(e, "register")}
                          isInvalid={registerErrors.username}
                        />
                        <Form.Control.Feedback type="invalid">
                          {registerErrors.username}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Email Address"
                          required
                          name="emailId"
                          value={registerData.emailId}
                          onChange={(e) => handleInputChange(e, "register")}
                          isInvalid={registerErrors.emailId}
                        />
                        <Form.Control.Feedback type="invalid">
                          {registerErrors.emailId}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          required
                          name="password"
                          value={registerData.password}
                          onChange={(e) => handleInputChange(e, "register")}
                          isInvalid={registerErrors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {registerErrors.password}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          placeholder="Re-type Your Password"
                          required
                          name="confirmPassword"
                          value={registerData.confirmPassword}
                          onChange={(e) => handleInputChange(e, "register")}
                          isInvalid={registerErrors.confirmPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                          {registerErrors.confirmPassword}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          label={
                            <span>
                              I agree to the{" "}
                              <Link href="#">Terms of Service</Link> &{" "}
                              <Link href="#">Privacy Policy</Link>
                            </span>
                          }
                          name="termsAccepted"
                          required
                          checked={registerData.termsAccepted || false}
                          onChange={(e) =>
                            setRegisterData((prev) => ({ ...prev, termsAccepted: e.target.checked }))
                          }
                          defaultValue={false}
                        />
                        {/* Separate error message for Terms and Conditions */}
                        {registerErrors.termsAccepted && (
                          <span className="text-danger mt-1">
                            {registerErrors.termsAccepted}
                          </span>
                        )}
                      </Form.Group>


                      <div className="d-flex justify-content-between">
                        <Button
                          variant="outline-secondary"
                          onClick={() => handleTabChange("login")}
                          >
                          Back
                        </Button>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </Tab>
                </Tabs>

                {/* Footer */}
                <div className="text-center mt-4 mb-3">
                  <span>
                    © Copyright by <Link href="#">Radiantze</Link> All rights reserved.
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
