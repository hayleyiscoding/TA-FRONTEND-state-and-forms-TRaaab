import { buttonSizes, buttonTypes } from "./components/buttonInfo";
import Button from "./components/Button";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 5,
      counter: 0,
    };
  }
  render() {
    return (
      <div className='container text-center'>
        <h1>Counter With a Twist</h1>
        <h2>{this.state.counter}</h2>
        <div>
          <h3>First, choose the steps:</h3>
          <div className='flex center step-buttons'>
            <Button
              type={buttonTypes.SECONDARY}
              size={buttonSizes.MEDIUM}
              label={5}
              steps={this.state.steps}
              onClick={() =>
                this.setState({
                  steps: 5,
                })
              }
            />
            <Button
              type={buttonTypes.SECONDARY}
              size={buttonSizes.MEDIUM}
              label={10}
              steps={this.state.steps}
              onClick={() =>
                this.setState({
                  steps: 10,
                })
              }
            />
            <Button
              type={buttonTypes.SECONDARY}
              size={buttonSizes.MEDIUM}
              label={15}
              steps={this.state.steps}
              onClick={() =>
                this.setState({
                  steps: 15,
                })
              }
            />
          </div>
        </div>
        <div className='flex center'>
          <Button
            type={buttonTypes.PRIMARY}
            size={buttonSizes.MEDIUM}
            label='Increment'
            onClick={() =>
              this.setState({
                counter: this.state.counter + this.state.steps,
              })
            }
          />
          <Button
            type={buttonTypes.PRIMARY}
            size={buttonSizes.MEDIUM}
            label='Decrement'
            onClick={() =>
              this.setState({
                counter: this.state.counter - this.state.steps,
              })
            }
          />
          <Button
            type={buttonTypes.PRIMARY}
            size={buttonSizes.MEDIUM}
            label='Reset'
            onClick={() =>
              this.setState({
                counter: 0,
              })
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
