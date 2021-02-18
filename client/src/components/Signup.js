import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { signup } from "../actions/auth";
import Loading from "./Spinner";

const Signup = () => {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      cPassword: "",
      fname: "",
      lname: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(7, "Must be at least 7 characters")
        .max(30, "Must be at most 30 characters")
        .required("Password is required"),
      cPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      fname: Yup.string().required("First name is required"),
      lname: Yup.string().required("Last name is required"),
    }),
    onSubmit: (values) => {
      dispatch(
        signup(values.email, values.password, values.fname, values.lname)
      );
    },
  });

  return (
    <Container className="col-md-4 mt-4">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Form.Text className="text-muted">{formik.errors.email}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-muted">{formik.errors.password}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="cPassword"
            placeholder="Confirm Password"
            value={formik.values.cPassword}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-muted">
            {formik.errors.cPassword}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="fname"
            placeholder="Enter your first name"
            value={formik.values.fname}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-muted">{formik.errors.fname}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lname"
            placeholder="Enter your last name"
            value={formik.values.lname}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-muted">{formik.errors.lname}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>

      <div className="row container">
        <p className="mr-1">Already have an account?</p>
        <Link to="/login">Log in</Link>
      </div>

      {loading.active && <Loading />}
    </Container>
  );
};

export default Signup;
