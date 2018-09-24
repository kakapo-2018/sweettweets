import React from 'react'
import { connect } from 'react-redux'

import { addProfile } from '../actions/profile'



class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: '',
      city_id: '',
      status: '',
      user_id: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick(event) {
    const { year, city_id, status, user_id } = this.state

    const profileInfo = {
      year,
      city_id,
      status,
      user_id
    }
    this.props.addProfile(profileInfo)
  }

  render() {
    const { year, city_id, status, user_id } = this.state
    return (
      <div>
        <p><input name='year' placeholder='Attended EDA in'
          onChange={this.handleChange} value={year} /></p>

        <select name='city_id' onChange={this.handleChange}>
          <option value='1'>Wellington</option>
          <option value='2'>Auckland</option>
        </select>

        <select name='status' onChange={this.handleChange}>
          <option value='1'>Student</option>
          <option value='2'>Staff</option>
        </select>

        <p><input name='user_id' type="hidden"
          onChange={this.handleChange} value={user_id} /></p>

        <button onClick={this.handleClick}>Add</button>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProfile: (profileInfo) => {
      return dispatch(addProfile(profileInfo))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProfileForm)