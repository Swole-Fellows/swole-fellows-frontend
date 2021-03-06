import React from "react";
import { Container, Table } from "react-bootstrap";

class ProfileTable extends React.Component {
  componentDidMount() {
    this.props.getFoodsFromDB();
    this.props.getUserInfo();
  }
  render() {
    return (
      <Container id="profileTable">
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Current Weight</td>
              <td>{this.props.userInfo.currentWeight}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{this.props.userInfo.age}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{this.props.userInfo.height}</td>
            </tr>
            <tr>
              <td>sex</td>
              <td>{this.props.userInfo.sex}</td>
            </tr>
            <tr>
              <td>Daily Calories</td>
              <td>{this.props.userInfo.targetCal}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ProfileTable;
