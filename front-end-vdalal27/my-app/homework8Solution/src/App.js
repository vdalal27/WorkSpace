import React from 'react';
import qAndAs from './QandA.json';
import QandAPanel from './QandAPanel.js';
import ControlPanel from './ControlPanel.js';
import QCreator from './QCreator.js';

class App extends React.Component {
    constructor(props) {
      super();
      this.state = {qAndAs: qAndAs, curQ: 0, showA: true, showQCreate: false};
    }

    changeQuestion(num) {
      let newIndex = this.state.curQ + num;
      if (newIndex < 0) {
        newIndex += this.state.qAndAs.length;
      }
      newIndex %= this.state.qAndAs.length;
      this.setState({curQ: newIndex});
    }

    toggleAnswer() {
      this.setState({showA: !this.state.showA});
    }

    toggleQCreate() {
      this.setState({showQCreate: !this.state.showQCreate});
    }

    addQandA(question, answer) {
      let newQAs = this.state.qAndAs.concat({question: question, answer: answer})
      this.setState({qAndAs: newQAs});
    }

    delQandA() {
      let that = this;
      let newQAs = this.state.qAndAs.filter(function(x, i){
        return (i !== that.state.curQ);
      });
      this.setState({qAndAs: newQAs, curQ: 0});
    }

    render() {/* stuff */
      return <div>
              <section className="borderedSection">
              <ControlPanel qAndAs={this.state.qAndAs} curQ={this.state.curQ}
              showA={this.state.showA} changeQ={this.changeQuestion.bind(this)}
              showQCreate={this.state.showQCreate}
              toggleAnswer={this.toggleAnswer.bind(this)}
              toggleQCreate={this.toggleQCreate.bind(this)}
              delQandA={this.delQandA.bind(this)}
              />
              <QandAPanel qAndAs={this.state.qAndAs} curQ={this.state.curQ}
              showA={this.state.showA} />
              </section>
              <QCreator show={this.state.showQCreate}
              addQandA={this.addQandA.bind(this)}/>
          </div>
    }
}

export default App;
