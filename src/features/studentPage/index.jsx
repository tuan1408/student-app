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

function StudentPage(props) {
  return (
    <div className="mx-2">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="title">Danh sach sinh vien</h1>
        <Link to="/page/add" className="btn btn-primary">
          Them sinh vien
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <Form className="d-flex align-items-center justify-content-between gap-5">
          <FormGroup>
            <Label htmlFor="name">Ho va Ten</Label>
            <Input type="text" id="name" name="name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ma ho so</Label>
            <Input type="text" id="maso" name="maso" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="masinhvien">Ma sinh vien</Label>
            <Input type="text" id="masinhvien" name="masinhvien" />
          </FormGroup>
          <Button color="primary" className="mt-3">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </Form>
        <div>
          <div className="input-group mt-3">
            <div className="form-outline">
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
            <th>TVU0192</th>
            <th>123456789</th>
            <th>Nguyen Van A</th>
            <th>Nam</th>
            <th>29/12/2000</th>
            <th>0942472911</th>
            <th>anguyenvan@gmail.com</th>
            <th>Quang Ninh</th>
            <th>022099001997</th>
            <th>Thanh Xuan, Ha Noi</th>
            <th className="d-flex">
              <Button color="primary">create</Button>
              <Button className="ms-3" color="danger">
                delete
              </Button>
            </th>
          </tr>
          <tr>
            <th>2</th>
            <th>TVU0192</th>
            <th>123456789</th>
            <th>Nguyen Van A</th>
            <th>Nam</th>
            <th>29/12/2000</th>
            <th>0942472911</th>
            <th>anguyenvan@gmail.com</th>
            <th>Quang Ninh</th>
            <th>022099001997</th>
            <th>Thanh Xuan, Ha Noi</th>
            <th className="d-flex">
              <Button color="primary">create</Button>
              <Button className="ms-3" color="danger">
                delete
              </Button>
            </th>
          </tr>
          <tr>
            <th>1</th>
            <th>TVU0192</th>
            <th>123456789</th>
            <th>Nguyen Van A</th>
            <th>Nam</th>
            <th>29/12/2000</th>
            <th>0942472911</th>
            <th>anguyenvan@gmail.com</th>
            <th>Quang Ninh</th>
            <th>022099001997</th>
            <th>Thanh Xuan, Ha Noi</th>
            <th className="d-flex">
              <Button color="primary">create</Button>
              <Button className="ms-3" color="danger">
                delete
              </Button>
            </th>
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
