import { Component } from "react";
import { buttonSizes, buttonTypes } from "./buttonInfo";
import Button from "./components/Button";
import HouseNames from "./components/HouseNames";
import People from "./components/People";
import Title from "./components/Title";
import { data } from "./data";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      activeHouse: "",
      activePerson: "",
    };
  }
  updateHouse = (house) => {
    this.setState({
      activeHouse: house,
    });
  };
  updatePerson = (person) => {
    this.setState({
      activePerson: person,
    });
  };
  render() {
    if (this.state.activeHouse && this.state.activePerson) {
      let peopleOfSelectedHouse = data.find(
        (h) => h.name === this.state.activeHouse
      ).people;
      let indexOfPeople = peopleOfSelectedHouse.findIndex(
        (p) => p.name === this.state.activePerson
      );

      if (indexOfPeople === -1) {
        setTimeout(() => alert("Sorry, not a match. Try Again!"), 100);
        // this.setState({ activeHouse: "", activePerson: "" });
      } else {
        setTimeout(() => alert("It's a match!!"), 100);

        // this.setState({ activeHouse: "", activePerson: "" });
      }
    }
    return (
      <div className='container text-center'>
        <h1>GOT Match</h1>
        <Title title='Select One House:' />
        <HouseNames
          activeHouse={this.state.activeHouse}
          updateHouse={this.updateHouse}
        />
        <Title title='Select One Person:' />
        <People
          activePerson={this.state.activePerson}
          updatePerson={this.updatePerson}
        />
        <Button
          type={buttonTypes.PRIMARY}
          size={buttonSizes.MEDIUM}
          label='Reset'
          onClick={() => this.setState({ activeHouse: "", activePerson: "" })}
        />
      </div>
    );
  }
}

export default App;
