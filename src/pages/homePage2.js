import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			display="grid"
			padding="0px 0px 0px px"
			justify-content="stretch"
			grid-auto-columns="2"
			grid-auto-rows="1"
		>
			<Box
				background="--backgroundDark"
				padding="32px 32px 32px 32px"
				margin="0px 64px 0px 0px"
				align-self="stretch"
				grid-column="1"
				grid-row="1"
			>
				<Text
					color="--textWhite"
					font="--heading2"
					overflow-x="hidden"
					quarkly-title="Title"
					width="auto"
				>
					Inevitable
				</Text>
				<Box position="absolute" bottom={0}>
					<Components.SlotsInfo bottom={0} top="auto" />
				</Box>
			</Box>
			<Box
				display="grid"
				grid-auto-columns="5"
				width="auto"
				background="rgba(241, 25, 25, 0)"
				grid-column="2"
				grid-row="1"
			>
				<Components.ToolCard grid-column="1" />
				<Components.ToolCard grid-column="2" />
				<Components.ToolCard grid-column="3" />
				<Components.ToolCard grid-column="4" />
				<Components.ToolCard grid-column="5" />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
				<Components.ToolCard />
			</Box>
		</Box>
		<Link
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
		</Link>
	</Theme>;
});