import Button from "react-bootstrap/Button";
import Card from "../UI/Card/Card";
import styles from "./AddUser.module.css";
import { useRef, useState } from "react";
import ErrorModal from "../UI/Modal/ErrorModal";

const AddUser = (props) => {
  const nameRef = useRef();
  const ageRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addUserHandler = (event) => {
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setErrorMessage({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      setShowModal(true);
      return;
    }
    if (+age < 1) {
      setErrorMessage({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
      setShowModal(true);
      return;
    }
    console.log(name, age);
    props.addUser(name, age);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card>
        <form className={styles.input} onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={nameRef}></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageRef}></input>
          <Button className="w-100" type="submit" variant="primary">
            Add User
          </Button>
        </form>
      </Card>
      <ErrorModal
        show={showModal}
        handleClose={handleClose}
        body={errorMessage.message}
        header={errorMessage.title}
      ></ErrorModal>
    </>
  );
};

export default AddUser;
