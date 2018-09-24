import React from "react";
import { connect } from "react-redux";

import { addProfile } from "../actions/profile";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      city_id: "",
      status: "",
      user_id: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleClick(event) {
    const { year, city_id, status, user_id } = this.state;

    const profileInfo = {
      year,
      city_id,
      status,
      user_id
    };
    this.props.addProfile(profileInfo);
  }

  render() {
    const { year, city_id, status, user_id } = this.state;
    return (
      <div id="profileForm">
        <p>
          <input
            class="form-control"
            id="proInp"
            name="year"
            placeholder="Attended EDA in"
            onChange={this.handleChange}
            value={year}
          />
        </p>

        <select
          class="form-control form-control-sm"
          name="city_id"
          id="form"
          onChange={this.handleChange}
        >
          <option value="1">Wellington</option>
          <option value="2">Auckland</option>
        </select>

        <select
          class="form-control form-control-sm"
          name="status"
          id="form"
          onChange={this.handleChange}
        >
          <option value="1">Student</option>
          <option value="2">Staff</option>
        </select>

        <p>
          <input
            name="user_id"
            type="hidden"
            onChange={this.handleChange}
            value={user_id}
          />
        </p>

        <button class="btn btn-success" onClick={this.handleClick}>
          <i class="fab fa-angellist" /> Add
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProfile: profileInfo => {
      return dispatch(addProfile(profileInfo));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProfileForm);
