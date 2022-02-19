import Button from "./Button";
import { buttonSizes, buttonTypes } from "../buttonInfo.js";

class ButtonGroup extends React.Component {
  Constructor(props) {
    super(props);
    this.state = {
      image: "basketball",
    };
  }
handleChange = () => {
    this.setState({
        image: this.state.image
    }
});
  render() {
    return (
      <>
        <div
          class='container flex justify-between'
          style={{ padding: "2rem 10rem" }}
        >
          {" "}
          <Button
            type={buttonTypes.SECONDARY}
            size={buttonSizes.MEDIUM}
            label='Basketball'
          />
          <Button
            type={buttonTypes.SECONDARY}
            size={buttonSizes.MEDIUM}
            label='PubG'
          />
          <Button
            type={buttonTypes.SECONDARY}
            size={buttonSizes.MEDIUM}
            label='Tiger'
          />
          <Button
            type={buttonTypes.SECONDARY}
            size={buttonSizes.MEDIUM}
            label='Phone'
          />
          <Button
            type={buttonTypes.SECONDARY}
            size={buttonSizes.MEDIUM}
            label='Laptop'
          />
          <Button
            type={buttonTypes.SECONDARY}
            size={buttonSizes.MEDIUM}
            label='Cricket'
          />
        </div>
        <div className='flex center'>
          <img src={`images/${this.state.image}.jpg`} alt='basketball' />
        </div>
      </>
    );
  }
}

export default ButtonGroup;
