import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class btn extends React.Component {
	constructor(props){
		super();
	}
  render() {
    return <div>
      <ButtonGroup>
        <Button>Left</Button>
      	<button onClick={this.props.changeQ.bind(this, 1)}>Forward</button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </div>
  }
}

export default btn;