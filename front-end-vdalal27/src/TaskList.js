import React from "react";
import ReactDOM from "react-dom";
import tasks from "./tasks1.json";
import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import { Tabs, Tab } from "react-bootstrap";
import { ButtonToolbar,Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Sonnet } from "react-bootstrap";
import { Nav, NavItem } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';



class TaskList extends React.Component {
constructor(props) {
super(props);
this.state = {
message : tasks.map((TaskDetails, index) =>{


return <li>TaskDetails[index]</li>;

})
};
}
render() {
const option = {};

const onReady = function(instance) {
console.log(instance.value());
};

const onEvents = {
'change': function() {
// the 'this' variable can get SimpleMDE instance
console.log(this.value());
}
};
return (
<Tab.Container id="left-tabs-example" defaultActiveKey={0}>
<Row>
<Col sm={3}>
<Nav variant="pills" className="flex-column">
{tasks.map((Task, index) => {
return (
<Nav.Item>
<Nav.Link eventKey={index}> {Task["task-name"]}</Nav.Link>
</Nav.Item>
);
})}
</Nav>
</Col>
<Col sm={9}>
<Tab.Content>
{tasks.map((Task, index) => {
return (
<Tab.Pane eventKey={index}>
<div class="highlight">
<pre>
<ReactMarkdown

source={Task.instructions}

/>
Status: {Task.status}, &nbsp;&nbsp;
Due Date : {Task.due}
</pre>
</div>
</Tab.Pane>
);
})}
</Tab.Content>
</Col>
</Row>
<ButtonToolbar>

<Button bsStyle="primary" >Delete</Button>


<Button bsStyle="primary">Update</Button>


<Button bsStyle="primary">Insert</Button>
</ButtonToolbar>

</Tab.Container>

);
}
}

export default TaskList;