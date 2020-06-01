import React from "react";
import { Text, Linking, Button } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Container, Header, Image, ContentImage, Title, Body } from "./styles";

const Content = () => {
	const route = useRoute();
	const reddit = route.params.reddit;

	return (
		<Container>
			<Header>
				<Title>{reddit.title}</Title>
			</Header>
			<Button
				title="View More"
				color="#ff4500"
				onPress={() => {
					Linking.openURL(reddit.url);
				}}
			/>
			<Body>
				<Text>{reddit.selftext}</Text>
			</Body>
			<Image>
				<ContentImage
					source={{ uri: reddit.url }}
					resizeMode="contain"
				></ContentImage>
			</Image>
		</Container>
	);
};

export default Content;
