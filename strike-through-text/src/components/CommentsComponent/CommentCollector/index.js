import React, { Component } from 'react';



class CommentCollector extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            input : "",
            time:""
         }
      }
      timeFinder= () => {
        const daysofweek=['Sun','Mon','Tues','Wed','Thus','Fri','Sat'];
        let date = new Date();
        let day=daysofweek[date.getDay()];
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        let now = day +" "+strTime;
        return now;
       }
      handleChange= (event) => {
          this.setState({
              input : event.target.value
          })
          console.log(this.state.input);
      }

      handleSubmit = () => {
          let cmnt = {
              comment:this.state.input,
              time:this.timeFinder()
          }
          this.props.addCmnt( cmnt)
          this.setState({
              input:""
          })
      }

    render() { 
        return ( 
            <div>
                <input type='text' className="stp-watch-btn" name='comment' value={this.state.input} 
    onChange={this.handleChange}/>
               <button type='submit' className="stp-watch-btn" onClick={this.handleSubmit}>Submit</button>
            </div>
         );
    }
}
 
export default CommentCollector;