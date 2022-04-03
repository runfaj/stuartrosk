import React, {Component} from "react";
import "./ClientsSection.less";

import Tabs from '../TabPanel/Tabs';
import Pane from '../TabPanel/Pane';

const info = [
    {"client": "5P- Society"},
    {"client": "Advance Auto Parts"},
    {"client": "Advance Digital"},
    {"client": "AL.com"},
    {"client": "cleveland.com"},
    {"client": "nj.com"},
    {"client": "nola.com"},
    {"client": "silive.com"},
    {"client": "AFLAC"},
    {"client": "Allen Edmonds"},
    {"client": "Alley Group (myplates.com.au)"},
    {"client": "American Eagle"},
    {"client": "Anthem (BlueCross BlueShield)"},
    {"client": "Bank of Internet"},
    {"client": "Beachbody LLC"},
    {"client": "Bear Lake KOA"},
    {"client": "BestBuy"},
    {"client": "Brady Corp (emedco.com)"},
    {"client": "C&H Distributors"},
    {"client": "Cadillac Fairview"},
    {"client": "Calendars.com"},
    {"client": "Cancer Treatment Centers of America"},
    {"client": "Clarametrics"},
    {"client": "Inteliquant Analysis Solutions"},
    {"client": "Allen Communication Learning Services"},
    {"client": "Utah State Research Foundation"},
    {"client": "TopTenReviews.com"},
    {"client": "HermanStreet.com"},
    {"client": "Space Dynamics Lab"},
    {"client": "Coastal Contacts"},
    {"client": "Columbia Sportswear"},
    {"client": "Sorel"},
    {"client": "CPO Commerce"},
    {"client": "Crocs"},
    {"client": "Deckers"},
    {"client": "Ahnu"},
    {"client": "Teva"},
    {"client": "Tsubo"},
    {"client": "UGG"},
    {"client": "Sanuk"},
    {"client": "Dex Media"},
    {"client": "DOMO"},
    {"client": "DoMyOwnPestControls.com"},
    {"client": "Dover Saddlery"},
    {"client": "Electronic Arts (EA)"},
    {"client": "Empirical Path"},
    {"client": "Epson"},
    {"client": "ExactTarget"},
    {"client": "Finishline"},
    {"client": "First Data"},
    {"client": "Citi Bank"},
    {"client": "Sam's Club"},
    {"client": "Forcepoint"},
    {"client": "Gander Mtn"},
    {"client": "Gannett"},
    {"client": "GrubHub"},
    {"client": "Gulf States Toyota"},
    {"client": "Guthy Renker"},
    {"client": "Proactiv"},
    {"client": "DoMyOwnPestControls"},
    {"client": "Hagerty Group"},
    {"client": "Interstate Battery"},
    {"client": "Intstrux / Pixacore"},
    {"client": "Jacksonville.com"},
    {"client": "Lenovo"},
    {"client": "lululemon athletica"},
    {"client": "Marlette Funding"},
    {"client": "MDLive"},
    {"client": "Merial"},
    {"client": "Mindjet.com"},
    {"client": "Minds and Machines"},
    {"client": "Mormon.org"},
    {"client": "The LDS Church"},
    {"client": "New Balance"},
    {"client": "New York Life Insurance"},
    {"client": "Nine West"},
    {"client": "NorthShore Care"},
    {"client": "Oakley"},
    {"client": "Oriental Trading Company"},
    {"client": "Outrigger"},
    {"client": "Party City"},
    {"client": "Pendry Hotels"},
    {"client": "Penske"},
    {"client": "PepBoys"},
    {"client": "PickYourShoes.com"},
    {"client": "Pluralsight"},
    {"client": "Politico"},
    {"client": "Premier Inc."},
    {"client": "Prestige Cruises"},
    {"client": "Protective Insurance"},
    {"client": "Rainbow Shops"},
    {"client": "Ralph Lauren"},
    {"client": "Ray-Ban"},
    {"client": "REI"},
    {"client": "Rivermend Health"},
    {"client": "Royal Caribbean Cruises"},
    {"client": "RSA Canada"},
    {"client": "Samsung"},
    {"client": "Service Master"},
    {"client": "Sideshow Collectibles"},
    {"client": "Simon & Schuster, Inc"},
    {"client": "SmartPhoneHero.com"},
    {"client": "Square (squareup.com)"},
    {"client": "Tena"},
    {"client": "Texas Instruments (TI)"},
    {"client": "The Daily Beast"},
    {"client": "The Sportsman's Guide"},
    {"client": "The Teaching Company"},
    {"client": "The Tile Shop"},
    {"client": "ThredUp"},
    {"client": "Title Nine"},
    {"client": "Total Gym"},
    {"client": "Totes"},
    {"client": "ToysRUs"},
    {"client": "Vestis"},
    {"client": "Bob's Stores"},
    {"client": "Eastern Mountain Sports"},
    {"client": "Viceroy Hotel Group"},
    {"client": "Victoria's Secret"},
    {"client": "Vineyard Vines"},
    {"client": "shoeline.com"},
    {"client": "Visit Florida"},
    {"client": "Vistaprint"},
    {"client": "Wine.com"},
    {"client": "Yankee Candle"},
    {"client": "DXL"},
    {"client": "F+W Media"},
    /// acls
    {"client": "Synchrony Bank"},
    {"client": "AARP"},
    {"client": "AMN Healthcare"},
    {"client": "AT&T"},
    {"client": "Beauty Counter"},
    {"client": "CEB"},
    {"client": "Certified Angus Beef"},
    {"client": "Change Healthcare"},
    {"client": "Chevron"},
    {"client": "Chick-fil-A"},
    {"client": "Pacific Gas & Electric"},
    {"client": "CVS"},
    {"client": "Committee For Children"},
    {"client": "DENSO"},
    {"client": "Depart Smart"},
    {"client": "Driscoll's"},
    {"client": "Korn Ferry"},
    {"client": "Flex"},
    {"client": "Great Lakes Cheese"},
    {"client": "Harley-Davidson"},
    {"client": "HP"},
    {"client": "HPE"},
    {"client": "James Hardie"},
    {"client": "Komatsu"},
    {"client": "KPMG"},
    {"client": "LAM Research"},
    {"client": "Land O'Lakes"},
    {"client": "Lego"},
    {"client": "Morgan Stanley"},
    {"client": "Nordic Naturals"},
    {"client": "NRA"},
    {"client": "Pearson"},
    {"client": "PGA"},
    {"client": "RaceTrac"},
    {"client": "United Airlines"},
    {"client": "USPS"},
    {"client": "Veritiv"},
    {"client": "Vici Partners"},
    {"client": "Weber Shandwick"},
];

class ClientsSection extends Component {
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
            if(a.client.toLowerCase() < b.client.toLowerCase()) return -1;
            if(a.client.toLowerCase() > b.client.toLowerCase()) return 1;
            return 0;
        });
        items = items.filter((item)=>{
            if(item.client.toLowerCase().indexOf(filter.toLowerCase()) > -1) return true;
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
            <div className={`ClientsSection ${window.appUtils.breakpoint}`}>
                <Tabs accentColor={window.appUtils.colors.accent7}>
                    <Pane label="Feedback">
                        <p>I've received a lot of positive feedback over the years. Here's a few of my favorites.</p>
                        <hr />

                        <div className="feedback-item">
                          <p><b>3/10/21 From Linda Silva, Grow.com</b>
                          <br />Great job on taking the leadership role on the Black Ops team. It's usually the PM doing all the team leading and stuff, but [our PM] is stretched way too thin. It's cool to see you calling for team syncs and taking charge when he's not taking that role right now.
                          <br /><br />
                          Before you were in the leadership group, felt like someone said every other week, "We really need to run this by Stuart."" Having you in that group should have happened way sooner, but glad you're finally there and making a big impact.
                          </p>
                        </div>

                        <div className="feedback-item">
                          <p><b>12/31/19 From Brent Allen, Grow.com</b>
                          <br />Big props to @stuart for this forward thinking code for our logger. We all know how tempting it is to just code to get the result...but big picture coding -- code that gets the results but also accounts scale and change -- that's the good stuff. Makes my inner nerd moochos happies :)
                          </p>
                        </div>

                        <div className="feedback-item">
                            <p><b>6/21/13 From Jeff Snyder, Sportsman's Guide</b>
                            <br />Hi Melissa,
                            <br />I wanted to let you know that I would be happy to serve as a reference for any future prospective clients. Your product is fantastic, and I'm finding new ways to use it every day. After playing with the content modification extension, I think we may be able to save tens of thousands annually on split-testing software. But most importantly, the support has been phenomenal. Stuart and Darren are fantastic and this would have never gotten off the ground without them.
                            <br />Please don't hesitate to call me if you have someone interested in a client's perspective of Tealium. I would gladly give your platform and team glowing reviews.
                            <br />Have a great weekend,
                            <br />Jeff
                            </p>
                        </div>

                        <div className="feedback-item">
                            <p><b>8/29/13 From Jeff Snyder, Sportsman's Guide</b>
                            <br />(12:21:38 PM) Melissa Anderson: You got a really nice comment from Jeff at Sportsman's on our customer survey:
                            <br />(12:21:41 PM) Melissa Anderson: "The service and support has been exceptional - particularly with the technical engineers / contractors. Stuart Roskelley was great to work with and is always fast to respond. He solves our problems quickly and effectively - what more could you ask for?"
                            </p>
                        </div>

                        <div className="feedback-item">
                            <p><b>1/27/14 from Halee Kotara, Interstate Batteries</b>
                            <br />"Not to get all emotional on you, but I would like to take this opportunity to let you all know how much I appreciate you.  It's very challenging to be a department of one, and this tagging migration initiative has been particularly daunting.  I'm constantly amazed and humbled by your amazing client service...I couldn't do all this without you!  Without your help and guidance, I would have pulled out all my hair and punched out all my computer monitors by now.
                            <br />You guys are the best"
                            </p>
                        </div>

                        <div className="feedback-item">
                            <p><b>2/21/14 from Beth Szollose at American Tellicast (TotalGym.com)</b>
                            <br />"I would really like to say thank you to you, Stuart and Darren, for all of your help getting us up and running as well as trouble shooting with us. You made it a much easier process for us."
                            </p>
                        </div>

                        <div className="feedback-item">
                            <p><b>5/30/14 from Chris Andres at Tealium (Deployment Director)</b>
                            <br />"I really appreciate all the above and beyond support you've done for my clients as a result of my lack of bandwidth. You've been doing an extremely good job.
                            <br />I've heard a ton of positive feedback about you from the team as well, everyone is really happy to be working with you."
                            </p>
                        </div>

                        <div className="feedback-item">
                            <p><b>8/28/14 from Michelle Andrade, Manager, Business Intelligence, toysrus.com</b>
                            <br />"Hi James,
                            <br />I have been working with Alicia Cafarelli and Stuart Roskelley on several Tealium TRU projects (mobile, registry, Poland, UK to name a few). I couldn't be more pleased with the customer care and support they have provided the Toysrus family thus far.  They are very knowledgeable on the Tealium product and integration, helpful and super supportive. It is a pleasure working with them! Please forward my email to their supervisors.
                            <br />Thanks,
                            <br />Michelle"
                            </p>
                        </div>

                        <div className="feedback-item">
                            <p><b>3/16/15 from Tony Neesham at Brady Corp (emedco, seton)</b>
                            <br />"Hi Stuart,
                            <br />May I start by saying how grateful I am to you and Kara for providing such an amazing level of service. Truly exceptional!
                            <br />..."
                            </p>
                        </div>

                        <div className="feedback-item">
                            <p><b>2/16/16 from Amanda Sepe, Tealium (Company News)</b>
                            <br />Kudos to Stuart for meeting an extremely tight timeline where the client requested all development work to be completed within a 2-week timeframe.  Also, due to strict government regulations around the site, we had to produce a detailed audit report for each of their order flows which Stuart produced in a timely and efficient manner. And as always, being flexible with the Aussie time difference was very much appreciated :)
                            </p>
                        </div>
                    </Pane>
                    <Pane label="Client List">
                        <p>The following is a list of most of the clients I have helped throughout the years. Services have included tag management, analytics, training courses, software architecting, website development, and much more.</p>
                        <hr />

                        <input
                            type="text"
                            onChange={this.onChange.bind(this)}
                            value={this.state.filter}
                            placeholder={`Filter/search (${info.length} clients)`}
                        />
                        <div className="items">
                            <div className="left">
                                {leftItems.map((item,i)=>(
                                    <div className="item" key={'left-'+i}>{item.client}</div>
                                ))}
                            </div>
                            {!isMobile &&
                                <div className="right">
                                    {rightItems.map((item,i)=>(
                                        <div className="item" key={'left-'+i}>{item.client}</div>
                                    ))}
                                </div>
                            }
                        </div>
                    </Pane>
                </Tabs>
            </div>
        );
    }
}

export default ClientsSection;
