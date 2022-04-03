import React, {Component} from "react";
import "./MainNav.less";

class MainNav extends Component {

    getNavWidth() {
        let appWidth = jQuery('.App').width();
        return appWidth;
    }

    render(){
        return(
            <div
                className={`MainNav ${window.appUtils.breakpoint}`}
                style={{ width: this.getNavWidth() }}
            >
                <div className="right-side">
                    <div className="line-item">
                        <i className="material-icons">email</i>
                        <a href="mailto:me@stuartroskelley.com">me@stuartroskelley.com</a>
                    </div>
                    {/*
                    <div className="line-item">
                        <i className="material-icons">phone</i>
                        <a href="tel:"></a>
                    </div>
                    */}
                </div>

                <h1>Stuart Roskelley</h1>
            </div>
        );
    }
}

export default MainNav;
