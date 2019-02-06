import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import marked from 'marked';
import { ButtonToolbar,Button } from "react-bootstrap";
import { InputGroup,FormControl,FormGroup } from "react-bootstrap";
import {  Form,Input,Label,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import task1 from './tasks1.json';
class Test extends React.Component {
  constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleClickUpdate = this.handleClickUpdate.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.deleteChange = this.deleteChange.bind(this);
      this.updateChange = this.updateChange.bind(this);
      this.state= {
        input: "",
        des:0,
        list : task1.map((Taskdetails, index) =>{
          return <option value = {Taskdetails["task-name"]}>{Taskdetails["task-name"]}
          </option>
        }),
        message : task1.map((Taskdetails, index) =>{
          return Taskdetails["instructions"]

        }),  messageUpdate : task1.map((Taskdetails, index) =>{
            return Taskdetails["instructions"]

          }),
        due : task1.map((Taskdetails, index) =>{
            return Taskdetails["due"]

          }),
          status : task1.map((Taskdetails, index) =>{
              return Taskdetails["status"]

            }),
        index: 0
      }

    }
    updateChange(){

    }
    deleteChange(){
    this.setState({
      list : task1.map((Taskdetails, i) =>{
        if(this.state.index != i){
        return <option value = {Taskdetails["task-name"]}>{Taskdetails["task-name"]}
        </option>}
      }),

      message : task1.map((Taskdetails, i) =>{
        if(this.state.index != i){
        return Taskdetails["instructions"]
}
}),
      due : task1.map((Taskdetails, i) =>{
        if(this.state.index != i){
        return Taskdetails["due"]
}
}),
status : task1.map((Taskdetails, i) =>{
  if(this.state.index != i){
  return Taskdetails["status"]
}
})
    })

    }
    handleChange1(e) {

    this.setState({ input: e.target.value });
  }
  handleClick(e) {
    this.setState({
    messageUpdate : task1.map((Taskdetails, i) =>{
      if(this.state.index != i){
      return Taskdetails["instructions"]
  }else{
    return this.state.input
  }
})})
alert(this.state.messageUpdate)
 }
 handleClickUpdate(e){
   this.setState({
     message:this.state.messageUpdate
   })
 }
    handleChange(e){
let is =0;
      this.setState({
        selectValue:e.target.value,
        des :task1.map((Taskdetails, i) =>{
          if(Taskdetails["task-name"] == e.target.value){

            is= i
            return i;
          }
        }),
        index:is

      });

    }
    handleChange (evt) {
  this.setState({ [evt.target.name]: evt.target.value });
}

handleSubmit(event) {
  event.preventDefault();
  this.setState({
    error: '',
    success:false
  });
  let elements = this.state.tasks.slice();
  if(!this.state.editMode){
    elements.push({
      'task-name': this.state.taskName,
      'due': this.state.dueDate+'T'+this.state.dueTime+':00.000Z',
      'status': this.state.status,
      'instructions': this.state.instructions
    });
  }else{
    const nextState = this.state.tasks.map((task,index) => {
        if(this.state.taskName === task["task-name"]){
          return {
            ...task,
            "task-name": this.state.taskName,
            due: this.state.dueDate+'T'+this.state.dueTime+':00.000Z',
            status: this.state.status,
            instructions: this.state.instructions
          }
        }
        return task;
    });
    elements = nextState;
  }

  this.setState({
    success: true,
    addForm:false,
    tasks:elements
  });
}
    render(){
      let mess = this.state.message
      let du = this.state.due
      let stat = this.state.status

    return (

      <div>
      <select value={this.state.selectValue} onChange={this.handleChange}>

        {this.state.list}
         })}

      </select >
      <p>

          <ReactMarkdown source = {this.state.message[this.state.index]}
          />
      </p>

   <input type="text" onChange={ this.handleChange1 } />
        <input
          type="button"
          value="Update Instructions"
          onClick={this.handleClick}
        />
        <input type="text" onChange={ this.handleChange1 } />
             <input
               type="button"
               value="Update Status"
               onClick={this.handleClick}
             />
             <input type="text-area" onChange={ this.handleChange1 } />
                  <input
                    type="button"
                    value="Update due"
                    onClick={this.handleClick}
                  />
      <ButtonToolbar>

<Button bsStyle="primary"  onClick ={this.deleteChange}>Delete</Button>


<Button bsStyle="primary" onClick= {this.handleClickUpdate}>Update</Button>


<Button bsStyle="primary">Insert</Button>
</ButtonToolbar>

      </div>
    );

  }}

 export default Test;
 