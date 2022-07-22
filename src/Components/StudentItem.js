import React from "react";
import { partial } from "../library/lib";
import editImage from "../assets/edit.png";
import deleteImage from "../assets/delete.png";

export const StudentItem = (props) => {
  const handletoggle = partial(props.toggleStudent, props.id);

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.studentName}</td>
      <td>{props.studentAge}</td>
      <td>
        <input
          type="checkbox"
          checked={props.studentStatus}
          onChange={handletoggle}
        />
      </td>
      <td>
        <img
          src={editImage}
          className="image-studentItem"
          alt="edited"
          onClick={() => props.handleEditStudentForm(props.id)}
        />
      </td>
      <td>
        <img 
        src={deleteImage} 
        className="image-studentItem" 
        alt="delete"
        onClick={() => props.handleDeleteStudent(props.id)}
        />
      </td>
    </tr>
  );
};
