import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Image, Text, Box } from "@quarkly/widgets";
import { FaCircle } from "react-icons/fa";
const defaultProps = {
	"display": "flex",
	"flex-direction": "column",
	"padding": "8px 8px 8px 8px",
	"align-items": "center",
	"max-width": "150px",
	"width": "130px",
	"border-width": "1px",
	"border-style": "solid"
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
			"font": "6px --fontFamily-googleOpenSans",
			"width": "auto",
			"height": "auto"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px",
			"src": "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000",
			"display": "inline"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"text-align": "left",
			"children": "Some text"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"children": "Some text",
			"align-self": "auto"
		}
	}
};

const ToolCard = props => {
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

Object.assign(ToolCard, { ...Box,
	defaultProps,
	overrides
});
export default ToolCard;