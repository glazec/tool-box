import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Slots Static",
	"display": "flex",
	"flex-direction": "column",
	"align-items": "flex-start"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"color": "#ffffff",
			"position": "static",
			"bottom": "24px",
			"quarkly-title": "slots total number",
			"margin": "16px 0px 8px 0px",
			"children": "Slots Total"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "#ffffff",
			"position": "static",
			"bottom": "24px",
			"quarkly-title": "slots total number",
			"margin": "8px 0px 16px 0px",
			"children": <>
				100
				<br />
			</>
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