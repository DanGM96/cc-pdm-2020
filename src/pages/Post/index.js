import React, { useState } from "react";
import { Text, View } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import {
	Container,
	Detalhes,
	Imagem,
	CardImage,
	Name,
	Effect,
	Type,
	PriceDetails,
	Website,
	WebsiteName,
	Price,
} from "./styles";

const Post = () => {
	const route = useRoute();
	const reddit = route.params.reddit;

	const [redditDetails, setRedditDetails] = useState("");
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "description", title: "Descrição" },
		{ key: "status", title: "Status" },
	]);

	function loadRedditDetails() {
		const details = {
			id: reddit.name,
			title: reddit.title,
			text: reddit.self,
		};

		setRedditDetails(details);
	}

	useFocusEffect(
		React.useCallback(() => {
			loadRedditDetails();
		}, [reddit])
	);

	return (
		<Container>
			<Detalhes>
				<Name>{reddit.title}</Name>
			</Detalhes>
			<Text>{reddit.selftext}</Text>
		</Container>
	);
};

export default Post;
