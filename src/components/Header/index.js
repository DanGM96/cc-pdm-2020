import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import styles from "./styles";
import Logo from "../../../assets/Nubank_Logo.png";

export default function Header() {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Image style={styles.logo} source={Logo} />
				<Text style={styles.title}>Jordan</Text>
			</View>
			<Icon name="keyboard-arrow-down" size={20} color="#fff" />
		</View>
	);
}
