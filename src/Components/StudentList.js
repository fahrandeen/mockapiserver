import React from "react";
import Table from "react-bootstrap/Table";
import { StudentItem } from "./StudentItem";

export const StudentList = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map((student) => (
          <StudentItem
            {...student}
            key={student.id}
            toggleStudent={props.toggleStudent}
            handleEditStudentForm={props.handleEditStudentForm}
          />
        ))}
      </tbody>
    </Table>
  );
};
