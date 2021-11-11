import React from "react";
import img from "./love.jpg";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    isVisible: false,
  };
  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  state = {
    Person: {
      fullNAME: "kahloul sami ",
      bio: `je suis étudiant.`,
      profession: "Developpeur Web",
    },
    show: false,
  };
  
  render() {
    return (
      <div className="App">
        <h1>Workshop React State</h1>
        <button onClick={this.toggleVisibility} className="visibility-btn">
          {this.state.isVisible ? "Hide Person" : "Show Person"}
        </button>
        {this.state.isVisible && (<Person Person={this.state.Person} >
          <img src={img} alt="Moi" />
          </Person>)}
      </div>
         
      
    );
  }
}

export default App;
