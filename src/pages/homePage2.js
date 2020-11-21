import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Override, Stack } from "@quarkly/components";
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
		<Stack>
			{"    "}
			<StackItem width="15%" display="flex">
				<Box
					background="--backgroundDark"
					grid-column="1"
					grid-row="1"
					quarkly-title="left panel"
					padding="32px 32px 32px 32px"
					max-width="auto"
					width="auto"
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
					<Box position="relative" margin="0px 0px 16 0px" top="95%" bottom="2%">
						<Components.SlotsInfo bottom={0} top="auto" />
					</Box>
				</Box>
				{"        "}{"    "}
			</StackItem>
			{"    "}
			<StackItem width="50%" display="flex">
				<Box
					quarkly-title="main content"
					grid-column="2"
					grid-row="1"
					padding="32px 0px 0px 0px"
					display="block"
					justify-self="stretch"
				>
					<Button
						background="rgba(0, 0, 0, 0)"
						border-color="#989EAD"
						border-width="1px"
						border-style="solid"
						color="#2F6BFF"
						border-radius="15px"
						position="absolute"
						right="16px"
						top="22px"
					>
						Build your own tool box
					</Button>
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
					<Box
						display="grid"
						grid-auto-columns="5"
						width="100%"
						background="rgba(241, 25, 25, 0)"
						grid-column="2"
						grid-row="1"
						quarkly-title="tools grid"
						margin="64px 0px 0px 0px"
					>
						<Components.ToolCard grid-column="1">
							<Override slot="icon" />
						</Components.ToolCard>
						<Components.ToolCard grid-column="2" />
						<Components.ToolCard grid-column="3" />
						<Components.ToolCard grid-column="4" />
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
						<Components.ToolCard />
					</Box>
				</Box>
				{"        "}{"    "}
			</StackItem>
		</Stack>
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