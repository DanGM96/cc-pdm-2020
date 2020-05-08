import React from "react";
import { Image } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import { Container, Top, Title } from "./styles";
import Logo from "../../../assets/Nubank_Logo.png";

export default function Header() {
	return (
		<Container>
			<Top>
				<Image source={Logo} />
				<Title>Jordan</Title>
			</Top>
			<Icon name="keyboard-arrow-down" size={20} color="#fff" />
		</Container>
	);
}
