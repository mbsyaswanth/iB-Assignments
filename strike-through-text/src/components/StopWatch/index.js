import React, { Component } from 'react';

import './styles.css'

class StopWatch extends Component {
    state = {
        minutes: 0,
        secs: 0,
        laps: [],
        intervalId:0
    }
    
    updateTimmer = () => {
        if(this.state.secs===60){
            this.setState({
                minutes: this.state.minutes+1,
                secs:0
            })  
        } else {
            this.setState({
                secs:this.state.secs+1
            })
        }
    }

    onStartClick = () => {
        let interval = setInterval(this.updateTimmer,1000);
        this.setState({
            intervalId:interval
        })
    }

    onStopClick =() => {
        clearInterval(this.state.intervalId);
    }

    onLapClick = () => {
        this.setState(
            {
                laps: this.state.laps.concat(this.state.minutes+":"+this.state.secs)
            }
        )
    }

    onResetClick = () => {
        this.setState(
            {
                minutes: 0,
                secs: 0,
                laps: []
            }
        )
    }
    
    lapCalculator= (a,b) => {
        let start = a.split(":");
        let end = b.split(":");
        let startsecs=start[0]*60+start[1];
        let endsecs=end[0]*60+end[1];
        let diff = endsecs-startsecs;
        console.log(diff);
        console.log(Math.floor(diff/60)+":"+diff%60)
        return (Math.floor(diff/60)+":"+diff%60);
    }

    render() {
        return (
            <div className="stop-watch-container">
                <div className="stop-watch">
                   
                        <div className="stop-watch-minutes">{this.state.minutes}</div>
                        <div className="stop-watch-secs">{this.state.secs}</div>
                    
                </div>
                <div>
                    <ul className="undotted-list">
                    {
                        this.state.laps.length===0?"":
                        this.state.laps.map(
                            (lap,index,laps) => {
                                return <li> <span>#{index+1}</span> {index===0?lap:<span>{this.lapCalculator(laps[index-1],lap)}</span> }  <span>{lap}</span> </li>
                            }
                        )
                    }
                    </ul>
                </div>
                <div className="stop-watch-controls">
                   <button className="stp-watch-btn" disabled={!this.state.secs} onClick={this.onLapClick}>Lap</button>
                   <button className="stp-watch-btn" disabled={this.state.secs} onClick={this.onStartClick}>Start</button>
                   <button className="stp-watch-btn" onClick={this.onStopClick}>Stop</button>
                   <button className="stp-watch-btn" onClick={this.onResetClick}>Reset</button>
                </div>
            </div>
        );
    }
}

export default StopWatch;
