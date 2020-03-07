import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

class ArticleList extends React.Component {
  state = {
    cages: []
  };

  handleClick1 = () => {
    console.log("1");
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      let array1 = res.data.filter(x => x.facility == "Department 1");
      this.setState({
        cages: array1
      });
    });
  };

  handleClick2 = () => {
    console.log("2");
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      let array1 = res.data.filter(x => x.facility == "Department 2");
      this.setState({
        cages: array1
      });
    });
  };

  handleClickFilter = (event, optionKey, optionValue) => {
    console.log("click filter");
    console.log(optionKey, optionValue);
    console.log(event);
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      let array1 = res.data.filter(x => x.optionKey == optionValue);
      this.setState({
        cages: array1
      });
    });
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        cages: res.data
      });
    });
    // let array1 = res.data.filter(x => x.facility == "Department 1");

    // const usersOnline = this.state.cages.filter(
    //   x => x.cage_type == "Breeding"
    // );
    // const renderOnline = usersOnline.map(item => {
    //   <li key={item.toString()}>{item}</li>;
    // });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>Department 1</button>
        <button onClick={this.handleClick2}>Department 2</button>
        <br />
        <Form
          onFinish={event =>
            this.handleClickFilter(
              event,
              this.props.optionKey,
              this.props.optionValue
            )
          }
        >
          <select id="optionKey" name="optionKey">
            <option value="ri">RI</option>
            <option value="pi">PI</option>
            <option value="researcher">Researcher</option>
            <option value="cage_type">Cage Type</option>
          </select>
          <input type="text" id="optionValue" name="optionValue"></input>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
        <Articles data={this.state.cages} />;
        <br />
      </div>
    );
  }
}

export default ArticleList;
