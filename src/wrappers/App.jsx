import React, {Component} from "react";
import "./global_styles.less";
import "../theme_colors";

import MainNav from "../components/MainNav/MainNav";
import Routes from "./Routes";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lightboxOpen: null
        };

        window.appUtils = window.appUtils || {};

        this.calculateBreakpoint();

        appUtils.openLightBox = this.openLightBox.bind(this);
        appUtils.closeLightbox = this.closeLightbox.bind(this);

        this.resizeHandler = this.onWindowResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizeHandler);

        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                this.onWindowResize();
            });
        });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler);
    }

    openLightBox(jsx) {
        jQuery('#root').css('overflow', 'hidden');
        this.setState({ lightboxOpen: jsx });
    }
    closeLightbox() {
        jQuery('#root').css('overflow', '');
        this.setState({ lightboxOpen: null });
    }

    onWindowResize() {
        this.calculateBreakpoint();
    }

    calculateBreakpoint() {
        let bp = "xl";
        const docWidth = jQuery(document).width();

             if(docWidth < 544) bp = 'xs';
        else if(docWidth < 769) bp = 'sm';
        else if(docWidth < 992) bp = 'md';
        else if(docWidth < 1200)bp = 'lg';

        window.appUtils.breakpoint = bp;
    }

    render() {
        return (
            <div className={`App ${window.appUtils.breakpoint}`}>
                {location.pathname !== '/' &&
                    <MainNav />
                }
                <Routes />

                {this.state.lightboxOpen &&
                    <div className="lightbox-wrapper">
                        <div className="lightbox-overlay" onClick={this.closeLightbox.bind(this)} />
                        <div className="lightbox">
                            <i className="close-btn material-icons" onClick={this.closeLightbox.bind(this)}>close</i>
                            {this.state.lightboxOpen}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default App;
