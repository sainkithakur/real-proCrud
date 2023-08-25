import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import { Header } from "react-bootstrap";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
const Home = () => {
  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
    history("/");
  };
  return (
    <div>
      <Link className="btn" to="/add">
        <Button variant="success">Add</Button>
      </Link>
      <Fragment className="table">
        <div style={{ margin: "2rem" }}>
          <Table Stripesd borderes hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Employees && Employees.length > 0
                ? Employees.map((item) => {
                    return (
                      <tr>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>
                          <Link to="/edit">
                            <BiEdit
                              onClick={() =>
                                handleEdit(item.id, item.Name, item.Age)
                              }
                            />
                          </Link>
                          &nbsp;
                          <RiDeleteBin6Fill
                            onClick={() => handleDelete(item.id)}
                          />
                        </td>
                      </tr>
                    );
                  })
                : "No data avilble"}
            </tbody>
          </Table>
          <br></br>
        </div>
      </Fragment>
    </div>
  );
};

export default Home;
