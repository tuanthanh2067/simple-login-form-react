import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
  SHOW_LOADING,
  HIDE_LOADING,
  SHOW_MODAL,
} from "../constants/actionTypes";
import Loading from "./Spinner";

const Lobby = () => {
  const [users, setUsers] = useState(null);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: SHOW_LOADING,
    });
    axios
      .get("/api/users")
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        dispatch({
          type: SHOW_MODAL,
          payload: error.response.data.message,
        });
      })
      .finally(() => {
        dispatch({
          type: HIDE_LOADING,
        });
      });
  }, [dispatch]);

  return (
    <Container className="col-lg-10 mt-4">
      {loading.active && <Loading />}
      {users && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>First name</th>
              <th>Last name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Lobby;
