import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";

function App() {
  const initialUsers = [
    { name: "123", age: 1, id: 1 },
    { name: "1234", age: 1, id: 2 },
  ];
  const [users, setUsers] = useState(initialUsers);

  const onAddUser = (name, age) => {
    setUsers((prevUsersState) => {
      return [...prevUsersState, { id: Math.random().toString(), name, age }];
    });
  };

  return (
    <Container>
      <Row className="mt-5">
        <AddUser addUser={onAddUser}></AddUser>
      </Row>
      <Row className="mt-5">
        <UsersList className="w-50" users={users}></UsersList>
      </Row>
    </Container>
  );
}

export default App;
