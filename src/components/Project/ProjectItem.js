import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/projectActions";

class ProjectItem extends Component {
  onDeleteClick = id => {
    this.props.deleteProject(id);
  };

  render() {
    const { project } = this.props;
    return (
      <div className="container">
        {/* <div className="panel-group">
          <div className="panel panel-default">
            <div id="collapse1" className="panel-collapse collapse">
              <div className="panel-body">{project.description}</div>
              <div className="panel-footer">Panel Footer</div>
            </div>
          </div>
        </div> */}
        <div className="card card-body bg-light mb-3">
          <div className="row">

            <div className="col-lg-8 col-md-8 col-8">
              <h3>{project.projectName}</h3>
              <p>{project.description}</p>
              <div className="locate-bottom">
                <p>Start date: {project.start_date}</p>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <ul className="list-group">
                <Link to={`/projectBoard/${project.projectIdentifier}`}>
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1"> Assignment Board </i>
                  </li>
                </Link>
                <Link to={`/updateProject/${project.projectIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1"> Update Assignment Info</i>
                  </li>
                </Link>

                <li
                  className="list-group-item delete"
                  onClick={this.onDeleteClick.bind(
                    this,
                    project.projectIdentifier
                  )}
                >
                  <i className="fa fa-minus-circle pr-1"> Delete Assignment</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  deleteProject: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProject }
)(ProjectItem);
