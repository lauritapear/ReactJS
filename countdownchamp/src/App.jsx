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
      stopWatchSeconds: '150',
      newStopWatchSeconds: ''
    }
  }

  ChangeDeadline()
  {
    this.setState({deadline:this.state.newDeadline});
  }

  ChangeStopWatchTime(seconds)
  {
    this.setState({stopWatchSeconds:this.state.newStopWatchSeconds});
  }

  render(){
    return(
      <div className="App">
        <div className="App-tittle">CountDown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
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

        <div className="App-tittle">StopWatch</div>
        <StopWatch
          stopWatchSeconds={this.state.stopWatchSeconds}
        />
        <Form inline>
          <FormControl
            className = "StopWatch-input"
            placeholder='Stop Watch Seconds'
            onChange={event => this.setState({newStopWatchSeconds: event.target.value})}
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
