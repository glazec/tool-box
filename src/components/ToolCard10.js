import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Image, Text, Box } from "@quarkly/widgets";
import { FaCircle } from "react-icons/fa";
const defaultProps = {
	"display": "flex",
	"flex-direction": "column",
	"padding": "8px 8px 8px 8px",
	"align-items": "center",
	"border-width": "1px",
	"border-style": "solid",
	"margin": "0px 0px 0 0px",
	"grid-column": "auto",
	"max-height": "256px",
	"width": "auto",
	"max-width": "245px"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaCircle,
			"position": "static",
			"top": "45px",
			"right": "492px",
			"bottom": "auto",
			"left": "0px",
			"display": "inline",
			"align-self": "flex-start",
			"width": "auto",
			"height": "auto",
			"font": "0.3em --fontFamily-googleOpenSans",
			"size": "8px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "128px",
			"height": "128px",
			"src": "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000",
			"display": "inline"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"text-align": "left",
			"font": "--heading2",
			"margin": "8px 0px 0 0px",
			"children": "Slack"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"align-self": "auto",
			"font": "--thin16",
			"margin": "0 0px 16px 0px",
			"children": <>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus{" "}
			</>,
			"text-align": "center"
		}
	}
};

const ToolCard10 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Icon {...override("icon")} />
		<Image {...override("image")} />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(ToolCard10, { ...Box,
	defaultProps,
	overrides
});
export default ToolCard10;