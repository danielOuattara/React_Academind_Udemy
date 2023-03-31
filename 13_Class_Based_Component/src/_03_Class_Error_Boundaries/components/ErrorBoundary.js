import { Component } from "react";
import { createPortal } from "react-dom";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return createPortal(
        <p style={{ textAlign: "center" }}>ERROR: Something went wrong</p>,
        document.getElementById("error-portal"),
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

// this component will trigger any time a children throw an error
// you can as many error boundary component as like to handle any
// type of error separately
