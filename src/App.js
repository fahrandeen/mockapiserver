import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StudentList } from "./Components/StudentList";
import { StudentForm } from "./Components/StudentForm";
import { addNewStudent, generateId, findById, toggleStudent, updateStudent } from "./library/lib";
import axios from "axios";

const baseURL = "https://5e84ace8a8fdea00164aca94.mockapi.io/students";

class App extends Component {
  state = {
    students: [],
    isLoaded: false,
    error: "",
    studentName: "",
    studentAge: "",
    studentStatus: "",
  };

  componentDidMount() {
    fetch("https://5e84ace8a8fdea00164aca94.mockapi.io/students")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            students: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newId = generateId();
    console.log(newId);
    const newStudent = {
      id: newId,
      studentName: this.state.studentName,
      studentAge: this.state.studentAge,
      studentStatus: this.state.studentStatus,
    };
    const addedStudent = addNewStudent(this.state.students, newStudent);
    this.setState({
      students: addedStudent,
      error: "",
      studentName: "",
      studentAge: "",
      studentStatus: "",
    });
    axios.post(
      "https://5e84ace8a8fdea00164aca94.mockapi.io/students",
      newStudent,
      {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    );
  };
  
  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      error: "Fields can not be empty!",
    });
  };

  toggleStudent = (id) => {
    const student = findById(this.state.students, id)
    const toggledStudent = toggleStudent(student)
    const updatedStudents = updateStudent(this.state.students, toggledStudent)
    this.setState({
      students: updatedStudents
    })
    axios.put(
     `${baseURL}/${id}`, toggledStudent)
  }

  render() {
    const submitHandler =
      this.state.studentName && this.state.studentAge
        ? this.handleSubmit
        : this.handleEmptySubmit;
    return (
      <Container>
        <Row>
          <Col>
            <StudentForm
              handleInputChange={this.handleInputChange}
              handleSubmit={submitHandler}
              error={this.state.error}
              studentName={this.state.studentName}
              studentAge={this.state.studentAge}
              studentStatus={this.state.studentStatus}
            />
          </Col>
          <Col>
            <StudentList
              students={this.state.students}
              toggleStudent={this.toggleStudent}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
