import React from "react";


class Age extends React.Component {

constructor(props){
    super(props);
    this.state = {
        age: props.age
    }
}

componentWilReciveProps(nextProps) {

    this.setState(nextProps);
}

render() {

    return(
        
        <p>{this.state.age}</p>
        
    );
}

}

export default Age;