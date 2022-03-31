import React, {Component} from "react";
import "./TabPanel.less";

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        };
    }

    handleClick(i) {
        this.setState({ selected: i });
    }

    render() {
        return (
            <div className="Tabs">
                <div className="tabs-labels">
                    {this.props.children.map((child, i)=>(
                        <div
                            key={i}
                            className={`tab-label ${this.state.selected === i ? 'selected' : ''}`}
                            onClick={this.handleClick.bind(this, i)}
                            style={{ borderColor: this.props.accentColor }}
                        >
                            {child.props.label}
                        </div>
                    ))}
                </div>
                <div className="tabs-content">
                  {this.props.children[this.state.selected]}
                </div>
            </div>
        );
    }
}

export default Tabs;
