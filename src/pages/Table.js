import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DeleteUser = async (id) => {
  await axios.delete(`http://localhost:8090/user/${id}`);
};
const Table = (props) => {
  // const navigate = useNavigate();
  return (
    <>
      {console.log(props)}
      <tr>
        <th scope="row" key={props.children.id}>
          {props.children.id + 1}
        </th>
        <td>{props.children.name}</td>
        <td>{props.children.username}</td>
        <td>{props.children.email}</td>
        <td>
          <Link
            className="btn btn-primary mx-2"
            to={`/viewuser/${props.children.id}`}
          >
            View
          </Link>
          <Link
            className="btn btn-outline-primary mx-2"
            to={`/edituser/${props.children.id}`}
          >
            Edit
          </Link>
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              DeleteUser(props.children.id);
              // navigate('/')
              window.location.reload(false);
            }}
          >
            Delete
          </button>
          {/* <button className="btn btn-danger mx-2">Delete</button> */}
        </td>
      </tr>
    </>
  );
};
export default Table;
