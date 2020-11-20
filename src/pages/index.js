import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, StackItem, Stack } from "@quarkly/components";
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
			<StackItem display="flex" background="--backgroundDark" width="15%" padding="8px 16px 16px 16px">
				<Section quarkly-title="SectionSideBar" flex-direction="column" padding="0 0 24px 16px">
					<Text quarkly-title="Title" color="--textWhite" font="--heading2">
						Inevitable
					</Text>
					<Box position="absolute" bottom="32px" quarkly-title="foot static info">
						<Components.SlotsInfo>
							<Override slot="text" font="--bold16" margin="0 0px 4px 0px">
								100
							</Override>
							<Override slot="text1" font="--thin16" margin="0 0px 16px 0px">
								Slots Total
							</Override>
						</Components.SlotsInfo>
					</Box>
				</Section>
				{"        "}{"    "}
			</StackItem>
			{"    "}
			<StackItem display="flex" width="85%">
				<Section>
					<Override slot="SectionContent" align-items="center" />
					<Box display="grid" quarkly-title="Tools Grid" width="100%" grid-auto-columns="5">
						<Components.ToolCard>
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
						<Components.ToolCard>
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
						<Components.ToolCard max-width="150px" width="130px" grid-column="2">
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
						<Components.ToolCard max-width="150px" width="130px" grid-column="2">
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
						<Components.ToolCard max-width="150px" width="130px">
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
						<Components.ToolCard max-width="150px" width="130px">
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
						<Components.ToolCard max-width="150px" width="130px" grid-column="3">
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
						<Components.ToolCard max-width="150px" width="130px" grid-column="3">
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
						<Components.ToolCard max-width="150px" width="130px" grid-column="4">
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
						<Components.ToolCard max-width="150px" width="130px" grid-column="4">
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
						<Components.ToolCard max-width="150px" width="130px" grid-column="5">
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
						<Components.ToolCard max-width="150px" width="130px" grid-column="5">
							<Override slot="icon" />
							<Override slot="image" />
							<Override slot="text" />
							<Override slot="text1" />
						</Components.ToolCard>
					</Box>
				</Section>
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