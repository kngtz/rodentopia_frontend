import React from "react";
import axios from "axios";
import CageForm from "../components/Form";
import { Redirect } from "react-router-dom";

import { Card } from "antd";

class ArticleDetail extends React.Component {
  state = {
    cage: {}
  };

  componentDidMount() {
    const cageID = this.props.match.params.cageID;
    console.log(cageID);
    axios.get("http://127.0.0.1:8000/api/" + cageID).then(res => {
      this.setState({
        cage: res.data
      });
      console.log(this.state.cage.id);
    });
  }
  handleClick = () => {
    console.log("this is:", this);
    return axios
      .delete("http://127.0.0.1:8000/api/" + this.state.cage.id, {})
      .then(res => console.log(res))
      .catch(error => console.error(error));
    // <Redirect to="/cages" />;
  };

  render() {
    return (
      <div>
        <Card title={this.state.cage.cage_type}>
          <p>RI = {this.state.cage.ri}</p>
          <p>PI = {this.state.cage.pi}</p>
          <p>Researcher = {this.state.cage.researcher}</p>
          <p>Facility = {this.state.cage.facility}</p>
          <p>Room = {this.state.cage.room}</p>
          <p>Rack ={this.state.cage.rack}</p>
          <p>Column = {this.state.cage.column}</p>
          <p>Row = {this.state.cage.row}</p>
          <button onClick={this.handleClick}>Delete Cage</button>
        </Card>

        <CageForm requestType="put" cageID={this.props.match.params.cageID} />
      </div>
    );
  }
}

export default ArticleDetail;
