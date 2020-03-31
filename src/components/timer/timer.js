import React, { Component } from "react";

class Timer extends Component {
    state = {
        hour: new Date()
    }

    componentDidMount = () => {
    this.newHour = setInterval(
        () => this.setState({hour: new Date()}),1000)
    }

    componentDidUpdate = (_, prevState) => {
        if (this.state.hour !== prevState.hour){
            console.log("componentDidUpdate", "O horário mudou!")
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.state.hour);
}

    render(){
        return (
            <div>
                <h2> <i> Horário com temporizador (1000ms): </i> <br /> 
                {this.state.hour.toLocaleTimeString()}</h2>
            </div>                
        )
    }
}

export default Timer;