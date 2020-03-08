import React from "react";

const Profile = () => {
  return (
    <div className="layout-2cols">
      <div className="content grid_8">
        <div className="project-detail">
          <div className="project-tab-detail tabbable accordion">
            <ul className="nav nav-tabs clearfix">
              <li className="active">
                <a href="#ddd">Profile</a>
              </li>
              <li>
                <a href="#ddd" className="be-fc-orange">
                  Account
                </a>
              </li>
              <li className="disable">
                <a href="#ddd" className="be-fc-orange">
                  Notifications
                </a>
              </li>
              <li>
                <a href="#ddd" className="be-fc-orange">
                  Inbox
                </a>
              </li>
              <li>
                <a href="#ddd" className="be-fc-orange">
                  Projects
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div>
                <h3 className="rs alternate-tab accordion-label">Profile</h3>
                <div className="tab-pane accordion-content active">
                  <div className="form form-profile">
                    <form action="#ddd">
                      <div className="row-item clearfix">
                        <label className="lbl" for="txt_name1">
                          Name:
                        </label>
                        <div className="val">
                          <input
                            className="txt"
                            type="text"
                            id="txt_name1"
                            value="John Doe"
                          />
                          <p className="rs description-input">
                            Your name is displayed on your profile.
                          </p>
                        </div>
                      </div>
                      <div className="row-item clearfix">
                        <label className="lbl" for="txt_location">
                          Location:
                        </label>
                        <div className="val">
                          <input
                            className="txt"
                            type="text"
                            id="txt_location"
                            value="United Kingdon, London"
                          />
                          <button className="btn btn-white">
                            Choose location
                          </button>
                        </div>
                      </div>
                      <div className="row-item clearfix">
                        <label className="lbl" for="txt_time_zone">
                          Time zone:
                        </label>
                        <div className="val">
                          <input
                            className="txt"
                            type="text"
                            id="txt_time_zone"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="row-item clearfix">
                        <label className="lbl" for="txt_bio">
                          Biography:
                        </label>
                        <div className="val">
                          <textarea
                            className="txt fill-width"
                            name="txt_bio"
                            id="txt_bio"
                            cols="30"
                            rows="10"
                          ></textarea>
                          <p className="rs description-input">
                            We suggest a short bio. If it’s 300 characters or
                            less it’ll look great on your profile.
                          </p>
                        </div>
                      </div>
                      <div className="row-item clearfix">
                        <label className="lbl" for="txt_name2">
                          Profile URL:
                        </label>
                        <div className="val">
                          <p className="rs display-val">
                            <a href="#ddd" className="be-fc-orange">
                              www.kickstars.com/profile/
                            </a>
                          </p>
                          <input
                            className="txt"
                            type="text"
                            id="txt_name2"
                            value="John Doe"
                          />
                          <p className="rs description-input">
                            You can set a vanity URL here/ Ince set. this vanity
                            URL can not be changed.
                          </p>
                        </div>
                      </div>
                      <div className="row-item clearfix">
                        <label className="lbl" for="txt_web">
                          Web:
                        </label>
                        <div className="val">
                          <input
                            className="txt txt-website"
                            type="text"
                            id="txt_web"
                            value=""
                          />
                          <button className="btn btn-white">Add</button>
                        </div>
                      </div>
                      <p className="wrap-btn-submit rs ta-r">
                        <button className="btn btn-red btn-submit-all">
                          Save all settings
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="rs alternate-tab accordion-label">Account</h3>
                <div className="tab-pane accordion-content">
                  <div className="tab-pane-inside">
                    <div className="project-author pb20">
                      <div className="media">
                        <a href="#ddd" className="thumb-left">
                          <img
                            src="images/ex/th-90x90-1.jpg"
                            alt="$USER_NAME"
                          />
                        </a>
                        <div className="media-body">
                          <h4 className="rs pb10">
                            <a href="#ddd" className="be-fc-orange fw-b">
                              John Doe
                            </a>
                          </h4>
                          <p className="rs">Chicago, IL</p>
                          <p className="rs fc-gray pb10">5 projects</p>
                          <p className="rs description">
                            Mauris vel lacus vitae felis vestibulum volutpat.
                            Etiam est nunc, venenatis in, tristique eu,
                            imperdiet ac, nisl. Cum sociis natoque penatibus et
                            magnis dis parturient montes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="rs alternate-tab accordion-label">
                  Notifications
                </h3>
                <div className="tab-pane accordion-content">
                  <br /> Notifications
                  <br /> <br /> <br /> <br />
                  <br />
                  <br />
                </div>
              </div>
              <div>
                <h3 className="rs alternate-tab accordion-label">Inbox</h3>
                <div className="tab-pane accordion-content">
                  <div className="box-list-comment">
                    <div className="media comment-item">
                      <a href="#ddd" className="thumb-left">
                        <img src="images/ex/th-90x90-1.jpg" alt="$TITLE" />
                      </a>
                      <div className="media-body">
                        <h4 className="rs comment-author">
                          <a href="#ddd" className="be-fc-orange fw-b">
                            John Doe
                          </a>
                          <span className="fc-gray">say:</span>
                        </h4>
                        <p className="rs comment-content">
                          {" "}
                          Fusce tellus. Sed metus augue, convallis et, vehicula
                          ut, pulvinar eu, ante. Integer orci tellus, tristique
                          vitae, consequat nec, porta vel, lectus
                        </p>
                        <p className="rs time-post">5 days ago</p>
                      </div>
                    </div>
                    <div className="media comment-item">
                      <a href="#ddd" className="thumb-left">
                        <img src="images/ex/th-90x90-2.jpg" alt="$TITLE" />
                      </a>
                      <div className="media-body">
                        <h4 className="rs comment-author">
                          <a href="#ddd" className="be-fc-orange fw-b">
                            Eminem
                          </a>
                          <span className="fc-gray">say:</span>
                        </h4>
                        <p className="rs comment-content">
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. In posuere
                          felis nec tortor. Pellentesque faucibus. Ut accumsan
                          ultricies elit.
                        </p>
                        <p className="rs time-post">5 days ago</p>
                      </div>
                    </div>
                    <div className="media comment-item">
                      <a href="#ddd" className="thumb-left">
                        <img src="images/ex/th-90x90-3.jpg" alt="$TITLE" />
                      </a>
                      <div className="media-body">
                        <h4 className="rs comment-author">
                          <a href="#ddd" className="be-fc-orange fw-b">
                            Snoop Dogg
                          </a>
                          <span className="fc-gray">say:</span>
                        </h4>
                        <p className="rs comment-content">
                          Nam nec sem ac risus congue varius. Maecenas interdum
                          ipsum tempor ipsum fringilla eu vehicula urna
                          vehicula.
                        </p>
                        <p className="rs time-post">5 days ago</p>
                      </div>
                    </div>
                    <div className="media comment-item">
                      <a href="#ddd" className="thumb-left">
                        <img src="images/ex/th-90x90-4.jpg" alt="$TITLE" />
                      </a>
                      <div className="media-body">
                        <h4 className="rs comment-author">
                          <a href="#ddd" className="be-fc-orange fw-b">
                            Obama
                          </a>
                          <span className="fc-gray">say:</span>
                        </h4>
                        <p className="rs comment-content">
                          Curabitur vel dolor ultrices ipsum dictum tristique.
                          Praesent vitae lacus. Ut velit enim, vestibulum non,
                          fermentum nec,
                        </p>
                        <p className="rs time-post">5 days ago</p>
                      </div>
                    </div>
                    <div className="media comment-item">
                      <a href="#ddd" className="thumb-left">
                        <img src="images/no-avatar.png" alt="$TITLE" />
                      </a>
                      <div className="media-body">
                        <h4 className="rs comment-author">
                          <a href="#ddd" className="be-fc-orange fw-b">
                            Mark Lenon
                          </a>
                          <span className="fc-gray">say:</span>
                        </h4>
                        <p className="rs comment-content">
                          Nam nec sem ac risus congue varius. Maecenas interdum
                          ipsum tempor ipsum fringilla eu vehicula urna
                          vehicula.
                        </p>
                        <p className="rs time-post">5 days ago</p>
                      </div>
                    </div>
                    <div className="media comment-item">
                      <a href="#ddd" className="thumb-left">
                        <img src="images/ex/th-90x90-1.jpg" alt="$TITLE" />
                      </a>
                      <div className="media-body">
                        <h4 className="rs comment-author">
                          <a href="#ddd" className="be-fc-orange fw-b">
                            Dr. Dre
                          </a>
                          <span className="fc-gray">say:</span>
                        </h4>
                        <p className="rs comment-content">
                          {" "}
                          Morbi eget arcu. Morbi porta, libero id ullamcorper
                          nonummy, nibh ligula pulvinar metus, eget consectetuer
                          augue nisi quis lacus. Ut ac mi quis lacus mollis
                          aliquam. Curabitur iaculis tempus eros. Curabitur vel
                          mi sit amet magna malesuada ultrices
                        </p>
                        <p className="rs time-post">5 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="rs alternate-tab accordion-label">Projects</h3>
                <div className="tab-pane accordion-content">
                  <div className="box-marked-project project-short inside-tab">
                    <div className="top-project-info">
                      <div className="content-info-short clearfix">
                        <a href="#ddd" className="thumb-img">
                          <img src="images/ex/th-292x204-1.jpg" alt="$TITLE" />
                        </a>
                        <div className="wrap-short-detail">
                          <h3 className="rs acticle-title">
                            <a className="be-fc-orange" href="#ddd">
                              LYK and Bear #1: No Food Deed Unpunished
                            </a>
                          </h3>
                          <p className="rs tiny-desc">
                            by{" "}
                            <a href="#ddd" className="fw-b fc-gray be-fc-orange">
                              Ray Sumser
                            </a>{" "}
                            in{" "}
                            <span className="fw-b fc-gray">New York, NY</span>
                          </p>
                          <p className="rs title-description">
                            Nam sit amet est sapien, a faucibus purus. Sed
                            commodo facilisis tempus. Pellentesque placerat
                            elementum adipiscing.
                          </p>
                        </div>
                        <p className="rs clearfix comment-view">
                          <a href="#ddd" className="fc-gray be-fc-orange">
                            75 comments
                          </a>
                          <span className="sep">|</span>
                          <a href="#ddd" className="fc-gray be-fc-orange">
                            378 views
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="bottom-project-info clearfix">
                      <div
                        className="project-progress sys_circle_progress"
                        data-percent="33"
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
                  <div className="box-marked-project project-short inside-tab">
                    <div className="top-project-info">
                      <div className="content-info-short clearfix">
                        <a href="#ddd" className="thumb-img">
                          <img src="images/ex/th-292x204-2.jpg" alt="$TITLE" />
                        </a>
                        <div className="wrap-short-detail">
                          <h3 className="rs acticle-title">
                            <a className="be-fc-orange" href="#ddd">
                              LYK and Bear #1: No Food Deed Unpunished
                            </a>
                          </h3>
                          <p className="rs tiny-desc">
                            by{" "}
                            <a href="#ddd" className="fw-b fc-gray be-fc-orange">
                              Ray Sumser
                            </a>{" "}
                            in{" "}
                            <span className="fw-b fc-gray">New York, NY</span>
                          </p>
                          <p className="rs title-description">
                            Nam sit amet est sapien, a faucibus purus. Sed
                            commodo facilisis tempus. Pellentesque placerat
                            elementum adipiscing.
                          </p>
                        </div>
                        <p className="rs clearfix comment-view">
                          <a href="#ddd" className="fc-gray be-fc-orange">
                            75 comments
                          </a>
                          <span className="sep">|</span>
                          <a href="#ddd" className="fc-gray be-fc-orange">
                            378 views
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="bottom-project-info clearfix">
                      <div
                        className="project-progress sys_circle_progress"
                        data-percent="65"
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
                  <div className="box-marked-project project-short inside-tab">
                    <div className="top-project-info">
                      <div className="content-info-short clearfix">
                        <a href="#ddd" className="thumb-img">
                          <img src="images/ex/th-292x204-3.jpg" alt="$TITLE" />
                        </a>
                        <div className="wrap-short-detail">
                          <h3 className="rs acticle-title">
                            <a className="be-fc-orange" href="#ddd">
                              LYK and Bear #1: No Food Deed Unpunished
                            </a>
                          </h3>
                          <p className="rs tiny-desc">
                            by{" "}
                            <a href="#ddd" className="fw-b fc-gray be-fc-orange">
                              Ray Sumser
                            </a>{" "}
                            in{" "}
                            <span className="fw-b fc-gray">New York, NY</span>
                          </p>
                          <p className="rs title-description">
                            Nam sit amet est sapien, a faucibus purus. Sed
                            commodo facilisis tempus. Pellentesque placerat
                            elementum adipiscing.
                          </p>
                        </div>
                        <p className="rs clearfix comment-view">
                          <a href="#ddd" className="fc-gray be-fc-orange">
                            75 comments
                          </a>
                          <span className="sep">|</span>
                          <a href="#ddd" className="fc-gray be-fc-orange">
                            378 views
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="bottom-project-info clearfix">
                      <div
                        className="project-progress sys_circle_progress"
                        data-percent="69"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar grid_4">
        <div className="box-gray project-author">
          <h3 className="title-box">Project by</h3>
          <div className="media">
            <a href="#ddd" className="thumb-left">
              <img src="images/ex/th-90x90-1.jpg" alt="$USER_NAME" />
            </a>
            <div className="media-body">
              <h4 className="rs pb10">
                <a href="#ddd" className="be-fc-orange fw-b">
                  John Doe
                </a>
              </h4>
              <p className="rs">Chicago, IL</p>
              <p className="rs fc-gray">5 projects</p>
            </div>
          </div>
          <div className="author-action">
            <a className="btn btn-red" href="#ddd">
              Edit info
            </a>
            <a className="btn btn-white" href="#ddd">
              Logout
            </a>
          </div>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Profile;
