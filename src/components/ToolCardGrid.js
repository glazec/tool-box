import React from "react";
import { Box } from "@quarkly/widgets";
import * as Components from "components";
import { useEffect, useState } from "react";

class ToolCardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tools: [] };
  }

  componentDidMount() {
    console.log(String(process.env.leancloud_appId));
    const AV = require("leancloud-storage");
    AV.debug.enable();
    AV.init({
      appId: String(process.env.REACT_APP_leancloud_appId),
      appKey: String(process.env.REACT_APP_leancloud_appKey),
    });

    const query = new AV.Query("Tools");
    return query
      .find()
      .then((toolsData) => {
        // todo 就是 objectId 为 582570f38ac247004f39c24b 的 Todo 实例
        //   const imageUrl = tools.get("imageUrl");
        //   const description = tools.get("description");

        // 获取内置属性
        //   const objectId = tools.id;
        //   const updatedAt = tools.updatedAt;
        //   const createdAt = tools.createdAt;
        this.setState({ tools: toolsData });
        console.log(this.state.tools.keys());
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <Box
        display="grid"
        background="rgba(241, 25, 25, 0)"
        grid-column="3"
        grid-row="1"
        quarkly-title="tools grid"
        margin="0px 0px 0px 0px"
        width="100%"
        grid-auto-columns="3"
        overflow-x="hidden"
        grid-gap="32px"
        padding="64px 0px 64px 0px"
      >
        {this.state.tools.map((value, index) => {
          return (
            <Components.ToolCard
              grid-column={(index % 3) + 1}
              title={value.get("toolName")}
              description={value.get("description")}
              imageUrl={value.get("imageUrl")}
              createdAt={value.createdAt}
              updatedAt={value.updatedAt}
              tags={value.get("tags")}
            />
          );
        })}
      </Box>
    );
  }
}

export default ToolCardGrid;
