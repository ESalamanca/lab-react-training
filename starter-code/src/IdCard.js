import React from "react";
import moment from "moment";

class IdCard extends React.Component {
  render() {
    let height = (this.props.height / 100).toString() + "m";
    let birthdate = moment(this.props.birth).format("ddd MM DD YYYY");
    return (
      <div className="id-card">
        <img src={this.props.picture} alt="user avatar" />
        <div class="idcard-info">
          <p>
            <strong>First name:</strong> {this.props.firstName}
          </p>
          <p>
            <strong>Last name: </strong>
            {this.props.lastName}
          </p>
          <p>
            <strong>Gender: </strong>
            {this.props.gender}
          </p>
          <p>
            <strong>Height:</strong> {height}
          </p>
          <p>
            <strong>Birth:</strong> {birthdate}
          </p>
        </div>
      </div>
    );
  }
}

export default IdCard;
