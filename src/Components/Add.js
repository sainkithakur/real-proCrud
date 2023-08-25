import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Employees from "./Employees";
import { Button, Form } from "react-bootstrap";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age;

    Employees.push({ id: uniqueId, Name: a, Age: b });
    history("/");
  };
  return (
    <div>
      <h1> CREATE New Users</h1>

      <Form className="fill">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            className=""
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your AGE</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Age"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button
          variant="primary"
          onClick={(e) => handleSubmit(e)}
          type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Add;
