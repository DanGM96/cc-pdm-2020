import React from "react";
import { View, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import { styles } from "./styles";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";

export default function Main() {
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<View style={styles.card}>
					<View style={styles.cardHeader}>
						<Icon name="attach-money" size={28} color="#666" />
						<Icon name="visibility-off" size={28} color="#666" />
					</View>
					<View style={styles.cardContent}>
						<Text style={styles.title}>Saldo disponível</Text>
						<Text style={styles.description}>R$ 12.345.678,90</Text>
					</View>
					<View style={styles.cardFooter}>
						<Text style={styles.annotation}>
							Trasnferência de R$ 1.234,00 recebida de Lucas Moura hoje às
							09:00h
						</Text>
					</View>
				</View>
			</View>
			<Tabs />
		</View>
	);
}
