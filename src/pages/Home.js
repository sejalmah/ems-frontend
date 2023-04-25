import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import { useParams } from "react-router-dom";


export default function Home() {
  const [users, setUsers] = useState("");

  const {id}=useParams();

  useEffect(() => {
    loadUsers();
    // axios.get("http://localhost:8090/users")
    // .then(res=>
    //   {    setUsers(res.data.map((e)=><Table>{e}</Table>))
    // }
    // )

  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8090/users");
    setUsers(result.data.map((e)=><Table>{e}</Table>));
    console.log(result);
    

  };

  

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Key</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email Id</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users}
            {/* {users.map((user, index) => {
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}


