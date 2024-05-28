import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Routestudentform } from "../Router/Router";
import { useGetallStudentsQuery } from "../redux/services/studentform/Index";

const Studentlist = () => {

  const { data, isLoading, isError, refetch } = useGetallStudentsQuery();

const navlist = useNavigate();

const btnadd = () => {

    navlist(Routestudentform.sudentadd);
}

const btnlogout = () => {
    navlist(Routestudentform.login);
}

    return <div>
        <h1> Student list</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Gender</th>
          <th>Date of birth</th>
          <th>Address</th>
          <th>Languages known</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((student, index) => {
          return <tr key={student.id}> 
              <td>{index +1}</td>
              <td>{student.name}</td>
              <td>{student.gender} </td>
              <td>{student.dob} </td>
              <td>{student.address} </td>
              <td>{student.languages_known} </td>
              <td><Button>Edit</Button> </td>
            </tr>
        })}
      </tbody>
    </Table>
        <Button variant="primary" onClick={btnadd}>Add</Button>
      <Button variant="secondary" onClick={btnlogout}>Logout</Button>

    </div>
}

export default Studentlist;
