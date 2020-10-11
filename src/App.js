import React, { Component } from "react";

class App extends Component {
  state = {
    Studentlists: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Youseop", age: 25, belt: "Yellow", id: 2 },
      { name: "Jiwoon", age: 23, belt: "Red", id: 3 },
    ],
  };

  render() {
    return <div>hello</div>;
  }
}

export default App;
