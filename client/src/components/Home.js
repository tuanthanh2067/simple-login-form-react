import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table } from "react-bootstrap";

import {
  SHOW_LOADING,
  HIDE_LOADING,
  SHOW_MODAL,
} from "../constants/actionTypes";
import Loading from "./Spinner";

const Home = () => {
  const [info, setInfo] = useState(null);
  const loading = useSelector((state) => state.loading);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: SHOW_LOADING,
    });
    axios
      .get(`/api/user/${user.user}`)
      .then((res) => res.data)
      .then((data) => {
        setInfo(data);
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
  }, [dispatch, user.user]);

  return (
    <Container className="col-lg-10 mt-4">
      {loading.active && <Loading />}
      {info && (
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
            <tr>
              <td>{info.id}</td>
              <td>{info.email}</td>
              <td>{info.fname}</td>
              <td>{info.lname}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Home;
