import React, {Component} from "react";
import "./ProjectSection.less";

const info = [
    {
        'title': 'Clarametrics',
        'date': '2016 &ndash; 2018',
        'short_desc': 'Details of project above, in the work experience section. This section provides a few additional details. The project went through a few design iterations, so became very refined both in design and functionality. 99% of all the coding effort and 100% of all architecture, optimization, and development research was through my efforts. This project qualified for several grants which helped pay for hosting, design efforts, and other startup requirements.',
        'additional_desc': `<b>Skills</b>: adobe analytics, amazon web services (AWS), angularjs, big data, cron, css, database design, django, es6, git, google analytics, google charts, highcharts, html, javascript, jquery, less, linux, postgresql, project management, python, rest apis, slack, tech architecture, trello, webpack`
    },
    {
        'title': 'Borders App',
        'date': '2016',
        'short_desc': 'Created a unique app that draws persistent borders on the screen, either pre-made designs or user custom images. App is well designed natively and takes advantage of many android features. This app was revolutionary before many other apps started copying the same type of concept, but with much less functionality.',
        'additional_desc': `<a href="https://play.google.com/store/apps/details?id=com.stuartrosk.borders.full">Google Play store link</a>
        <br><br>
        <b>Skills</b>: android, git, java, photoshop`
    },
    {
        'title': 'Bacon Hut LLC',
        'date': '2015',
        'short_desc': 'Created a food vendor that serves all kinds of bacon goodness with the goal of becoming a full fast food restaurant. This business was proof of concept to hopefully creating a brick and mortar establishment in the future. Designed brand and all graphics, along with informational website. Concept was very successful, breaking even within a single summer. Several local restaurants were "influenced" by some of our ideas because of the success and taste.',
        'additional_desc': `<b>Skills</b>: cooking, css, git, html, javascript, linux`
    },
    {
        'title': 'Softball App',
        'date': '2015',
        'short_desc': 'A final project for bachelor\'s degree was designing and building a responsive softball app for tracking tournaments. Was the most senior skill-wise in the class, even educating the professor on architecting aspects. Helped guide the class of about 30 students on all aspects of the project, both front and back-end.',
        'additional_desc': `<b>Skills</b>: asp.net, c#, css, database design, entity framework, html, knockoutjs, javascript, mssql, mvc, project management, sql server, tfs`
    },
    {
        'title': '5P- Website',
        'date': '2014',
        'short_desc': 'Designed and created from scratch the new 5P- website, based on the gpeasy cms. Complex in that the timeline was tight and had to be built where anyone with limited skill level could edit the content. The website has been since redesigned, but many aspects were carried over to the new website.',
        'additional_desc': `<b>Skills</b>: css, database design, gpeasy, html, javascript, jquery, mysql, php, project management, twitter bootstrap`
    },
    {
        'title': 'Tubby Tap App',
        'date': '2014',
        'short_desc': 'Created an android app that was initially a simple python game for a college class. Incorporating the game into android ended up being quite difficult given the technology difference, but was able to publish a full game. The app included several analytics aspects, as well as full achievements to visualize how much users were playing.',
        'additional_desc': `<a href="https://play.google.com/store/apps/details?id=com.stuartrosk.tubbytap">Google Play store link</a>
        <br><br>
        <b>Skills</b>: android, c++, git, google analytics, java, pgs4a, photoshop, python`
    },
];

class ProjectSection extends Component {
    openDetails(idx) {
        let jsx = <div className={`ProjectSection ${window.appUtils.breakpoint}`}>
                    {this.renderLineItem(true, info[idx], idx)}
                  </div>;
        appUtils.openLightBox(jsx);
    }

    render() {
        return (
            <div className={`ProjectSection ${window.appUtils.breakpoint}`}>
                {info.map(this.renderLineItem.bind(this, false))}
            </div>
        );
    }

    renderLineItem(isLightbox, data, i) {
        return (
            <div className="line-item" key={i}>
                <div className={`item-date ${isLightbox ? 'no-margin' : ''}`} dangerouslySetInnerHTML={{ __html: data.date }} />
                <h2>{data.title}</h2>
                {isLightbox && <br />}
                <div className="short-description" dangerouslySetInnerHTML={{ __html: data.short_desc }} />
                {data.additional_desc && !isLightbox &&
                    <div className="more-details" onClick={this.openDetails.bind(this, i)}>More Details...</div>
                }
                {isLightbox && <br />}
                {isLightbox &&
                    <div className="short-description" dangerouslySetInnerHTML={{ __html: data.additional_desc }} />
                }
            </div>
        );
    }
}

export default ProjectSection;
