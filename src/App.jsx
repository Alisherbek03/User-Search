import { Container, Form, Table } from "react-bootstrap";
import "./App.css";
import { data } from "./data";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="app">
      <Container>
        <h1 className="text-center mt-4">Contact Keepers</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search-contacts"
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search);
            })
            .map((item) => (
              <tbody>
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>+{item.phone}</td>
                </tr>
              </tbody>
            ))}
        </Table>
      </Container>
    </div>
  );
}

export default App;
