import React from "react";
import { partial } from "../library/lib";

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
        <img src="edit.png" 
        className="image-studentItem" 
        alt="edit"
        onClick={()=>props.handleEditStudentForm(props.id)}
        />
      </td>
      <td>
        <img src="delete.png" className="image-studentItem" alt="delete" />
      </td>
    </tr>
  );
};
