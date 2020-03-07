import React from "react";
import CageForm from "../components/Form";

class NewCage extends React.Component {
  state = {
    cages: []
  };

  render() {
    return (
      <div>
        <h2>Create Cage</h2>
        <CageForm requestType="post" cageID={null} />
      </div>
    );
  }
}

export default NewCage;
