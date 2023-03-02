import ListGroup from "react-bootstrap/ListGroup";
const UsersList = (props) => {
  return (
    <ListGroup>
      {props.users.map((user) => (
        <ListGroup.Item key={user.id}>
          {user.name} ({user.age} Years Old)
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UsersList;
