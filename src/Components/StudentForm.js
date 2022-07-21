import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const StudentForm = (props) => {
  return (
    <Container>
      {props.editForm ? (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="studentName"
              // onChange={props.handleInputChange}
              value={props.id}
              disabled
              
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="studentName"
              onChange={props.handleInputChange}
              value={props.studentName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="studentAge"
              className="studentAge"
              onChange={props.handleInputChange}
              value={props.studentAge}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="studentStatus"
              label="Student Status"
              onChange={props.handleInputChange}
              checked={props.studentStatus}
            />
          </Form.Group>
          {props.error && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {props.error}
            </div>
          )}
          <Button
            variant="primary"
            type="button"
            onClick={()=>props.handleUpdate(props.id)}
            disabled={!(props.studentName && props.studentAge)}
          >
            Update
          </Button>
        </Form>
      ) : (
        <Form onSubmit={props.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="studentName"
              onChange={props.handleInputChange}
              value={props.studentName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="studentAge"
              className="studentAge"
              onChange={props.handleInputChange}
              value={props.studentAge}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="studentStatus"
              label="Student Status"
              onChange={props.handleInputChange}
              checked={props.studentStatus}
            />
          </Form.Group>
          {props.error && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {props.error}
            </div>
          )}
          <Button
            variant="primary"
            type="submit"
            disabled={!(props.studentName && props.studentAge)}
          >
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
};
