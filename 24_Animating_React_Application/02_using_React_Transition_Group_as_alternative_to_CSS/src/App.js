import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
  state = {
    isModalOpen: false,
    isShowBlock: false,
  };

  showModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  toggleBlock = () => {
    this.setState({ isShowBlock: !this.state.isShowBlock });
  };

  render() {
    return (
      <div className="App">
        <h1>React Transition Group </h1>
        {/* ---------------------------------------------------------- */}
        <button onClick={this.toggleBlock}> Toggle block</button>
        {/* {this.state.isShowBlock ? ( */}
        <Transition
          in={this.state.isShowBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <React.Fragment>
              <p>transition state = {state}</p>
              <div
                style={{
                  backgroundColor: "red",
                  width: 100,
                  height: 100,
                  margin: "auto",
                  transition: "opacity 1000ms ease-out",
                  opacity: state === "exiting" ? 0 : 1,
                }}
              ></div>
            </React.Fragment>
          )}
        </Transition>
        {/* ) : null} */}
        {/* --------------------------------------------------------- */}
        <br /> <hr />
        {this.state.isModalOpen ? (
          <Modal show={this.state.isModalOpen} closed={this.closeModal} />
        ) : null}
        {this.state.isModalOpen ? (
          <Backdrop show={this.state.isModalOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
