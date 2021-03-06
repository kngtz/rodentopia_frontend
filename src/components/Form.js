import React from "react";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";

const { Option } = Select;

class CageForm extends React.Component {
  handleFormSubmit = (event, requestType, cageID) => {
    console.log(event);
    const ri = event.ri;
    const pi = event.pi;
    const researcher = event.researcher;
    const cage_type = event.cage_type;
    const facility = event.facility;
    const room = event.room;
    const rack = event.rack;
    const column = event.column;
    const row = event.row;

    switch (requestType) {
      case "post":
        return axios
          .post("https://rodentbackend.herokuapp.com/api/", {
            ri: ri,
            pi: pi,
            researcher: researcher,
            cage_type: cage_type,
            facility: facility,
            room: room,
            rack: rack,
            column: column,
            row: row
          })
          .then(res => console.log(res))
          .catch(error => console.error(error));

      case "put":
        return axios
          .put(`https://rodentbackend.herokuapp.com/api/${cageID}/`, {
            ri: ri,
            pi: pi,
            researcher: researcher,
            cage_type: cage_type,
            facility: facility,
            room: room,
            rack: rack,
            column: column,
            row: row
          })
          .then(res => console.log(res))
          .catch(error => console.error(error));

      default:
        console.log("default case");
    }
  };
  render() {
    return (
      <Form
        onFinish={event =>
          this.handleFormSubmit(
            event,
            this.props.requestType,
            this.props.cageID
          )
        }
        name="complex-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label="RI and PI">
          <Input.Group compact>
            <Form.Item
              name={["ri"]}
              noStyle
              // rules={[{ required: true, message: "RI is required" }]}
            >
              <Select placeholder="Select RI">
                <Option value="Singapore Bioimaging Consortium">SBIC</Option>
                <Option value="Bioprocessing Technology Institute">BTI</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["pi"]}
              noStyle
              // rules={[{ required: true, message: "PI is required" }]}
            >
              <Select placeholder="Select PI">
                <Option value="TOMMY TAN">Tommy Tan</Option>
                <Option value="LIM XIU XIU">Lim Xiu Xiu</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Researcher">
          <Form.Item
            name="researcher"
            noStyle
            // rules={[
            //   { required: true, message: "Researcher's name is required" }
            // ]}
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Facility">
          <Input.Group compact>
            <Form.Item
              name={["facility"]}
              noStyle
              // rules={[{ required: true, message: "Facility is required" }]}
            >
              <Select placeholder="Select Facility">
                <Option value="Department 1">D1</Option>
                <Option value="Department 2">D2</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Room and Rack">
          <Input.Group compact>
            <Form.Item
              name={["room"]}
              noStyle
              // rules={[{ required: true, message: "Room is required" }]}
            >
              <Select placeholder="Select Room">
                <Option value="ROOM 1">Room 1</Option>
                <Option value="ROOM 2">Room 2</Option>
                <Option value="ROOM 3">Room 3</Option>
                <Option value="ROOM 4">Room 4</Option>
                <Option value="ROOM 5">Room 5</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["rack"]}
              noStyle
              // rules={[{ required: true, message: "Rack is required" }]}
            >
              <Select placeholder="Select Rack">
                <Option value="RACK 1">Rack 1</Option>
                <Option value="RACK 2">Rack 2</Option>
                <Option value="RACK 3">Rack 3</Option>
                <Option value="RACK 4">Rack 4</Option>
                <Option value="RACK 5">Rack 5</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Column and Row">
          <Input.Group compact>
            <Form.Item
              name={["column"]}
              noStyle
              // rules={[{ required: true, message: "Column is required" }]}
            >
              <Select placeholder="Select Column">
                <Option value="A">A</Option>
                <Option value="B">B</Option>
                <Option value="C">C</Option>
                <Option value="D">D</Option>
                <Option value="E">E</Option>
                <Option value="F">F</Option>
                <Option value="G">G</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["row"]}
              noStyle
              // rules={[{ required: true, message: "Row is required" }]}
            >
              <Select placeholder="Select Row">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
                <Option value="6">6</Option>
                <Option value="7">7</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Cage Type">
          <Input.Group compact>
            <Form.Item
              name={["cage_type"]}
              noStyle
              // rules={[{ required: true, message: "cage_type is required" }]}
            >
              <Select placeholder="Select Cage Type">
                <Option value="Stock">Stock</Option>
                <Option value="Breeding">Breeding</Option>
                <Option value="Experimental">Experimental</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default CageForm;
