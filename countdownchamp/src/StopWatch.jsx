import React, { Component } from 'react';
import './App.css'

class StopWatch extends Component{
  constructor(props){
    super(props);
    this.state = {
      reminingHours: 0,
      reminingMinutes: 0,
      reminingSeconds: 0,
      targetTime: 0
    }
  }

  componentWillMount(){
    this.calculateTimeUntil(this.props.stopWatchSeconds);
  }

  componentDidMount(){
    setInterval(()=> this.calculateTimeUntil(this.props.stopWatchSeconds), 1000);
  }

  leadingZero(num){
    return num < 10 ? '0'+ num : num;
  }

  calculateTimeUntil(seconds){
    //const todayDate = new Date();
    //const newTimeToCount = new Date(todayDate.setSeconds(todayDate.getSeconds()+ seconds));

    //const newTimeToCount = new Date().getTime() + (1 * 60 * 60 * 1000);
    //const currentTime = Date.parse(time) - Date.parse(new Date());

    this.setState(this.state.counter++);
    var secondsToUse = seconds - this.state.counter;
    // this.setState(stopWatchSeconds: seconds-1);
    if(secondsToUse >= 0 ) {
      var reminingSeconds = Math.floor((secondsToUse) % 60);
      var reminingMinutes = Math.floor((secondsToUse/60) % 60);
      var reminingHours = Math.floor(secondsToUse/(60*60) % 24);
    }

    this.setState({reminingHours, reminingMinutes,reminingSeconds});
  }

  render(){
    return(
      <div>
        <div className="StopWatch-hours">{this.leadingZero(this.state.reminingHours)} Hours</div>
        <div className="StopWatch-minutes">{this.leadingZero(this.state.reminingMinutes)} Minutes</div>
        <div className="StopWatch-seconds">{this.leadingZero(this.state.reminingSeconds)} Seconds</div>
      </div>
    )
  }
}

export default StopWatch;
