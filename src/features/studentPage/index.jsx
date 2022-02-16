import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";
import "./style.css";

function StudentPage(props) {
  return (
    <div className="cover">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="title">Danh sach sinh vien</h1>
        <Link to="/page/add" className="btn btn-primary">
          Them sinh vien
        </Link>
      </div>
      <div className="row p-2 justify-content-between">
        <Form className="row col-md-8 col-xl-6">
          <FormGroup className="col-md-3">
            <Label htmlFor="name">Ho va Ten</Label>
            <Input
              onChange={(e) => {
                console.log("log", e.target.value);
              }}
              type="text"
              id="name"
              name="name"
            />
          </FormGroup>

          <FormGroup className="col-md-3">
            <Label htmlFor="name">Ma ho so</Label>
            <Input type="text" id="maso" name="maso" />
          </FormGroup>

          <FormGroup className="col-md-3">
            <Label htmlFor="masinhvien">Ma sinh vien</Label>
            <Input type="text" id="masinhvien" name="masinhvien" />
          </FormGroup>

          <FormGroup className="mt-md-3 col-md-3 mb-md-3 ">
            <Button color="primary" className="mt-3">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </FormGroup>
        </Form>

        <div className="col-md-4 col-xl-6">
          <div className="input-group margin-serch">
            <div className="form-outline flex-grow-1">
              <Input
                type="search"
                id="form1"
                className="form-control"
                placeholder="search"
              />
            </div>
            <Button color="primary">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </div>
        </div>
      </div>

      <Table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ma ho so</th>
            <th>Ma sinh vien</th>
            <th>Ho Ten</th>
            <th>Gioi Tinh</th>
            <th>Ngay sinh</th>
            <th>So dien thoai</th>
            <th>Email</th>
            <th>Noi sinh</th>
            <th>CCCD</th>
            <th>Dia chi</th>
            <th>Hanh dong</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>TVU0192</td>
            <td>123456789</td>
            <td>Nguyen Van A</td>
            <td>Nam</td>
            <td>29/12/2000</td>
            <td>0942472911</td>
            <td>anguyenvan@gmail.com</td>
            <td>Quang Ninh</td>
            <td>022099001997</td>
            <td>thanh Xuan, Ha Noi</td>
            <td className="d-flex">
              <Button color="primary">create</Button>
              <Button className="ms-3" color="danger">
                delete
              </Button>
            </td>
          </tr>
          <tr>
            <th>1</th>
            <td>TVU0192</td>
            <td>123456789</td>
            <td>Nguyen Van A</td>
            <td>Nam</td>
            <td>29/12/2000</td>
            <td>0942472911</td>
            <td>anguyenvan@gmail.com</td>
            <td>Quang Ninh</td>
            <td>022099001997</td>
            <td>thanh Xuan, Ha Noi</td>
            <td className="d-flex">
              <Button color="primary">create</Button>
              <Button className="ms-3" color="danger">
                delete
              </Button>
            </td>
          </tr>
          <tr>
            <th>1</th>
            <td>TVU0192</td>
            <td>123456789</td>
            <td>Nguyen Van A</td>
            <td>Nam</td>
            <td>29/12/2000</td>
            <td>0942472911</td>
            <td>anguyenvan@gmail.com</td>
            <td>Quang Ninh</td>
            <td>022099001997</td>
            <td>thanh Xuan, Ha Noi</td>
            <td className="d-flex">
              <Button color="primary">create</Button>
              <Button className="ms-3" color="danger">
                delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Pagination size="lg" className="d-flex justify-content-center">
        <PaginationItem>
          <PaginationLink
            className="text-dark"
            previous
            href="#"
          ></PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="text-dark" href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="text-dark" href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="text-dark" href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="text-dark" next href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default StudentPage;
