import React, { useState } from "react";
import { connect } from "react-redux";
import { addProject } from "../../store/actions/project/actionsProject";
import { useAlert } from "react-alert";

const AddProject = ({ auth, newProject }) => {
  const [project, setProject] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    price: "",
    client: auth.data._id
  });
  const alert = useAlert();

  const fieldChangeHandler = ({ target }) => {
    setProject({
      ...project,
      [target.name]: target.value
    });
  };

  const submit = e => {
    e.preventDefault();
    newProject(project);
    alert.show("Oh look, you have created your project :) ");
  };
  return (
    <div className="layout-2cols">
      <div className="content grid_8">
        <div className="project-detail">
          <div className="project-tab-detail tabbable accordion">
            <ul className="nav nav-tabs clearfix">
              <li className="active">
                <a href="#ddd">Add Project</a>
              </li>
            </ul>
            <div className="tab-content">
              <div>
                <h3 className="rs alternate-tab accordion-label">Project</h3>
                <div className="tab-pane accordion-content active">
                  <div className="form form-profile">
                    <form>
                      <div className="row-item clearfix">
                        <label className="lbl" htmlFor="txt_name1">
                          Title:
                        </label>
                        <div className="val">
                          <input
                            onChange={fieldChangeHandler}
                            className="txt"
                            name="title"
                            type="text"
                            placeholder="Enter your title"
                          />
                        </div>
                      </div>
                      <div className="row-item clearfix">
                        <label className="lbl" htmlFor="txt_location">
                          Location:
                        </label>
                        <div className="val">
                          <input
                            onChange={fieldChangeHandler}
                            className="txt"
                            name="location"
                            type="text"
                            placeholder="Enter your location"
                          />
                        </div>
                      </div>

                      <div className="row-item clearfix">
                        <label className="lbl" htmlFor="txt_location">
                          Category:
                        </label>
                        <div className="val">
                          <input
                            onChange={fieldChangeHandler}
                            className="txt"
                            name="category"
                            type="text"
                            placeholder="Enter your category"
                          />
                        </div>
                      </div>

                      <div className="row-item clearfix">
                        <label className="lbl" htmlFor="txt_location">
                          Price:
                        </label>
                        <div className="val">
                          <input
                            onChange={fieldChangeHandler}
                            className="txt"
                            name="price"
                            type="number"
                            placeholder="Enter your price"
                          />
                        </div>
                      </div>

                      <div className="row-item clearfix">
                        <label className="lbl" htmlFor="txt_bio">
                          Description:
                        </label>
                        <div className="val">
                          <textarea
                            onChange={fieldChangeHandler}
                            className="txt fill-width"
                            name="description"
                            type="text"
                            placeholder="Enter your description"
                            cols="30"
                            rows="10"
                          ></textarea>
                        </div>
                      </div>

                      {/* <p className="wrap-btn-submit rs ta-r">
                        <button className="btn btn-red btn-submit-all">
                          Upload the project
                        </button>
                      </p> */}
                      <button
                        onClick={submit}
                        className="btn btn-red btn-submit-all"
                        type="submit"
                      >
                        Add
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.authentication
});
const mapDispatchToProps = dispatch => ({
  newProject: project => {
    dispatch(addProject(project));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
