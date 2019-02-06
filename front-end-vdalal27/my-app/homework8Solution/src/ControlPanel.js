import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class ControlPanel extends React.Component {
    constructor(props) {
      super();
    }

    render() {
      let showHide = "Show Answer";
      if (this.props.showA) {
        showHide = "Hide Answer";
      }
      let createShowHide = "";
      if (this.props.showQCreate) {
        createShowHide = "Hide Question Creator";
      } else {
        createShowHide = "Show Question Creator";
      }
      return <section>
      <div>
      <button onClick={this.props.changeQ.bind(this, 1)}>Forward</button>
      <button onClick={this.props.changeQ.bind(this, -1)}>Back</button>
      <button onClick={this.props.toggleAnswer}>{showHide}</button>
      <button onClick={this.props.toggleQCreate}>{createShowHide}</button>
      <button onClick={this.props.delQandA}>Delete Current Question</button>
      </div>
      <p>Question {this.props.curQ + 1} of {this.props.qAndAs.length}</p>
      </section>
    }
}

export default ControlPanel;
