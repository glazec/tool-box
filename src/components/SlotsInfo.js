import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Slots Static",
	"display": "flex",
	"flex-direction": "column",
	"align-items": "flex-start",
	"bottom": "16px",
	"overflow-x": "hidden"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"color": "#ffffff",
			"position": "static",
			"bottom": "24px",
			"quarkly-title": "slots total number",
			"font": "--bold16",
			"margin": "0 0px 4px 0px",
			"overflow-x": "hidden",
			"children": "100"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "#ffffff",
			"position": "static",
			"bottom": "24px",
			"quarkly-title": "slots total number",
			"font": "--thin16",
			"margin": "0 0px 16px 0px",
			"overflow-x": "hidden",
			"children": "Slots Total"
		}
	}
};

const SlotsInfo = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(SlotsInfo, { ...Box,
	defaultProps,
	overrides
});
export default SlotsInfo;