import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
            <footer id="footer">
        <div className="container_12 main-footer">
            <div className="grid_3 about-us">
                <h3 className="rs title">About</h3>
                <p className="rs description">We believe entrepreneurship to be one of the most powerful forces for economic and societal change in our time. Through access to capital and education, we empower thousands of entrepreneurs to grow high-impact ventures.</p>
                <p className="rs email"><a className="fc-default  be-fc-orange" href="mailto:info@megadrupal.com">fundvolt@gmail.com</a></p>
                <p className="rs">+216 (94) 051 000 </p>
            </div> 
            <div className="grid_3 recent-tweets">
                <h3 className="rs title">Recent Tweets</h3>
                <div className="lst-tweets" id="sys_lst_tweets">
                    
                </div>
            </div> 
            <div className="clear clear-2col"></div>
            <div className="grid_3 email-newsletter">
                <h3 className="rs title">Newsletter Signup</h3>
                <div className="inner">
                    <p className="rs description">Sign up to receive newsletter.</p>
                    <form action="#aaa">
                        <div className="form form-email">
                            <label className="lbl" htmlFor="txt-email">
                                <input id="txt-email" type="text" className="txt fill-width" placeholder="Enter your e-mail address"/>
                            </label>
                            <button className="btn btn-green" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div> 
            <div className="grid_3">
                <h3 className="rs title">Discover &amp; Create</h3>
                <div className="footer-menu">
                    <ul className="rs">
                        <li><a className="be-fc-orange" href="#aaa">What is FundVolt</a></li>
                        <li><a className="be-fc-orange" href="#aaa">Start a project</a></li>
                        <li><a className="be-fc-orange" href="#aaa">Project Guidlines</a></li>
                        <li><a className="be-fc-orange" href="#aaa">Press</a></li>
                        <li><a className="be-fc-orange" href="#aaa">Stats</a></li>
                    </ul>
                    <ul className="rs">
                        <li><a className="be-fc-orange" href="#aaa">Staff Picks</a></li>
                        <li><a className="be-fc-orange" href="#aaa">Popular</a></li>
                        <li><a className="be-fc-orange" href="#aaa">Recent</a></li>
                        <li><a className="be-fc-orange" href="#aaa">Small Projects</a></li>
                        <li><a className="be-fc-orange" href="#aaa">Most Funded</a></li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
            <div className="clear"></div>
        </div>
        <div className="copyright">
            <div className="container_12">
                <div className="grid_12">
                    <Link to="/" className="logo-footer" ><img src="./assets/images/logo-2.png" alt="$SITE_NAME"/></Link>
                    <p className="rs term-privacy">
                        <a className="fw-b be-fc-orange p-2" href="single.html">Terms & Conditions</a>
                        <span className="sep">/</span>
                        <a className="fw-b be-fc-orange p-2" href="single.html">Privacy Policy</a>
                        <span className="sep">/</span>
                        <a className="fw-b be-fc-orange" href="#aaaaaa">FAQ</a>
                    </p>
                 
                </div>
                <div className="clear"></div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
