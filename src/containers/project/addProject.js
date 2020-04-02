import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addProject,
  uploadImage
} from "../../store/actions/project";
import { Redirect } from "react-router-dom";

const AddProject = ({ auth, newProject, upload, file, alertModal }) => {
  const [project, setProject] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    price: "",
    img: "",
    client: auth ? auth.data._id : null
  });
  const [image, setImage] = useState(null);

  const fieldChangeHandler = ({ target }) => {
    setProject({
      ...project,
      [target.name]: target.value
    });
  };

  useEffect(() => {
    if (image) upload(image);
  }, [image, upload]);
  useEffect(() => {
    if (file) {
      const url = (file || "").replace(/\\/g, `/`);
      setProject({
        ...project,
        // img: file
        img: url
      });
    }
  }, [file]);

  const fileUpload = e => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };
  const submit = e => {
    console.log(project);
    e.preventDefault();
    newProject(project);
  };

  if (!auth) return <Redirect to="/" />;
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

                      <p className="wrap-btn-submit rs ta-r">
                        <input
                          onChange={fileUpload}
                          className="btn btn-gray"
                          type="file"
                          name="img"
                        />
                      </p>
                  
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
  auth: state.authentication,
  file: state.files,
  alertModal: state.alert
});
const mapDispatchToProps = dispatch => ({
  newProject: project => {
    dispatch(addProject(project));
  },
  upload: img => {
    dispatch(uploadImage(img));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
