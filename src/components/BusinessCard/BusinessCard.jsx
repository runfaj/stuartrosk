import React, {Component} from "react";
import "./BusinessCard.less";

class BusinessCard extends Component {
    render(){
        return(
            <div className={`BusinessCard ${window.appUtils.breakpoint}`}>
                <div className="left-side">
                    <h1>Stuart<br/>Roskelley</h1>
                </div>
                <div className="right-side">
                  <div className="line-item">
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" /></svg>
                      <a href="https://www.linkedin.com/in/sroskelley/" target="_blank">sroskelley</a>
                  </div>
                  {/* <div className="line-item">
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M17.36,20.2V14.82H19.15V22H3V14.82H4.8V20.2H17.36M6.77,14.32L7.14,12.56L15.93,14.41L15.56,16.17L6.77,14.32M7.93,10.11L8.69,8.5L16.83,12.28L16.07,13.9L7.93,10.11M10.19,6.12L11.34,4.74L18.24,10.5L17.09,11.87L10.19,6.12M14.64,1.87L20,9.08L18.56,10.15L13.2,2.94L14.64,1.87M6.59,18.41V16.61H15.57V18.41H6.59Z" /></svg>
                      <a href="https://stackoverflow.com/story/sroskelley" target="_blank">sroskelley</a>
                  </div> */}
                  {/* <div className="line-item">
                      <svg className="padded" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.738 18.701c-.831-1.635-1.805-3.287-3.708-3.287-.362 0-.727.061-1.059.209l-.646-1.289c.786-.678 2.058-1.214 3.693-1.214 2.544 0 3.851 1.229 4.888 2.792.613-1.335.904-3.14.904-5.375 0-5.582-1.744-8.447-5.822-8.447-4.018 0-5.757 2.865-5.757 8.447 0 5.553 1.739 8.389 5.757 8.389.64 0 1.22-.069 1.75-.225zm.996 1.947c-.881.237-1.817.366-2.743.366-5.352 0-10.59-4.269-10.59-10.478C.402 4.271 5.639 0 10.991 0c5.441 0 10.628 4.238 10.628 10.537 0 3.504-1.635 6.351-4.01 8.191.764 1.148 1.543 1.914 2.652 1.914 1.199 0 1.68-.915 1.77-1.649h1.557c.092.974-.402 5.007-4.766 5.007-2.652 0-4.047-1.528-5.096-3.328l.008-.024z"/></svg>
                      <a href="https://www.quora.com/profile/Stuart-Roskelley" target="_blank">Stuart Roskelley</a>
                  </div> */}
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
            </div>
        );
    }
}

export default BusinessCard;
