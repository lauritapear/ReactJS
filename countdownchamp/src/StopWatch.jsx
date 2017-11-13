import React, { Component } from 'react';
import './App.css'

class StopWatch extends Component{
  constructor(props){
    super(props);
    this.state = {
      stopWatchHours: 0,
      stopWatchMinutes: 0,
      stopWatchSeconds: 0

    }
  }

  componentWillMount(){
    this.getTimeUntil(this.props.stopWatchHours, this.props.stopWatchMinutes);
  }

  componentDidMount(){
    setInterval(()=> this.getTimeUntil(this.props.stopWatchHours, this.props.stopWatchMinutes), 1000);
  }

  leadingZero(num){
    // if(num<10){
    //   return '0'+num;
    // }
    // return num;
    return num < 10 ? '0'+ num : num;
  }

  getTimeUntil(hours, minutes){
    const todayDate = new Date();
    const newTimeToCount = new Date(todayDate.setHours(todayDate.getHours()- hours));

    //const newTimeToCount = new Date().getTime() + (1 * 60 * 60 * 1000);
    //const currentTime = Date.parse(time) - Date.parse(new Date());
    const stopWatchSeconds = Math.floor((newTimeToCount/1000) % 60);
    const stopWatchMinutes = Math.floor((newTimeToCount/1000/60) % 60);
    const stopWatchHours = Math.floor(newTimeToCount/(1000*60*60) % 24);

    // this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds})
    this.setState({stopWatchHours, stopWatchMinutes,stopWatchSeconds});
  }

  render(){
    return(
      <div>
        <div className="StopWatch-hours">{this.leadingZero(this.state.stopWatchHours)} Hours</div>
        <div className="StopWatch-minutes">{this.leadingZero(this.state.stopWatchMinutes)} Minutes</div>
        <div className="StopWatch-seconds">{this.leadingZero(this.state.stopWatchSeconds)} Seconds</div>
      </div>
    )
  }
}


export default StopWatch;
