import { ErrorMessage } from "formik";
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, type, label, disabled, placeholder, className } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div>
      <FormGroup>
        {label ? <Label htmlFor={name}>{label}</Label> : ""}
        <Input
          id={name}
          {...props}
          {...field}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          invalid={showError}
          className={className}
        ></Input>

        <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
      </FormGroup>
      {type === "checkbox" ? "hehe" : ""}
    </div>
  );
}

export default InputField;
