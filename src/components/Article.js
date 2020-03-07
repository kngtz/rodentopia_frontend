import React from "react";
import { List, Avatar } from "antd";

const Articles = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.pi}
          actions={[]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/cages/${item.id}`}>{item.pi}</a>}
            description={item.researcher}
          />
          {item.cage_type}
          <br />
          {item.room}
        </List.Item>
      )}
    />
  );
};

export default Articles;
