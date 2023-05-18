// import React, { Component } from "react";
// import "./App.css";
// import Modal from "./components/Modal/Modal";
// import Backdrop from "./components/Backdrop/Backdrop";
// import List from "./components/List/List";

// class App extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   showModal = () => {
//     this.setState({ isModalOpen: true });
//   };

//   closeModal = () => {
//     this.setState({ isModalOpen: false });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>React Animations</h1>
//         <Modal show={this.state.isModalOpen} closed={this.closeModal} />
//         <Backdrop show={this.state.isModalOpen} />
//         <button className="Button" onClick={this.showModal}>
//           Open Modal
//         </button>
//         <h3>Animating Lists</h3>
//         <List />
//       </div>
//     );
//   }
// }

// export default App;

//------------------------------------------------------------------------
//

/* 
Showing CSS transition/ animation limitation regarding React rendering
- modalOpen animation is still visible, OK
- modalClose animation is lost: React does not wait for modalClose animation re-render the modal

*/

import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false,
  };

  showModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
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
