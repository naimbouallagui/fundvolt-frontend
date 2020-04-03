import React, { useEffect } from "react";
import { connect } from "react-redux";
import { listProjects } from "../store/actions/project";
import { Link } from "react-router-dom";

const Home = ({ projects, getAllProjects }) => {
  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);
  return (
    <>
      <div id="home-slider">
        <div
          className="md-slide-items md-slider"
          id="md-slider-1"
          data-thumb-width="105"
          data-thumb-height="70"
        >
          <div className="md-slide-item slide-0" data-timeout="6000">
            <div className="md-mainimg">
              <img src="images/ex/th-slide0.jpg" alt="" />
            </div>
            <div className="md-objects">
              <div
                className="md-object rs slide-title"
                data-x="20"
                data-y="38"
                data-width="480"
                data-height="30"
                data-start="700"
                data-stop="5500"
                data-easein="random"
                data-easeout="keep"
              >
                <p>Search Money for Your Creative Ideas?</p>
              </div>
              <div
                className="md-object rs slide-description"
                data-x="20"
                data-y="160"
                data-width="480"
                data-height="90"
                data-start="1400"
                data-stop="7500"
                data-easein="random"
                data-easeout="keep"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient monte.
                </p>
              </div>
              <div
                className="md-object rs"
                data-x="20"
                data-y="260"
                data-width="120"
                data-height="23"
                data-padding-top="9"
                data-padding-bottom="7"
                data-padding-left="10"
                data-padding-right="10"
                data-start="1800"
                data-stop="7500"
                data-easein="random"
                data-easeout="keep"
              >
                <a href="#aaa" className="btn btn-gray">
                  Learn more
                </a>
              </div>
              <div
                className="md-object"
                data-x="495"
                data-y="0"
                data-width="612"
                data-height="365"
                data-start="1800"
                data-stop="7500"
                data-easein="fadeInRight"
                data-easeout="keep"
              >
                <img
                  src="images/ex/th-slide-man.png"
                  alt="Search Money for Your Creative Ideas"
                  width="612"
                  height="365"
                />
              </div>
            </div>
          </div>
          <div className="md-slide-item slide-1" data-timeout="6000">
            <div className="md-mainimg">
              <img src="images/ex/th-slide1.jpg" alt="" />
            </div>
            <div className="md-objects">
              <div
                className="md-object rs slide-title"
                data-x="20"
                data-y="188"
                data-width="390"
                data-height="30"
                data-start="700"
                data-stop="5500"
                data-easein="random"
                data-easeout="random"
              >
                <p>A creative engine</p>
              </div>
              <div
                className="md-object rs slide-description2"
                data-x="20"
                data-y="250"
                data-width="390"
                data-height="100"
                data-start="1400"
                data-stop="4500"
                data-easein="random"
                data-easeout="random"
              >
                <p>
                  Mauris volutpat, lectus vitae pretium sagittis, turpis augue
                  euismod libero
                </p>
              </div>
              <div
                className="md-object"
                data-x="454"
                data-y="44"
                data-width="327"
                data-height="268"
                data-start="1000"
                data-stop="5500"
                data-easein="random"
                data-easeout="random"
              >
                <img
                  src="images/ex/slide1_1.png"
                  alt="Responsive"
                  width="327"
                  height="268"
                />
              </div>
              <div
                className="md-object"
                data-x="628"
                data-y="142"
                data-width="298"
                data-height="176"
                data-start="1600"
                data-stop="5100"
                data-easein="random"
                data-easeout="random"
              >
                <img
                  src="images/ex/slide1_2.png"
                  alt="Responsive"
                  width="298"
                  height="176"
                />
              </div>
              <div
                className="md-object"
                data-x="837"
                data-y="169"
                data-width="119"
                data-height="149"
                data-start="2200"
                data-stop="4800"
                data-easein="random"
                data-easeout="random"
              >
                <img
                  src="images/ex/slide1_3.png"
                  alt="Responsive"
                  width="119"
                  height="149"
                />
              </div>
              <div
                className="md-object"
                data-x="809"
                data-y="208"
                data-width="59"
                data-height="114"
                data-start="2800"
                data-stop="4500"
                data-easein="random"
                data-easeout="random"
              >
                <img
                  src="images/ex/slide1_4.png"
                  alt="Responsive"
                  width="59"
                  height="114"
                />
              </div>
            </div>
          </div>
          <div className="md-slide-item slide-2" data-timeout="4000">
            <div className="md-mainimg">
              <img src="images/ex/th-slide2.jpg" alt="" />
            </div>
            <div className="md-objects">
              <div
                className="md-object slide-with-background"
                data-x="20"
                data-y="58"
                data-width="500"
                data-height="170"
                data-padding-top="30"
                data-padding-bottom="30"
                data-padding-left="35"
                data-padding-right="35"
                data-start="300"
                data-stop="3600"
                data-easein="random"
                data-easeout="keep"
              >
                <h2 className="rs slide-title">Start your project today</h2>
                <p className="rs slide-description2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient monte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-feature-category">
        <div className="container_12 clearfix">
          <div className="grid_4 left-lst-category">
            <div className="wrap-lst-category">
              <h3 className="title-welcome rs">Welcome to Kickstars!</h3>
              <p className="description rs">
                Pellentesque laoreet sapien id lacus luctus non fringilla elit
                lobortis. Fusce augue diam, tempor posuere pharetra sed, feugiat
                non sapien.
              </p>
              <nav className="lst-category">
                <ul className="rs nav nav-category">
                  <li>
                    <a href="#aaa">
                      Art
                      <span className="count-val">(12)</span>
                      <i className="icon iPlugGray"></i>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#aaa">
                      Comics
                      <span className="count-val">(12)</span>
                      <i className="icon iPlugGray"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#aaa">
                      Design
                      <span className="count-val">(12)</span>
                      <i className="icon iPlugGray"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#aaa">
                      Fashion
                      <span className="count-val">(12)</span>
                      <i className="icon iPlugGray"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#aaa">
                      Film
                      <span className="count-val">(12)</span>
                      <i className="icon iPlugGray"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#aaa">
                      Games
                      <span className="count-val">(12)</span>
                      <i className="icon iPlugGray"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#aaa">
                      Music
                      <span className="count-val">(12)</span>
                      <i className="icon iPlugGray"></i>
                    </a>
                  </li>
                </ul>
                <p className="rs view-all-category">
                  <a href="category.html" className="be-fc-orange">
                    + View all categories
                  </a>
                </p>
              </nav>
            </div>
          </div>
          <div className="grid_8 marked-category">
            <div className="wrap-title clearfix">
              <h2 className="title-mark rs">
                Staff Picks: <span className="fc-orange">Comics</span>
              </h2>
              <a href="category.html" className="count-project be-fc-orange">
                See all <span className="fw-b">24</span> Comics projects
              </a>
            </div>
            <div className="box-marked-project project-short">
              <div className="top-project-info">
                <div className="content-info-short clearfix">
                  <a href="#aaa" className="thumb-img">
                    <img src="./ex/th-292x204-1.jpg" alt="$TITLE" />
                  </a>
                  <div className="wrap-short-detail">
                    <h3 className="rs acticle-title">
                      <a className="be-fc-orange" href="project.html">
                        LYK and Bear #1: No Food Deed Unpunished
                      </a>
                    </h3>
                    <p className="rs tiny-desc">
                      by{" "}
                      <a
                        href="profile.html"
                        className="fw-b fc-gray be-fc-orange"
                      >
                        Ray Sumser
                      </a>{" "}
                      in <span className="fw-b fc-gray">New York, NY</span>
                    </p>
                    <p className="rs title-description">
                      Nam sit amet est sapien, a faucibus purus. Sed commodo
                      facilisis tempus. Pellentesque placerat elementum
                      adipiscing.
                    </p>
                  </div>
                  <p className="rs clearfix comment-view">
                    <a href="#aaa" className="fc-gray be-fc-orange">
                      75 comments
                    </a>
                    <span className="sep">|</span>
                    <a href="#aaa" className="fc-gray be-fc-orange">
                      378 views
                    </a>
                  </p>
                </div>
              </div>
              <div className="bottom-project-info clearfix">
                <div
                  className="project-progress sys_circle_progress"
                  data-percent="76"
                >
                  <div className="sys_holder_sector"></div>
                </div>
                <div className="group-fee clearfix">
                  <div className="fee-item">
                    <p className="rs lbl">Bankers</p>
                    <span className="val">270</span>
                  </div>
                  <div className="sep"></div>
                  <div className="fee-item">
                    <p className="rs lbl">Pledged</p>
                    <span className="val">$38,000</span>
                  </div>
                  <div className="sep"></div>
                  <div className="fee-item">
                    <p className="rs lbl">Days Left</p>
                    <span className="val">25</span>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>

      <div className="home-popular-project">
        <div className="container_12">
          <div className="grid_12 wrap-title">
            <h2 className="common-title">Popular</h2>
            <Link to="/project" className="be-fc-orange">
              View all
            </Link>
          </div>
          <div className="clear"></div>
          <div className="lst-popular-project clearfix">
            {projects.slice(0, 4).map(project => (
              <div className="grid_3" key={project._id}>
                <div className="project-short sml-thumb">
                  <div className="top-project-info">
                    <div className="content-info-short clearfix">
                      <a href="#aaa" className="thumb-img">
                        <img src={"http://localhost:5000/"+project.img} alt={project.title} />
                      </a>
                      <div className="wrap-short-detail">
                        <h3 className="rs acticle-title">
                          <a className="be-fc-orange" href="project.html">
                            {project.title}
                          </a>
                        </h3>
                        <p className="rs tiny-desc">
                          by
                          <a
                            href="profile.html"
                            className="fw-b fc-gray be-fc-orange"
                          >
                            {/* {project.client.username} */}
                          </a>
                        </p>
                        <p className="rs title-description ellipsis">
                          {project.description}
                        </p>
                        <p className="rs project-location">
                          <i className="icon iLocation"></i>
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-project-info clearfix">
                    <div className="line-progress">
                      <div className="bg-progress">
                        <span style={{ width: "50%" }}></span>
                      </div>
                    </div>
                    <div className="group-fee clearfix">
                      <div className="fee-item">
                        <p className="rs lbl">Funded</p>
                        <span className="val">50%</span>
                      </div>
                      <div className="sep"></div>
                      <div className="fee-item">
                        <p className="rs lbl">Pledged</p>
                        <span className="val">$38,000</span>
                      </div>
                      <div className="sep"></div>
                      <div className="fee-item">
                        <p className="rs lbl">Days Left</p>
                        <span className="val">25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  projects: state.projects
});
const mapDispatchToProps = dispatch => ({
  getAllProjects: () => dispatch(listProjects())
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
