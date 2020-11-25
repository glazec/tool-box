import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Image, Text, Box, Link } from "@quarkly/widgets";
const defaultProps = {
  display: "block",
  "flex-direction": "column",
  padding: "8px 8px 8px 8px",
  "align-items": "center",
  "border-style": "solid",
  margin: "0px 0px 0 0px",
  width: "auto",
  "hover-box-shadow": "0 0 0 0 rgba(0, 0, 0, 0.)",
  "border-width": "2px",
  "border-color": "#edf0f3",
  "border-radius": "5px",
  "hover-border-color": "rgba(47, 107, 255, 0.56)",
  "hover-border-radius": "15px",
  "max-width": "386px",
  "max-height": "386px",
  "hover-transition": "all 0.8s --transitionTimingFunction-easeOut 0.5s",
  "grid-column": "auto",
  position: "relative",
};
const overrides = {
  icon: {
    kind: "Icon",
    props: {
      category: "fa",
      icon: "FaCircle",
      right: "auto",
      bottom: "auto",
      display: "inline",
      "align-self": "flex-start",
      width: "auto",
      height: "auto",
      font: "0.3em --fontFamily-googleOpenSans",
      size: "8px",
      position: "absolute",
      top: "16px",
      left: "16px",
    },
  },
  box: {
    kind: "Box",
    props: {
      display: "flex",
      "flex-direction": "column",
      padding: "8px 8px 8px 8px",
      "align-items": "center",
      "border-style": "solid",
      margin: "0px 0px 0 0px",
      width: "auto",
      "hover-box-shadow": "0 0 0 0 rgba(0, 0, 0, 0.)",
      "border-width": "0px",
      "border-color": "#edf0f3",
      "border-radius": "5px",
      "hover-border-color": "rgba(47, 107, 255, 0.56)",
      "hover-border-radius": "15px",
      "max-width": "386px",
      "max-height": "386px",
      "hover-transition": "all 0.8s --transitionTimingFunction-easeOut 0.5s",
      "grid-column": "auto",
    },
  },
  image: {
    kind: "Image",
    props: {
      width: "128px",
      height: "128px",
      src:
        "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000",
      display: "inline",
    },
  },
  text: {
    kind: "Text",
    props: {
      "text-align": "left",
      font: "--heading2",
      margin: "8px 0px 8px 0px",
      children: "Slack",
    },
  },
  text1: {
    kind: "Text",
    props: {
      "align-self": "auto",
      font: "--thin16",
      margin: "0 0px 16px 0px",
      "text-align": "center",
      children: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus{" "}
        </>
      ),
    },
  },
  box1: {
    kind: "Box",
    props: {
      display: "flex",
      "max-width": "100%",
      "align-self": "flex-end",
      bottom: "8px",
      "justify-content": "flex-end",
      children: (
        <>
          <Link
            href="#"
            font="12px sans-serif"
            text-decoration-line="initial"
            color="rgba(26, 33, 56, 0.46)"
            hover-color="#1a2138"
            justify-content="flex-end"
          >
            Browser
          </Link>
          <Link
            href="#"
            margin="0px 0px 0px 8px"
            font="12px sans-serif"
            text-decoration-line="initial"
            color="rgba(26, 33, 56, 0.46)"
            hover-color="#1a2138"
          >
            Python
          </Link>
        </>
      ),
      top: "auto",
      position: "absolute",
      right: "8px",
    },
  },
};

const ToolCard = (props) => {
  overrides["text"]["props"]["children"] = props.title;
  overrides["text1"]["props"]["children"] = <>{props.description}</>;
  overrides["image"]["props"]["src"] = props.imageUrl;
  const { override, children, rest } = useOverrides(
    props,
    overrides,
    defaultProps
  );

  return <Box {...rest}>
      <Icon {...override("icon")} />
      <Box {...override("box")}>
        <Image {...override("image")} />
        <Text {...override("text")} />
        <Text {...override("text1")} />
      </Box>
      <Box {...override("box1")} />
      {children}
    </Box>
};

Object.assign(ToolCard, { ...Box, defaultProps, overrides });
export default ToolCard;
