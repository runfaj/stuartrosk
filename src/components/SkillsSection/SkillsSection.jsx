import React, {Component} from "react";
import "./SkillsSection.less";

const info = [
    {"skill": "adobe analytics", "tags": ["tracking", "tags", "third party","web","javascript",]},
    {"skill": "adobe dtm", "tags": ["web","tracking", "tags", "third party","frontend","javascript",,"tag","management"]},
    {"skill": "amazon web services (AWS)", "tags": ["server","database","rds","relational","cloud","lambda","rds","beanstalk","elastic","ec2","container","web",]},
    {"skill": "amcharts", "tags": ["javascript","code","web","frontend","third party","design","graph",]},
    {"skill": "android", "tags": ["backend","code","framework","app",]},
    {"skill": "angularjs", "tags": ["code","framework","javascript","web","frontend",]},
    {"skill": "apache", "tags": ["server","linux","backend","database","rds","relational","web",]},
    {"skill": "ar/vr", "tags": ["virtual","augmented","reality","3D","code"]},
    {"skill": "art", "tags": ["drawing","design"]},
    {"skill": "asp.net", "tags": ["microsoft","entity","framework","mvc","c#","ms","frontend","backend","code","web",]},
    {"skill": "auto mechanic", "tags": ["cars","motorcycles"]},
    {"skill": "autocad", "tags": ["drawing","art","design",]},
    {"skill": "big data", "tags": ["backend","code","web","database","analytics",]},
    {"skill": "big query", "tags": ["backend","code","web","database","rds","relational","cloud",]},
    {"skill": "c#", "tags": ["backend","code","web","unity",]},
    {"skill": "c++", "tags": ["backend","code"]},
    {"skill": "coremetrics", "tags": ["code","third party","analytics","data","web","javascript","tracking","tags",]},
    {"skill": "cooking", "tags": ["food",]},
    {"skill": "cron", "tags": ["backend","code","linux"]},
    {"skill": "css3", "tags": ["code","design","frontend","web","less","sass",]},
    {"skill": "database design", "tags": ["code","backend","web","team","rds","relational","graph","data",]},
    {"skill": "django", "tags": ["backend","code","web","framework","api",]},
    {"skill": "ecmascript", "tags": ["javascript","code","web","frontend","backend",]},
    {"skill": "electronics", "tags": ["code","circuits",]},
    {"skill": "entity framework", "tags": ["backend", "database","microsoft","rds","relational","code",]},
    {"skill": "extjs", "tags": ["code","web","frontend","framework","javascript",]},
    {"skill": "fiberglass", "tags": [""]},
    {"skill": "gaming", "tags": ["unity",]},
    {"skill": "git", "tags": ["code","subversion", "version", "control","web","subversion","frontend","backend",]},
    {"skill": "google analytics", "tags": ["tracking", "tags", "third party","web","javascript",]},
    {"skill": "google charts", "tags": ["frontend", "web","graph","third party", "javascript","code",]},
    {"skill": "google tag manager", "tags": ["web","tracking", "tags", "third party","frontend","javascript",,"tag","management"]},
    {"skill": "gulp", "tags": ["backend","code","web","frontend","javascript","package",]},
    {"skill": "highly motivated", "tags": ["team","learning",]},
    {"skill": "html5", "tags": ["code","design","frontend","web",]},
    {"skill": "inventing", "tags": ["team","learning",]},
    {"skill": "java", "tags": ["code","backend","android","web","api",]},
    {"skill": "javascript", "tags": ["code","backend","web","unity","frontend",]},
    {"skill": "jira", "tags": ["project","management","task","team",]},
    {"skill": "jquery", "tags": ["javascript","code","framework","frontend","web",]},
    {"skill": "knockoutjs", "tags": ["code","framework","javascript","web","frontend",]},
    {"skill": "laravel", "tags": ["backend","code","web","framework","api",]},
    {"skill": "legos", "tags": ["building",]},
    {"skill": "less", "tags": ["css","sass","design","code","frontend","web",]},
    {"skill": "linux", "tags": ["server","apache","unix","backend","database"]},
    {"skill": "mssql", "tags": ["backend","code","database","rds","web","relational",]},
    {"skill": "mentoring", "tags": ["team","learning",]},
    {"skill": "mobx", "tags": ["code","framework","javascript","web","frontend",]},
    {"skill": "mobx-state-tree", "tags": ["code","framework","javascript","web","frontend",]},
    {"skill": "motorcycles", "tags": ["cars","mechanic","auto",]},
    {"skill": "mvc", "tags": ["project","management","code",]},
    {"skill": "mvvm", "tags": ["project","management","code",]},
    {"skill": "mysql", "tags": ["backend","code","web","database","rds","relational",]},
    {"skill": "nodejs", "tags": ["backend","code","web","javascript","package","api",]},
    {"skill": "nosql", "tags": ["database","rds","relational","web","code","backend",]},
    {"skill": "openacs", "tags": ["linux","rds","relational","database","backend",]},
    {"skill": "oracledb", "tags": ["rds","relational","database","backend",]},
    {"skill": "pgs4a", "tags": ["python","game","app","android","code","third party","framework",]},
    {"skill": "phaserjs", "tags": ["game","javascript","frontend","web","code","framework",]},
    {"skill": "photoshop", "tags": ["design",]},
    {"skill": "php", "tags": ["backend","code","web",]},
    {"skill": "postgresql", "tags": ["backend","code","web","database","rds","relational",]},
    {"skill": "problem solving", "tags": ["team","learning",]},
    {"skill": "project management", "tags": ["team",]},
    {"skill": "python", "tags": ["code","backend","web","android",]},
    {"skill": "razer", "tags": ["backend","code","web","framework","frontend",]},
    {"skill": "react", "tags": ["code","framework","javascript","web","frontend",]},
    {"skill": "redux", "tags": ["code","framework","javascript","web","frontend",]},
    {"skill": "rest apis", "tags": ["code","backend","web","project",]},
    {"skill": "running", "tags": ["exercise",]},
    {"skill": "sass", "tags": ["css","less","design","code","frontend","web",]},
    {"skill": "self-learning", "tags": []},
    {"skill": "slack", "tags": ["project","management","team",]},
    {"skill": "software architecture", "tags": ["team",]},
    {"skill": "software development", "tags": ["backend","code","web","database","rds","relational","version","control","frontend",]},
    {"skill": "sql", "tags": ["database","rds","relational","web","code",]},
    {"skill": "sql server", "tags": ["database","rds","relational","code","microsoft",]},
    {"skill": "subversion", "tags": ["git","version","control","code","web","svn",]},
    {"skill": "tcl/tk", "tags": ["backend","code","web",]},
    {"skill": "tealium", "tags": ["web","tracking", "tags", "third party","frontend","javascript","tag","management"]},
    {"skill": "teamwork", "tags": ["team","learning",]},
    {"skill": "technical architecture", "tags": ["team","project","management","frontend","backend","code",]},
    {"skill": "tfs", "tags": ["microsoft","code","team","git","svn","subversion",]},
    {"skill": "training", "tags": ["team","learning",]},
    {"skill": "trello", "tags": ["team","project","management",]},
    {"skill": "twitter bootstrap", "tags": ["code","javascript","web","design","frontend","third party",]},
    {"skill": "unity", "tags": ["code","framework","javascript","c#","design","gaming","android","ios"]},
    {"skill": "web applications", "tags": ["backend","code","web","database","rds","relational","version","control","frontend",]},
    {"skill": "webpack", "tags": ["backend","code","web","frontend","javascript","package",]},
    {"skill": "woodworking", "tags": [""]},
    {"skill": "wordpress", "tags": ["web","frontend","backend","design","php","third party"]},
    {"skill": "writing", "tags": []},
];

class SkillsSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: "",
            filteredItems: [],
        };
    }

    componentDidMount() {
        this.filterItems();
    }

    onChange(e) {
        this.setState({ filter: e.target.value }, this.filterItems.bind(this));
    }

    filterItems() {
        let {filter} = this.state;

        let items = info;
        items.sort((a,b)=>{
            if(a.skill.toLowerCase() < b.skill.toLowerCase()) return -1;
            if(a.skill.toLowerCase() > b.skill.toLowerCase()) return 1;
            return 0;
        });
        items = items.filter((item)=>{
            if(item.skill.toLowerCase().indexOf(filter.toLowerCase()) > -1) return true;

            let tagMatch = false;
            item.tags.forEach((tag)=>{
                if(tag.toLowerCase().indexOf(filter.toLowerCase()) > -1) tagMatch = true;
                if(tag.indexOf(filter) > -1) tagMatch = true;
            });
            return tagMatch;
        });

        this.setState({ filteredItems: items });
    }

    render() {
        const isMobile = window.appUtils.breakpoint === 'xs' || window.appUtils.breakpoint === 'sm';
        const halfLen = Math.ceil(this.state.filteredItems.length / 2);
        let leftItems = isMobile
                        ?   this.state.filteredItems
                        :   this.state.filteredItems.slice(0, halfLen);
        let rightItems = isMobile
                         ?  []
                         :  this.state.filteredItems.slice(halfLen, this.state.filteredItems.length);

        return (
            <div className={`SkillsSection ${window.appUtils.breakpoint}`}>
                <p>I've tried to list out most of my skills and hobbies below. However, being highly motivated and self-taught, I can pick up just about anything I put my mind to very quickly. This makes the following list just a subset of possibilities. Filter below searching for topics or tags.</p>
                <p>&nbsp;</p>
                <input
                    type="text"
                    onChange={this.onChange.bind(this)}
                    value={this.state.filter}
                    placeholder="Type to filter/search..."
                />
                <div className="items">
                    <div className="left">
                        {leftItems.map((item,i)=>(
                            <div className="item" key={'left-'+i}>{item.skill}</div>
                        ))}
                    </div>
                    {!isMobile &&
                        <div className="right">
                            {rightItems.map((item,i)=>(
                                <div className="item" key={'left-'+i}>{item.skill}</div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default SkillsSection;
