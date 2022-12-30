import React from "react";

class Time extends React.Component {

    constructor (props) {

        super(props)
        this.state = {date: new Date()}
        this.timer = null

    }
    componentDidMount () {

        this.timer = window.setInterval(this.titi.bind(this), 1000)
        
    }

    componentWillUnmount () {
        window.clearInterval(this.timer)
    }
    titi () {
        this.setState({date: new Date()})
    }

render() {


    return <div>
la date et l'heure du jour sont :{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
    </div>
}
}

export default Time;