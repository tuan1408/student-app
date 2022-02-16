import { ErrorMessage, FastField, Formik } from "formik";
import React, { memo, useMemo, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import InputField from "../../custom-fields/InputField";
import "./style.css";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function AddItem(props) {
  const [selectState, setChangeSlectState] = useState("");
  console.log("1223");
  const handleChangeSelect = (e) => {
    console.log("123");
    setChangeSlectState(e.target.value);
  };

  const initialvalue = {
    maso: "",
    masosinhvien: "",
    prename: "",
    name: "",
    selectState: "",
  };

  const validationSchema = Yup.object().shape({
    maso: Yup.string().required("ma ho so is required"),
    masosinhvien: Yup.string().required("ma sinh vien is required"),
    prename: Yup.string().required("ho dem is required"),
    name: Yup.string().required("ten is required"),
  });

  const handleSubmit = (e, data) => {
    e.preventdefault();
    console.log("data", data);
  };

  const handlechange = () => {
    console.log("change");
  };

  return (
    <div className="container mb-5">
      <h1 className="title text-center">Them moi sinh vien</h1>
      <Formik initialValues={initialvalue} validationSchema={validationSchema}>
        <Form className="form-add">
          <h3 className="mb-5">Thong tin co ban</h3>
          {console.log("he")}
          <FormGroup className="row">
            <div className="col-6">
              <Label htmlFor="maso">
                <b className="text-warning">*</b> Ma ho so
              </Label>
              <FastField
                name="maso"
                type="text"
                component={InputField}
                className="form-control form-control-lg"
                onChange={handlechange}
              />
            </div>
            <div className="col-6">
              <Label htmlFor="masosinhvien">
                <b className="text-warning">*</b> Ma sinh vien
              </Label>
              <FastField
                name="masosinhvien"
                type="text"
                component={InputField}
                className="form-control form-control-lg"
              />
            </div>
          </FormGroup>
          <FormGroup className="row">
            <div className="col-6">
              <Label htmlFor="prename">
                <b className="text-warning">*</b> Ho dem
              </Label>
              <FastField
                name="prename"
                type="text"
                component={InputField}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-6">
              <Label htmlFor="name">
                <b className="text-warning">*</b> Ten
              </Label>
              <FastField
                name="name"
                type="text"
                component={InputField}
                className="form-control form-control-lg"
              />
            </div>
          </FormGroup>
          <FormGroup className="row">
            <div className="col-4">
              <Label>
                <b className="text-warning">*</b> Gioi tinh
              </Label>
              <select
                className="form-select"
                value={selectState}
                onChange={handleChangeSelect}
              >
                <option defaultValue="Gioi tinh">Gioi tinh</option>
                <option value="1">Nam</option>
                <option value="2">Nu</option>
                <option value="3">Khac</option>
              </select>
            </div>
            <div className="col-4">
              <FormGroup>
                <Label htmlFor="date">
                  <b className="text-warning">*</b> Ngay sinh
                </Label>
                <Input type="date" name="date" id="date" />
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup>
                <Label htmlFor="place">
                  <b className="text-warning">*</b> Noi sinh
                </Label>
                <Input type="text" name="place" id="place" />
              </FormGroup>
            </div>
          </FormGroup>
          <FormGroup className="row">
            <div className="col-6">
              <FormGroup>
                <Label htmlFor="ethnic">Dan toc</Label>
                <Input type="text" name="ethnic" id="ethnic" />
              </FormGroup>
            </div>
            <div className="col-6">
              <FormGroup>
                <Label htmlFor="religion">Ton giao</Label>
                <Input type="text" name="religion" id="religion" />
              </FormGroup>
            </div>
          </FormGroup>

          <FormGroup className="row">
            <div className="col-4">
              <FormGroup>
                <Label htmlFor="identity">So CCCD</Label>
                <Input type="text" name="identity" id="identity" />
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup>
                <Label htmlFor="dateRange">Ngay cap</Label>
                <Input type="date" name="dateRange" id="dateRange" />
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup>
                <Label htmlFor="issued">Noi cap</Label>
                <Input type="text" name="issued" id="issued" />
              </FormGroup>
            </div>
          </FormGroup>

          <FormGroup className="row">
            <div className="col-6">
              <FormGroup>
                <Label htmlFor="phone">Dien thoai</Label>
                <Input type="number" name="phone" id="phone" />
              </FormGroup>
            </div>
            <div className="col-6">
              <FormGroup>
                <Label htmlFor="email">
                  <b className="text-warning">*</b> Email
                </Label>
                <Input type="email" name="email" id="email" />
              </FormGroup>
            </div>
          </FormGroup>
          <FormGroup className="row">
            <div className="col-12">
              <FormGroup>
                <Label htmlFor="address">Dia chi lien he</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  className="w-50"
                />
              </FormGroup>
            </div>
          </FormGroup>
          <FormGroup className="row">
            <div className="col-6">
              <FormGroup>
                <Label htmlFor="note">Ghi chu</Label>
                <Input type="text" name="note" id="note" />
              </FormGroup>
            </div>
            <div className="col-6">
              <FormGroup>
                <Label>
                  <b className="text-warning">*</b> Trang thai sinh vien
                </Label>
                <select className="form-select">
                  <option defaultValue="Chon trang thai">
                    Chon trang thai
                  </option>
                  <option value="1">Da tot nghiep</option>
                  <option value="2">Chua tot nghiep</option>
                </select>
              </FormGroup>
            </div>
          </FormGroup>
          {console.log("he2")}

          <FormGroup className="mb-5">
            {console.log("he3")}

            <Button
              color="primary"
              type="submit"
              onClick={() => console.log("123")}
            >
              Them moi
            </Button>
            <Button color="danger" className="ms-3">
              Huy
            </Button>
          </FormGroup>
        </Form>
      </Formik>
    </div>
  );
}

export default AddItem;
