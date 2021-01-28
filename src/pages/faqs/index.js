import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./faqs.scss";
class Faqs extends React.Component {
 
  render() {
    return (
      <div className="showdow-box">
        <Helmet> <meta name="description" content="FAQs" /> </Helmet>
        <p style={{fontSize:"30px",fontWeight:"700"}}>
           FAQ's
        </p>
        <p className="question">How do I chat with an expert?  </p>
          <Link to="/admin/chat"><p className="answer">Click Here.</p></Link>
        <p className="question">How do I cancel my subscription?  </p>
          <Link to="/admin/subscribe"><p className="answer">Click Here.</p></Link>
        
      </div>
    )
  }
}

export default Faqs;