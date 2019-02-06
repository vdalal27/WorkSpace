import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ButtonToolbar,Button } from "react-bootstrap";
import {  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import task1 from './tasks1.json';
class Instructions extends React.Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.deleteChange = this.deleteChange.bind(this);
      this.toggle = this.toggle.bind(this);

      this.state = {
        message : task1.map((TaskDetails, index) =>{


           return TaskDetails["instructions"];

       }),
       index:0,
        dropdownOpen: false,
        selectValue : "HW1.1"
      };
    }
    handleChange(e){
      alert(e.target.value)
      this.setState({
        selectValue:e.target.value,
        index : this.state.index+1

      });

    }
    deleteChange(e){
      this.setState({
        selectValue:e.target.value,
        message : task1.map((TaskDetails, index) =>{

         if(TaskDetails["task-name"] != this.state.selectValue){
           return TaskDetails["task-name"];
         }
       })
      });
      
    }
    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  render() {

    var messag='You selected '+this.state.selectValue;
    return (
      <div>
      <select value={this.state.selectValue} onChange={this.handleChange}>

         {task1.map((Taskdetails, index) =>{
           return <option value = {Taskdetails["task-name"]}>{Taskdetails["task-name"]}

           </option>
         })}

      </select>
      <p>

          <ReactMarkdown
              source={this.state.message[this.state.index]}
          />
      </p>
      <ButtonToolbar>

<Button bsStyle="primary" onClick ={this.deleteChange} >Delete</Button>


<Button bsStyle="primary">Update</Button>


<Button bsStyle="primary">Insert</Button>
</ButtonToolbar>

      </div>
    );

  }}
 export default Instructions;
 //  this.state.message = task1.map((TaskDetails, index) =>{
 //
 //   if(TaskDetails["task-name"] == this.state.selectValue){
 //     return TaskDetails["instructions"];
 //   }
 // })