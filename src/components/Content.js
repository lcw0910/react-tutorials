import React from 'react';


class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Title Initial state",
            content: "Content Initial State",
        };
    }
    updateTitle(text){
        this.setState({
            title: "Title has changed"
        });
    }
    render(){
        return (
            <div>
                <h2>{ this.state.title }</h2>
                <p> { this.props.body } </p>
                <button onClick={this.updateTitle.bind(this)}>Update</button>
            </div>
        );
    }
}

export default Content;