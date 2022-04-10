import React from 'react'

function Footer() {
  return (
    <div>

<footer className="section footer-classic context-dark bg-image" style={{background: '#2d3246'}}>
        <div className=" container " style={{paddingTop: '25px'}}>
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4">  <h5>
                  RP Group
                </h5>
                <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                <p className="rights"><span>©&nbsp; </span><span className="copyright-year">2018</span><span>&nbsp;</span><span>Waves</span><span>.&nbsp;</span><span>All Rights Reserved.</span></p>
                <ul className="social_footer_ul">
                  <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                  <li><a href="#"><i className="fab fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>At post - Sangamner,
                  Dist- <a className="Nagar">
                    zip code -422605
                  </a>
                </dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">rpgroup01@gmail.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><a href="tel:#">1234564321</a> <span>or</span> <a href="tel:#">1234123456</a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer