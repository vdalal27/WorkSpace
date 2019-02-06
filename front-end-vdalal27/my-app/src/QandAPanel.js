import React from 'react';

class QandAPanel extends React.Component {
    constructor(props) {
      super();
    }

    render() {/* stuff */
      let answerClass = "currentA ";
      if (this.props.showA) {
        answerClass += "onScreen";
      } else {
        answerClass += "offScreen";
      }
      let question = "";
      let answer = "";
      if (this.props.qAndAs.length !== 0) {
        question = this.props.qAndAs[this.props.curQ].question;
        answer = this.props.qAndAs[this.props.curQ].answer;
      }
      return <div>
              <h1>Hello CS651 from React</h1>
              <h2>Question</h2>
              <p>{question}</p>
              <section className={answerClass}>
              <h2>Answer</h2>
              <p>{answer}</p>
              </section>
          </div>
    }
}

export default QandAPanel;
