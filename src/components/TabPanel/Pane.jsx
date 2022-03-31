import React, {Component} from "react";

class Pane extends Component {
    render() {
        return (
            <div className="Pane">
                {this.props.children}
            </div>
        );
    }
}

export default Pane;
