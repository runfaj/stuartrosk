import React, {Component} from "react";
import "./Home.less";

import MainNav from "../../components/MainNav/MainNav";
import JumpNav from "./JumpNav/JumpNav";
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import WorkSection from "../../components/WorkSection/WorkSection";
import EducationSection from "../../components/EducationSection/EducationSection";
import AwardsSection from "../../components/AwardsSection/AwardsSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import SkillsSection from "../../components/SkillsSection/SkillsSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ClientsSection from "../../components/ClientsSection/ClientsSection";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            docHeight: this.getDocHeight(),
            jumpNavCollapsed: false,
            activeSection: 0,
        };

        this.sections = [];

        this.scrollHandler = this.onScroll.bind(this);
        this.resizeHandler = this.onWindowResize.bind(this);
    }

    componentDidMount() {
        jQuery('#root').on('scroll', this.scrollHandler);
        window.addEventListener('resize', this.resizeHandler);

        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                this.onWindowResize();
            });
        });
    }
    componentWillUnmount() {
        jQuery('#root').off('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.resizeHandler);
    }

    getDocHeight() {
        return jQuery('html').height();
    }

    onWindowResize() {
        this.setState({ docHeight: this.getDocHeight() });

        if(location.hash && location.hash.replace('#','')) {
            this.sections.forEach((section, i)=>{
                if(jQuery(section).data('section') == location.hash.replace('#',''))
                    this.onJump(i);
            });
        }
    }

    onJump(sectionI) {
        const scrollPos = jQuery('#root').scrollTop();
        let sectionOffset = jQuery(this.sections[sectionI]).offset().top;
        let diffFromDesired = sectionOffset - 160;

        jQuery('#root').animate({
            scrollTop: scrollPos + diffFromDesired
        });
    }

    onScroll() {
        let {activeSection, docHeight} = this.state;

        this.sections.forEach((section,i)=>{
            let sectionOffset = jQuery(section).offset().top;

            //check jump nav
            if(i === 1) {
                if(this.state.jumpNavCollapsed && sectionOffset > 179)
                    this.setState({ jumpNavCollapsed: false });
            }

            //check active section
            if(sectionOffset < 180) {
                activeSection = i;

                //check jump nav
                if(i === 1 && !this.state.jumpNavCollapsed) {
                    this.setState({ jumpNavCollapsed: true });
                }
            }
        });

        if(this.state.activeSection != activeSection) {
            this.setState({ activeSection });
            if(activeSection > 0)
                window.location.hash = "#" + jQuery(this.sections[activeSection]).data('section');
            else
                window.location.hash = "";
        }
    }

    render(){
        return(
            <div className={`Home ${window.appUtils.breakpoint}`}>
                {this.state.jumpNavCollapsed &&
                    <MainNav />
                }
                {this.state.jumpNavCollapsed &&
                    <JumpNav
                        onJump={this.onJump.bind(this)}
                        sections={this.sections}
                        collapsed={true}
                        activeSection={this.state.activeSection}
                    />
                }
                <div
                    className="section intro"
                    style={{ height: this.state.docHeight }}
                    ref={el=>this.sections[0]=el}
                    data-section="intro"
                >
                    <div className="section-inner">
                        <BusinessCard />
                        {!this.state.jumpNavCollapsed &&
                            <JumpNav
                                onJump={this.onJump.bind(this)}
                                sections={this.sections}
                            />
                        }
                    </div>
                    <i className="material-icons scroll-down" onClick={this.onJump.bind(this, 1)}>keyboard_arrow_down</i>
                    {/* //// uncomment and update this when job searching again
                    <a className="resume-link" href="https://docs.google.com/document/d/1WcIdYZZrH5RKe3bGXyy4Thw2ojbLba9ylRYiY1u4Y8c/edit?usp=sharing" target="_blank">
                        {window.appUtils.breakpoint !== 'xs' && window.appUtils.breakpoint !== 'sm'
                            ? 'Printable Résumé'
                            : 'Résumé'
                        }
                        <i className="material-icons">description</i>
                    </a> */}
                </div>
                <div
                    className="section work"
                    ref={el=>this.sections[1]=el}
                    data-section="work"
                >
                    <h1 className="section-title">Work Experience</h1>
                    <div className="section-inner">
                        <WorkSection />
                    </div>
                </div>
                <div
                    className="section education"
                    ref={el=>this.sections[2]=el}
                    data-section="education"
                >
                    <h1 className="section-title">Education</h1>
                    <div className="section-inner">
                        <EducationSection />
                    </div>
                </div>
                <div
                    className="section awards"
                    ref={el=>this.sections[3]=el}
                    data-section="awards"
                >
                    <h1 className="section-title">Awards &amp; Certifications</h1>
                    <div className="section-inner">
                        <AwardsSection />
                    </div>
                </div>
                <div
                    className="section projects"
                    ref={el=>this.sections[4]=el}
                    data-section="projects"
                >
                    <h1 className="section-title">Notable Projects</h1>
                    <div className="section-inner">
                        <ProjectSection />
                    </div>
                </div>
                <div
                    className="section skills"
                    ref={el=>this.sections[5]=el}
                    data-section="skills"
                >
                    <h1 className="section-title">Skills &amp; Hobbies</h1>
                    <div className="section-inner">
                        <SkillsSection />
                    </div>
                </div>
                <div
                    className="section clients"
                    ref={el=>this.sections[6]=el}
                    data-section="clients"
                >
                    <h1 className="section-title">Feedback &amp; Clients</h1>
                    <div className="section-inner">
                        <ClientsSection />
                    </div>
                </div>
                <div
                    className="section about"
                    ref={el=>this.sections[7]=el}
                    data-section="about"
                >
                    <h1 className="section-title">About Me</h1>
                    <div className="section-inner">
                        <AboutSection />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
