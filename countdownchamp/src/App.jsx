import React, { Component } from 'react';
import Clock from './Clock'
import StopWatch from './StopWatch'
import './App.css'
import {Form, FormControl, Button} from 'react-bootstrap'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: '',
      stopWatchHours: '00',
      stopWatchMinutes: '00',
      newStopWatchHours: '',
      newStopWatchMinutes: ''
    }
  }

  ChangeDeadline()
  {
    this.setState({deadline:this.state.newDeadline});
  }

  ChangeStopWatchTime()
  {
    this.setState({stopWatchHours:this.state.newStopWatchHours,
      stopWatchMinutes: this.state.newStopWatchMinutes });
  }

  render(){
    return(
      <div className="App">
        <div className="App-tittle">CountDown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
        <StopWatch
          stopWatchHours={this.state.stopWatchHours}
          stopWatchMinutes={this.state.stopWatchMinutes}
        />

        <Form inline>
          <FormControl
            className = "Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={()=> this.ChangeDeadline()}>
            Submit Deadline
          </Button>
        </Form>

        <Form inline>
          <FormControl
            className = "Deadline-input"
            placeholder='new Time'
            onChange={event => this.setState({newTime: event.target.value})}
          />
          <Button onClick={()=> this.ChangeStopWatchTime()}>
            Submit Time
          </Button>
        </Form>
      </div>
    )
  }

}

export default App;
