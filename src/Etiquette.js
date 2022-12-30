import React from "react";

class Etiquette extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            pseudo: props.pseudo

        }
    }

    componentWilReciveProps(nextProps) {

        this.setState(nextProps);
    }

    render() {

        return (

            <p>{stringToUppercase(this.state.pseudo)}</p>

        );
    }
}

function stringToUppercase(str) {

    return str.toUpperCase();
}


export default Etiquette;