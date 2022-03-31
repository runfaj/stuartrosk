import React, {Component} from "react";
import "./AwardsSection.less";

const info = [
    {
        "title": "Tealium Certified Professional",
        "from": "Tealium",
        "date": "Aug 2015",
        "description": "For Advanced Solutions & Deployments",
    },
    {
        "title": "Achievement Award",
        "from": "USU Research Foundation",
        "date": "May 2012",
        "description": "Outstanding performance. Specifically on the Basis of Estimate (BOE) project.",
    },
    {
        "title": "Ford Maintenance and Light Repair",
        "from": "Ford Automotive",
        "date": "May 2008",
        "description": "",
    },
    {
        "title": "New Century Scholarship",
        "from": "State of Utah",
        "date": "Sep 2007",
        "description": "Received scholarship for receiving Associates Degree quickly, with high GPA.",
        "long_description": `Received large scholarship based on the following requirements:
<ul>
    <li>Above 3.5 gpa throughout Associates Degree.</li>
    <li>Earn Associates Degree before the September following high school graduation.</li>
    <li>Maintain 3.0+ gpa during use of the scholarship.</li>
</ul>
Benefits:
<br/><br/>
75% of tuition covered for first 60 credits or 4 years (whichever comes first) after receiving.`,
    },
    {
        "title": "Various Track / Cross-country Awards",
        "from": "Weber High School",
        "date": "2003 &ndash; 2007",
        "description": "Was team captain for two years during high school. Received many awards in racing and team leadership throughout whole running career. Was selected to run for several colleges, but decided to serve/minister for two years instead.",
    },
    {
        "title": "Eagle Scout Award",
        "from": "Boy Scouts of America",
        "date": "2002",
        "description": "",
    },
];

class AwardsSection extends Component {
    openDetails(idx) {
        let jsx = <div className={`AwardsSection ${window.appUtils.breakpoint}`}>
                    {this.renderLineItem(true, info[idx], idx)}
                  </div>;
        appUtils.openLightBox(jsx);
    }

    render() {
        return (
            <div className={`AwardsSection ${window.appUtils.breakpoint}`}>
                {info.map(this.renderLineItem.bind(this, false))}
            </div>
        );
    }

    renderLineItem(isLightbox, data, i) {
        return (
            <div className="line-item" key={i}>
                <h2>{data.title}</h2>
                <div className={`item-date ${isLightbox ? 'no-margin' : ''}`} dangerouslySetInnerHTML={{ __html: data.date }} />
                <h3>{data.from}</h3>
                {isLightbox && <br />}
                <div className="short-description" dangerouslySetInnerHTML={{ __html: data.description }} />
                {data.long_description && !isLightbox &&
                    <div className="more-details" onClick={this.openDetails.bind(this, i)}>More Details...</div>
                }
                {isLightbox && <br />}
                {isLightbox &&
                    <div className="short-description" dangerouslySetInnerHTML={{ __html: data.long_description }} />
                }
            </div>
        );
    }
}

export default AwardsSection;
