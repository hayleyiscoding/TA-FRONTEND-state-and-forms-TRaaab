import Button from "./Button";
import { buttonSizes, buttonTypes } from "../buttonInfo.js";
import { Component } from "react";

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "basketball",
    };
  }
  handleImageChange = (newImg) => {
    this.setState({
      image: newImg.toLowerCase(),
    });
  };
  render() {
    return (
      <>
        <div
          class='container flex justify-between'
          style={{ padding: "2rem 10rem" }}
        >
          {["Basketball", "cricket", "laptop", "phone", "pubG", "tiger"].map(
            (img) => (
              <Button
                type={buttonTypes.SECONDARY}
                size={buttonSizes.MEDIUM}
                label={img}
                onClick={() => this.handleImageChange(img)}
                image={this.state.image}
              />
            )
          )}
        </div>
        <div className='flex center'>
          <img
            src={`images/${this.state.image}.jpg`}
            alt={`${this.state.image}`}
          />
        </div>
      </>
    );
  }
}

export default ButtonGroup;
