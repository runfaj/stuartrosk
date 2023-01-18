import React, {Component} from "react";
import "./WorkSection.less";

const info = [
    {
        'company': 'Grow.com (by Epicor)',
        'position': 'Product Development Manager & Frontend/Data Ops Lead Architect',
        'date': 'Nov 2018 &ndash; Present',
        'short_desc': 'Have designed and implemented many large architectural projects including a full permissions system, entire feature rewrites, significant security updates, team standards and documentation, warehousing and data transforming, and much more. Have led and mentored many individuals within the team creating a more stable product that customers can appreciate.',
        'additional_desc': `Currently wearing a few hats as:
        <ul>
        <li>Product Development Manager leading 2 teams for frontend and data operations</li>
        <li>Lead architect for frontend and data operations, as well as coordinating with other architects and product to design and implement new features, refactors, scaling, etc.</li>
        <li>Senior software engineer across the whole stack to fill in the rest of the day-to-day after the other two roles' responsibilities.</li>
        </ul>`
    },
    {
        'company': 'Allen Communication Learning Services',
        'position': 'Technical Lead / Technical Architect',
        'date': 'Jan 2017 &ndash; Nov 2018',
        'short_desc': 'Designed and built corporate training courses (onboarding, sales, etc.) for clients at national and international levels. In charge of managing all technical aspects of a client project, including working with a design team, managing additional development resources, and working with the project budgets. Introduced company to much more efficient task management and communication through slack and trello, saving tens of thousands over their previous methods.',
        'additional_desc': `Built courses that are highly available, fast, and responsive across as many devices as possible. Technologies varied based on client requirements, using several front-end technologies/frameworks (such as React), as well as backend technologies (such as C#). This also included R&D initiatives with AR/VR, mobile apps, etc.
<br><br>
<b>Skills</b>: amcharts, android, ar/vr, c#, css, database design, google analytics, handlebars, html, java, javascript, less, phaserjs, project management, react, sass, slack, tech architecture, trello, unity`
    },
    {
        'company': 'Clarametrics',
        'position': 'Co-founder / Lead Developer / CTO',
        'date': 'Jun 2016 &ndash; Apr 2018',
        'short_desc': 'Co-founder of Clarametrics, which provides executive-level dashboarding for analyzing ecommerce analytics. Designed all levels of the application, building a fully scaling, highly available product that processed millions of analytics data points from Google Analytics and Adobe Analytics.',
        'additional_desc': `Each hour the data is processed via AWS services, postgresql, and python. The dashboard was built with a fully extensible front-end using ES6 components with Angular. Included data caching to speed up network requests by over 95% of their raw loading time, putting this solution as one of the fastest applications in this space compared with the amount of data processing.
<br><br>
<b>Skills</b>: adobe analytics, amazon web services (AWS), angularjs, big data, cron, css, database design, django, es6, git, google analytics, google charts, highcharts, html, javascript, jquery, less, linux, postgresql, project management, python, rest apis, slack, tech architecture, trello, webpack`
    },
    {
        'company': 'Inteliquant Analysis Solutions',
        'position': 'Solutions Engineer / Technical Team Lead',
        'date': 'Mar 2013 &ndash; Jan 2017',
        'short_desc': 'Managed the technical portions for InteliQuant including creating and maintaining a linux server, several websites, and all advanced web technologies. Implemented tag management services for various clients mainly through Tealium, Adobe DTM, and Google Tag Manager. Included for many clients was implementing and analyzing Google Analytics and Adobe Analytics.',
        'additional_desc': `Internally, a large breadth of work from application development to database design to UX/UI design. Externally, worked directly with many clients such as Toys'R'Us, Yankee Candle, Vista Print, Texas Instruments, Party City, and more. Helped each client with both tag management and analytics implementation from start to finish, evaluating their needs, creating implementation plans, and following through on development and testing.
<br><br>
<b>Skills</b>: adobe analytics, adobe dtm, amazon web services (AWS), angularjs, apache, big data, coremetrics, cron, css, database design, git, google analytics, google tag manager, html, javascript, jquery, knockoutjs, linux, mysql, php, postgresql, project management, python, rest apis, slack, tealium, tech architecture, trello, twitter bootstrap, wordpress`
    },
    {
        'company': 'Utah State University Research Foundation',
        'position': 'Web Developer',
        'date': 'Dec 2010 &ndash; Jul 2013',
        'short_desc': 'Architected and developed web applications for HR, proposal costing, planning, and other administrative tasks. Most projects involved significant teamwork, coordination, design, and planning, typically with agile/scrum.',
        'additional_desc': `Included was two major projects. The first, an app on proposal costing, was very large and required careful coding for accurate financial planning for very large projects. Received an award on outstanding performance in developing it.
<br><br>
The second project was an app for resource (employee time) allocation and planning. Was a major influence in designing and coordinating as well as developing the application, helping improve time tracking for the entire company.
<br><br>
<b>Skills</b>: css, database design, extjs, html, informix, javascript, jira, linux, openacs, oracledb, postgresql, project management, rest apis, svn, tcl/tk`
    },
    // {
    //     'company': 'Jenson Books',
    //     'position': 'Book Handler',
    //     'date': '2010',
    //     'short_desc': 'Scanned and packaged books for re-sale on Amazon. Was one of the fastest and most efficient scanners they had to date. Improved upon their current processes to increase speed and efficiency, saving the company thousands.',
    //     'additional_desc': ``
    // },
    {
        'company': 'Education and LDS Mission',
        'position': 'Student / Minister',
        'date': '2006 &ndash; 2010',
        'short_desc': '',
        'additional_desc': ''
    },
    {
        'company': 'TopTenREVIEWS',
        'position': 'Reviewer / Web Developer',
        'date': 'May 2004 &ndash; Aug 2006',
        'short_desc': 'Reviewed similar products (usually software) by research and contacting companies. The products were then rated, compared, and summarized. Findings were published onto a review webpage that turned complex research into something a consumer could understand. Was influential in the initial growth of the company, which eventually grew into the conglomerate, Purch Group, Inc.',
        'additional_desc': `Learned attention to detail, prioritizing, and teamwork along with SEO and web development. Used a modified, slightly slower version of agile for monthly updates.
<br><br>
<b>Skills</b>: css, html, javascript`
    },
];

class WorkSection extends Component {
    openDetails(idx) {
        let jsx = <div className={`WorkSection ${window.appUtils.breakpoint}`}>
                    {this.renderLineItem(true, info[idx], idx)}
                  </div>;
        appUtils.openLightBox(jsx);
    }

    render() {
        return (
            <div className={`WorkSection ${window.appUtils.breakpoint}`}>
                {info.map(this.renderLineItem.bind(this, false))}
            </div>
        );
    }

    renderLineItem(isLightbox, data, i) {
        return (
            <div className="line-item" key={i}>
                <h2>{data.position}</h2>
                <div className={`item-date ${isLightbox ? 'no-margin' : ''}`} dangerouslySetInnerHTML={{ __html: data.date }} />
                <h3>{data.company}</h3>
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

export default WorkSection;
