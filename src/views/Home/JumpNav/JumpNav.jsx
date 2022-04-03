import React, {Component} from "react";
import "./JumpNav.less";

class JumpNav extends Component {
    onClick(i) {
        this.props.onJump(i);
    }

    render(){
        return(
            <div
                className={`JumpNav ${this.props.collapsed ? 'collapsed' : ''} ${window.appUtils.breakpoint}`}
            >
                {this.props.collapsed &&
                    <div
                        className={`jump-item intro ${this.props.activeSection === 0 ? 'active' : ''}`}
                        onClick={this.onClick.bind(this, 0)}
                    >
                        <i className="material-icons">home</i>
                        <span>Intro</span>
                    </div>
                }
                <div
                    className={`jump-item work ${this.props.activeSection === 1 ? 'active' : ''}`}
                    onClick={this.onClick.bind(this, 1)}
                >
                    <i className="material-icons">work</i>
                    <span>Work</span>
                </div>
                <div
                    className={`jump-item education ${this.props.activeSection === 2 ? 'active' : ''}`}
                    onClick={this.onClick.bind(this, 2)}
                >
                    <i className="material-icons">school</i>
                    <span>Education</span>
                </div>
                <div
                    className={`jump-item awards ${this.props.activeSection === 3 ? 'active' : ''}`}
                    onClick={this.onClick.bind(this, 3)}
                >
                    <i className="material-icons">card_membership</i>
                    <span>Awards</span>
                </div>
                <div
                    className={`jump-item projects ${this.props.activeSection === 4 ? 'active' : ''}`}
                    onClick={this.onClick.bind(this, 4)}
                >
                    <i className="material-icons">ballot</i>
                    <span>Projects</span>
                </div>
                <div
                    className={`jump-item skills ${this.props.activeSection === 5 ? 'active' : ''}`}
                    onClick={this.onClick.bind(this, 5)}
                >
                    <i className="material-icons">how_to_reg</i>
                    <span>Skills</span>
                </div>
                <div
                    className={`jump-item clients ${this.props.activeSection === 6 ? 'active' : ''}`}
                    onClick={this.onClick.bind(this, 6)}
                >
                    <i className="material-icons">supervisor_account</i>
                    <span>Feedback</span>
                </div>
                <div
                    className={`jump-item about ${this.props.activeSection === 7 ? 'active' : ''}`}
                    onClick={this.onClick.bind(this, 7)}
                >
                    <i className="material-icons">help</i>
                    <span>About Me</span>
                </div>
            </div>
        );
    }
}

export default JumpNav;
