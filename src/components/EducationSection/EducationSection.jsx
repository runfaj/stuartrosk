import React, {Component} from "react";
import "./EducationSection.less";

const info = [
    {
        "school": "Weber State University",
        "degree": "Bachelor of Computer Science",
        "date": "2015",
        "description": "ABET Accredited, additional activities included the USU Baja Team"
    },
    {
        "school": "Weber State University",
        "degree": "Associate of Computer Science",
        "date": "2013",
        "description": ""
    },
    {
        "school": "Weber State University",
        "degree": "Associate of General Studies",
        "date": "2007",
        "description": ""
    },
];

class EducationSection extends Component {
    openDetails(idx) {
        let jsx = <div className={`EducationSection ${window.appUtils.breakpoint}`}>
                    {this.renderLineItem(true, info[idx], idx)}
                  </div>;
        appUtils.openLightBox(jsx);
    }

    render() {
        return (
            <div className={`EducationSection ${window.appUtils.breakpoint}`}>
                {info.map(this.renderLineItem.bind(this, false))}
            </div>
        );
    }

    renderLineItem(isLightbox, data, i) {
        return (
            <div className="line-item" key={i}>
                <h2>{data.degree}</h2>
                <div className={`item-date ${isLightbox ? 'no-margin' : ''}`} dangerouslySetInnerHTML={{ __html: data.date }} />
                <h3>{data.school}</h3>
                {isLightbox && <br />}
                <div className="short-description" dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>
        );
    }
}

export default EducationSection;
