import { useFormik } from "formik";
import React, { useState } from "react";
import "./style.css";
import * as Yup from "yup";
import { Button, Card, CardBody, Collapse } from "reactstrap";

function AddItem() {
  const formik = useFormik({
    initialValues: {
      maso: "",
      masosinhvien: "",
      prename: "",
      name: "",
      date: "",
      sex: "",
      place: "",
      ethnic: "",
      religion: "",
      identity: "",
      dateRange: "",
      graduate: "",
      issued: "",
      phone: "",
      email: "",
      address: "",
      note: "",
    },
    validationSchema: Yup.object({
      maso: Yup.string().required("This Field Is Required!"),
      masosinhvien: Yup.string().required("This Field Is Required!"),
      graduate: Yup.string().required("This Field Is Required!"),
      prename: Yup.string().required("This Field Is Required!"),
      sex: Yup.string().required("This Field Is Required!"),
      name: Yup.string().required("This Field Is Required!"),
      place: Yup.string().required("This Field Is Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("This Field Is Required!"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const handleCancle = () => {
    console.log("cancle");
  };

  const [isCollapse, setIsCollapse] = useState(true);

  const handleClick = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div className="container mb-5">
      <h1 className="title text-center">Them moi sinh vien</h1>

      <h3 onClick={handleClick}>Thong tin co ban</h3>
      <Collapse isOpen={isCollapse}>
        <Card>
          <CardBody>
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-12 col-md-6">
                  <label htmlFor="">
                    <b className="text-warning">*</b> Ma ho so
                  </label>
                  <input
                    type="text"
                    name="maso"
                    value={formik.values.maso}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                  {formik.errors.maso && formik.touched.maso && (
                    <p className="text-danger">{formik.errors.maso}</p>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="">
                    <b className="text-warning">*</b> Ma sinh vien
                  </label>
                  <input
                    type="text"
                    name="masosinhvien"
                    value={formik.values.masosinhvien}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                  {formik.errors.masosinhvien &&
                    formik.touched.masosinhvien && (
                      <p className="text-danger">
                        {formik.errors.masosinhvien}
                      </p>
                    )}
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <label htmlFor="">
                    <b className="text-warning">*</b> Ho dem
                  </label>
                  <input
                    type="text"
                    name="prename"
                    value={formik.values.prename}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                  {formik.errors.prename && formik.touched.prename && (
                    <p className="text-danger">{formik.errors.prename}</p>
                  )}
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="">
                    <b className="text-warning">*</b> Ten
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p className="text-danger">{formik.errors.name}</p>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-4">
                  <label htmlFor="">
                    <b className="text-warning">*</b> Gioi tinh
                  </label>
                  <select
                    className="form-select form-control form-control-lg"
                    name="sex"
                    value={formik.values.sex}
                    onChange={formik.handleChange}
                  >
                    <option defaultValue="">Gioi tinh</option>
                    <option value="1">Nam</option>
                    <option value="2">Nu</option>
                    <option value="3">Khac</option>
                  </select>
                </div>

                <div className="col-12 col-md-4">
                  <label htmlFor="">
                    <b className="text-warning">*</b> Ngay sinh
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                  {formik.errors.date && formik.touched.date && (
                    <p className="text-danger">{formik.errors.date}</p>
                  )}
                </div>
                <div className="col-12 col-md-4">
                  <label htmlFor="">
                    <b className="text-warning">*</b> Noi sinh
                  </label>
                  <input
                    type="text"
                    name="place"
                    value={formik.values.place}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                  {formik.errors.place && formik.touched.place && (
                    <p className="text-danger">{formik.errors.place}</p>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6">
                  <label htmlFor="">Dan toc</label>
                  <input
                    type="text"
                    name="ethnic"
                    value={formik.values.ethnic}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="">Ton giao</label>
                  <input
                    type="text"
                    name="religion"
                    value={formik.values.religion}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-4">
                  <label htmlFor="">So CCCD</label>
                  <input
                    type="text"
                    name="identity"
                    value={formik.values.identity}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-12 col-md-4">
                  <label htmlFor="">Ngay cap</label>
                  <input
                    type="date"
                    name="dateRange"
                    value={formik.values.dateRange}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-12 col-md-4">
                  <label htmlFor="">Noi cap</label>
                  <input
                    type="text"
                    name="issued"
                    value={formik.values.issued}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6">
                  <label htmlFor="">Dien thoai</label>
                  <input
                    type="text"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="">
                    <b className="text-warning">*</b> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-danger">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <label>Dia chi lien he</label>
                  <input
                    type="text"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6">
                  <label htmlFor="">Ghi chu</label>
                  <input
                    type="text"
                    name="note"
                    value={formik.values.note}
                    onChange={formik.handleChange}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="">
                    <b className="text-warning">*</b> Trang thai sinh vien
                  </label>
                  <select
                    className="form-select form-control form-control-lg"
                    name="graduate"
                    value={formik.values.graduate}
                    onChange={formik.handleChange}
                  >
                    <option defaultValue="Chon trang thai">
                      Chon trang thai
                    </option>
                    <option value="1">Da tot nghiep</option>
                    <option value="2">Chua tot nghiep</option>
                  </select>
                </div>
              </div>
              <div className="mb-5 mt-5 text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-danger ms-3"
                  onClick={handleCancle}
                  color="primary"
                >
                  Cancle
                </button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default AddItem;
