import React from 'react';

/* Using the ref technique discussed in
  https://reactjs.org/docs/uncontrolled-components.html
*/

class QCreator extends React.Component {
    constructor(props) {
      super();
      this.answerTA = React.createRef();
      this.questionTA = React.createRef();
    }

    buttonClick() {
      console.log(`Question: ${this.questionTA.current.value}`);
      console.log(`Answer: ${this.answerTA.current.value}`);
      this.props.addQandA(this.questionTA.current.value, this.answerTA.current.value);
    }

    render() {
      let createQClass = "borderedSection ";
      if (this.props.show) {
        createQClass += "showStuff";
      } else {
        createQClass += "hideStuff";
      }
      return <section className={createQClass}>
      <textarea placeholder="Question" ref={this.questionTA}/>
      <textarea placeholder="Answer" ref={this.answerTA}/>
      <button onClick={this.buttonClick.bind(this)}>Add Question</button>
      </section>
    }
}

export default QCreator;
