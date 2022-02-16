import { FastField, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import * as Yup from "yup";
import InputField from "../../custom-fields/InputField";
import { Button, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

function LoginForm(props) {
  const navigate = useNavigate();
  const initialValue = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("email is required"),
    password: Yup.string().required("password is required"),
  });

  const handleSubmit = (values) => {
    console.log("data", values);
    setTimeout(() => {
      navigate("/page");
    }, 1500);
  };
  return (
    <div className="content p-3">
      <div className="card card-container ">
        <h1 className="title text-center">Login to your account</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="form-group">
            <FastField
              name="email"
              type="email"
              component={InputField}
              placeholder="Login"
              className="form-control form-control-lg"
            />
            <FastField
              name="password"
              type="password"
              component={InputField}
              placeholder="Password"
              className="form-control form-control-lg"
            />
            <FormGroup className="text-start d-flex">
              <div className="">
                <input name="check" id="check" type="checkbox" />
                <label className="ms-2" htmlFor="check">
                  Remember me
                </label>
              </div>
              <Link to="#" className="text-end ms-auto">
                Forgot Password ?
              </Link>
            </FormGroup>

            <FormGroup className="text-center">
              <Button
                color="primary"
                type="submit"
                className="btn btn-primary "
              >
                Let's go
              </Button>
            </FormGroup>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
