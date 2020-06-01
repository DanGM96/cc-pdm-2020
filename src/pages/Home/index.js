import React, { useState, useEffect } from "react";
import { Image, FlatList, TouchableOpacity } from "react-native";

import redditapi from "../../services/redditapi";

import {
	Container,
	Lista,
	ButtonContainer,
	ButtonText,
	Button,
} from "./styles";

export default function Home({ navigation }) {
	const [reddit, setReddit] = useState([]);
	const [loading, setLoading] = useState(false);
	const [limit, setLimit] = useState(25);
	const [after, setAfter] = useState("");

	useEffect(() => {
		loadReddit();
	}, []);

	async function loadReddit() {
		if (loading) {
			return;
		}

		setLoading(true);

		const response = await redditapi.get(`popular/.json`, {
			params: { limit, after },
		});
		setAfter(response.data.data.after);

		let data = response.data.data.children.map((data) => data.data);
		data.forEach((child) => {
			if (child.thumbnail.length < 10) {
				child.thumbnail =
					"https://www.clipartmax.com/png/full/134-1346150_file-reddit-new-svg-wikimedia-commons-reddit-icon.png";
			}
		});
		setReddit([...reddit, ...data]);
		setLoading(false);
	}
	return (
		<Container>
			<Lista>
				<FlatList
					data={reddit}
					keyExtractor={(reddit) => reddit.name}
					onEndReached={() => loadReddit()}
					onEndReachedThreshold={0.1}
					renderItem={({ item: reddit }) => (
						<TouchableOpacity
							onPress={() => navigation.navigate("Content", { reddit })}
						>
							<Button>
								<ButtonContainer>
									<Image
										style={{ height: 100, width: 100 }}
										source={{ uri: reddit.thumbnail }}
									></Image>
									<ButtonText>{reddit.title}</ButtonText>
								</ButtonContainer>
							</Button>
						</TouchableOpacity>
					)}
				/>
			</Lista>
		</Container>
	);
}
