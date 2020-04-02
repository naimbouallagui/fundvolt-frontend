import React, { useEffect } from "react";
import { connect } from "react-redux";
import { listProjects } from "../../store/actions/project/index";

const List = ({ projects, getAllProjects }) => {
  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);
  return (
    <>
      <div className="home-popular-project">
        <div className="container_12">
          <div className="grid_12 wrap-title" style={{ marginBottom: "15px" }}>
            <div className="form-search">
              <form action="#">
                <label htmlFor="sys_txt_keyword">
                  <input
                    id="sys_txt_keyword2"
                    className="txt-keyword"
                    type="text"
                    placeholder="Search projects"
                  />
                </label>
                <button className="btn-search" type="reset">
                  <i className="icon iMagnifier"></i>
                </button>
                <button className="btn-reset-keyword" type="reset">
                  <i className="icon iXHover"></i>
                </button>
              </form>
            </div>
            <h2 className="common-title">Projects</h2>
          </div>
          <div className="clear"></div>
          <div className="lst-popular-project clearfix">
            {projects.map(project => (
              <div className="grid_3" key={project._id}>
                <div className="project-short sml-thumb">
                  <div className="top-project-info">
                    <div className="content-info-short clearfix">
                      <a href="#aaa" className="thumb-img">
                        <img src="images/ex/th-292x204-1.jpg" alt="$TITLE" />
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
                        <p className="rs title-description">
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
export default connect(mapStateToProps, mapDispatchToProps)(List);
