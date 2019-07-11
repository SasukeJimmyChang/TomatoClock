import React from "react";
import logo from '../../logo.svg';
// import { CountDownTimer, LeftSideBar, RightSideBar, Footer } from '../../components';
import { CountDownTimer } from '../../components/CountDownTimer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      // <LeftSideBar />
      <CountDownTimer />
      // <RightSideBar />
      // <Footer />
    );
  }
}