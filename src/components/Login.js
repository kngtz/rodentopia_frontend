import React from "react";
import { Form, Input, Button, Select } from "antd";
// import axios from "axios";

const { Option } = Select;

class LoginForm extends React.Component {
  handleFormSubmit = (event) => {
    console.log("hello");
    console.log(event);
    const username = event.username;
    const password = event.password;
          
          ("http://127.0.0.1:8000/api/", {
            username: username,
            password: password,

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
                <Option value="SBIC">SBIC</Option>
                <Option value="BTI">BTI</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["pi"]}
              noStyle
              // rules={[{ required: true, message: "PI is required" }]}
            >
              <Select placeholder="Select PI">
                <Option value="Tommy Tan">Tommy Tan</Option>
                <Option value="Lim Xiu Xiu">Lim Xiu Xiu</Option>
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
                <Option value="D1">D1</Option>
                <Option value="D2">D2</Option>
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
                <Option value="Room 1">Room 1</Option>
                <Option value="Room 2">Room 2</Option>
                <Option value="Room 3">Room 3</Option>
                <Option value="Room 4">Room 4</Option>
                <Option value="Room 5">Room 5</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["rack"]}
              noStyle
              // rules={[{ required: true, message: "Rack is required" }]}
            >
              <Select placeholder="Select Rack">
                <Option value="Rack 1">Rack 1</Option>
                <Option value="Rack 2">Rack 2</Option>
                <Option value="Rack 3">Rack 3</Option>
                <Option value="Rack 4">Rack 4</Option>
                <Option value="Rack 5">Rack 5</Option>
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
