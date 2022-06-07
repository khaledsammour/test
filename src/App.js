import React from "react";

import Home from "./components/home";
import Secound from "./components/secoundPage";
import Headers from "./components/header";

import { useState } from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
    this.Pages = this.Pages.bind(this);
  }

  Pages(index) {
    this.setState({ page: index });
  }

  render() {
    return (
      <>
        <Headers callBack={this.Pages} />
        {this.state.page === 0 && <Home />}
        {this.state.page === 1 && <Secound />}
        {this.state.page === 2 && <Secound />}
      </>
    );
  }
}

export default App;
