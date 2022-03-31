import React, {Component} from "react";
import "./AboutSection.less";

class AboutSection extends Component {
    render() {
        return (
            <div className={`AboutSection ${window.appUtils.breakpoint}`}>
                <img src="/images/stuart.jpg" />

                <h2>Stuart Roskelley</h2>
                <h3>Worker, Entrepreneur, Family Man, Geek.</h3>
                <hr />
                <p>To put it simply, I have many interests and ideas. No matter what I am working on, I try to put my heart and best effort into it.</p>

                <h4>My Axioms</h4>
                <ul>
                    <li>Work hard and put your heart into whatever project is on your plate.</li>
                    <li>Be organized and don't be afraid to take on risks and new challenges.</li>
                    <li>Enjoy life, especially with those you love.</li>
                    <li>Never give up; learn something new every day.</li>
                    <li>Be all that you can be. Reflect that passion and motivation to others.</li>
                </ul>

                <h4>About Me</h4>
                <p>Starting as a small kid, my fascination with discovering, learning, and building started with a Sega Genesis and a handful of Legos. Through the years, that desire has developed and enabled me to learn about all kinds of topics. The most part of my knowledge and endeavors have been self-taught.</p>
                <p>I've enjoyed spending time with my family and work diligently to support them. I also have enjoyed playing around with all kinds of computer items, tech items, and hands-on items. In addition, I've always had a fascination with cars and their engineering and hope to someday build my own from scratch.</p>

                <h4>Background</h4>
                <p>My first real job was in high school with a startup company called TopTenReviews.com. I was one of those that helped grow the company to one of the largest review sites in the world, now known as Purch Group. This job opened my eyes to the joys of the web and what it could do.</p>
                <p>Later, when I started college, I was hired to build in-house web applications for the Utah State University Research Foundation. This scoped most administration functions such as HR functions to managing multi-million dollar projects and proposals. This taught me more of the business functions of software engineering, complex databases, security, and team leadership.</p>
                <p>In early 2013, I was introduced to web analytics and tag management. I knew the coding portion and quickly learned the importance and need for this hidden layer of the internet. Since that discovery, I've strived to help clients achieve their goals quickly and efficiently.</p>

                <h4>Summary</h4>
                <p>From building web applications to android apps to analytics tracking, I've always been in an architectural and entrepreneurial mindset. With the axioms above and a strong motivation to self-teach, projects have been implemented with new technologies and best practices to last for years to come. This also has resulted in many happy clients.</p>
            </div>
        );
    }
}

export default AboutSection;
