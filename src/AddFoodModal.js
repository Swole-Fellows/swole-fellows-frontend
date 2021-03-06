import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withAuth0 } from "@auth0/auth0-react";
import "./App.css";

class AddFoodModal extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name: this.props.selectedFood.foodName,
      calories: Math.round(
        (this.props.selectedFood.calories * event.target.formServing.value) /
          this.props.selectedFood.servingSize
      ),
      servingSize: Math.round(this.props.selectedFood.servingSize),
      fats: Math.round(
        (this.props.selectedFood.fats * event.target.formServing.value) /
          this.props.selectedFood.servingSize
      ),
      carbs: Math.round(
        (this.props.selectedFood.carbs * event.target.formServing.value) /
          this.props.selectedFood.servingSize
      ),
      protein: Math.round(
        (this.props.selectedFood.protein * event.target.formServing.value) /
          this.props.selectedFood.servingSize
      ),
      image: this.props.selectedFood.image,
      amountConsumed: event.target.formServing.value,
      timestamp: new Date(),
    };
    this.props.addFoodtoDB(newFood);
    this.props.onHide();
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formServing">
              <Form.Label>Enter the mass of food you are eating</Form.Label>
              <Form.Control type="name" placeholder="Enter serving size" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default withAuth0(AddFoodModal);
