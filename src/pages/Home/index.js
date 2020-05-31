import React, { useState, useEffect } from "react";
import {
	Text,
	View,
	Button,
	Image,
	FlatList,
	TouchableHighlight,
	TouchableOpacity,
} from "react-native";

import api from "../../services/api";
import redditapi from "../../services/redditapi";

import {
	Container,
	ListaCards,
	Header,
	Logo,
	Description,
	ButtonContainer,
	ButtonText,
	CardDetails,
	CardDetailsText,
	Botao,
} from "./styles";

export default function Home({ navigation }) {
	const [reddit, setReddit] = useState([]);
	const [total, setTotal] = useState(0);
	const [offset, setOffset] = useState(0);
	const [loading, setLoading] = useState(false);

	const [limit, setLimit] = useState(25);
	const [after, setAfter] = useState("");

	useEffect(() => {
		loadReddit();
	}, []);

	async function loadReddit() {
		const totalReddit = 100;
		if (loading) {
			return;
		}
		if (total > 0 && reddit.length == totalReddit) {
			return;
		}
		setLoading(true);

		const response = await redditapi.get(`popular/.json`, {
			params: { limit, after },
		});
		setAfter(response.data.data.after);
		//console.log(response.data.data.children);
		let data = response.data.data.children.map((data) => data.data);
		data.forEach((child) => {
			if (child.thumbnail.length < 10) {
				child.thumbnail =
					"https://www.clipartmax.com/png/full/134-1346150_file-reddit-new-svg-wikimedia-commons-reddit-icon.png";
			}
		});
		setReddit([...reddit, ...data]);
		//rsetOffset(offset + limit);
		setLoading(false);
	}
	return (
		<Container>
			<Header>
				<Logo>Reading it</Logo>
			</Header>
			<ListaCards>
				<FlatList
					data={reddit}
					keyExtractor={(reddit) => reddit.name}
					onEndReached={() => loadReddit()}
					onEndReachedThreshold={0.1}
					renderItem={({ item: reddit }) => (
						<TouchableOpacity
							onPress={() => navigation.navigate("Post", { reddit })}
						>
							<Botao>
								<ButtonContainer>
									<Image
										style={{ height: 100, width: 100 }}
										source={{ uri: reddit.thumbnail }}
									></Image>
									<ButtonText>{reddit.title}</ButtonText>
								</ButtonContainer>
							</Botao>
						</TouchableOpacity>
					)}
				/>
			</ListaCards>
		</Container>
	);
}

/*{
	<View>
		<FlatList
			data={pokemons}
			keyExtractor={(pokemon) => String(pokemon.name)}
			onEndReached={loadPokemons}
			onEndReachedThreshold={0.1}
			renderItem={({ item: pokemon }) => (
				<Button
					title={pokemon.name}
					onPress={() => navigation.navigate("Details", { pokemon })}
				/>
			)}
		/>
	</View>;
}*/
