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
        console.log(start);
        let end = b.split(":");
        
        console.log(parseInt(end[0],10)-parseInt(start[0],10)+":"+parseInt(end[1],10)-parseInt(start[1],10));
        return parseInt(end[0],10)-parseInt(start[0],10)+":"+parseInt(end[1],10)-parseInt(start[1],10)
    }

    render() {
        return (
            <div>
                <div>
                    <div>{this.state.minutes}</div>
                    <div>{this.state.secs}</div>
                </div>
                <div>
                    {
                        this.state.laps.length===0?"":
                        this.state.laps.map(
                            (lap,index,laps) => {
                                return <li> <span>#{index+1}</span> {index===0?lap:this.lapCalculator(laps[index-1],lap)} <span></span> <span>{lap}</span> </li>
                            }
                        )
                    }
                </div>
                <div>
                   <button onClick={this.onLapClick}>Lap</button>
                   <button onClick={this.onStartClick}>Start</button>
                   <button onClick={this.onStopClick}>Stop</button>
                   <button onClick={this.onResetClick}>Reset</button>
                </div>
            </div>
        );
    }
}

export default StopWatch;
