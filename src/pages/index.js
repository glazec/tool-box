import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import * as Components from "components";
import ToolCardGrid from "components/ToolCardGrid";

export default () => {
  return (
    <Theme theme={theme}>
      <Helmet>
        <title>ToolBox</title>
        <meta name={"ToolBox"} content={"ToolBox for Inevitable"} />
        <link
          rel={"shortcut icon"}
          href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"}
          type={"image/x-icon"}
        />
      </Helmet>
      <Box
        display="flex"
        padding="0px 0px 0px px"
        grid-auto-columns="2"
        grid-auto-rows="1"
        background="#FFFFFF"
        align-items="stretch"
        justify-content="space-between"
      >
        <Box
          background="--backgroundDark"
          grid-column="1"
          grid-row="1"
          quarkly-title="left panel"
          padding="32px 32px 32px 32px"
          max-width="150px"
          flex="1 1 10%"
          margin="0px 5% 0px 0px"
          min-height="100%"
          position="relative"
        >
          <Text
            color="--textWhite"
            font="--heading2"
            overflow-x="hidden"
            quarkly-title="Title"
            width="auto"
            margin="0 0px 16px 0px"
          >
            Inevitable
          </Text>
          <Box
            position="absolute"
            margin="0px 0px 16px 0px"
            top="95%"
            bottom="auto"
          >
            <Components.SlotsInfo bottom={0} top="auto" />
          </Box>
        </Box>
        <Box
          quarkly-title="main content"
          grid-column="2"
          grid-row="1"
          padding="32px 32px 0px 0px"
          display="block"
          justify-self="stretch"
          flex="1  5 80%"
        >
          <Link
            font="12px sans-serif"
            position="absolute"
            right="16px"
            top="35px"
            disabled={false}
            href="https://github.com/glazec/tool-box"
            text-decoration-line="initial"
            color="#2F6BFF"
            hover-color="#3F9BFF"
          >
            Build Your Own ToolBox
          </Link>
          <Text
            color="--textDark"
            font="--heading2"
            overflow-x="hidden"
            quarkly-title="Title"
            width="auto"
            margin="0 0px 32px 0px"
          >
            Tools
          </Text>
          <ToolCardGrid />
        </Box>
        <Hr
          position="absolute"
          top="66px"
          width="100%"
          color="#0000"
          border-color="#F2F3F5"
          background="#0000"
        />
      </Box>
      {/* <Link
        font={"--capture"}
        font-size={"10px"}
        position={"fixed"}
        bottom={"12px"}
        right={"12px"}
        z-index={"4"}
        border-radius={"4px"}
        padding={"5px 12px 4px"}
        background-color={"--dark"}
        opacity={"0.6"}
        hover-opacity={"1"}
        color={"--light"}
        cursor={"pointer"}
        transition={"--opacityOut"}
        quarkly-title={"Badge"}
        text-decoration-line={"initial"}
        href={"https://quarkly.io/"}
        target={"_blank"}
      >
        Made on Quarkly
      </Link> */}
    </Theme>
  );
};
