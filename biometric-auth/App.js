import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as LocalAuthentication from "expo-local-authentication";

export default function App() {
	const [isValidAuth, setValidAuth] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		checkDeviceForHardware();
	}, []);

	// Se o aparelho é compatível com a impressão digital
	const checkDeviceForHardware = async () => {
		let compatible = await LocalAuthentication.hasHardwareAsync();
		if (!compatible) {
			setErrorMessage("Dispositivo incompatível");
		} else {
			checkForBiometrics();
		}
	};

	// Se contém digitais cadastradas no celular
	const checkForBiometrics = async () => {
		let biometricRecords = await LocalAuthentication.isEnrolledAsync();
		if (!biometricRecords) {
			setErrorMessage("Não há digitais cadastradas");
		} else {
			verifyBiometric();
		}
	};

	// Se a digital é válida
	const verifyBiometric = async () => {
		let result = await LocalAuthentication.authenticateAsync();
		if (result.success) {
			setValidAuth(true);
		} else {
			setValidAuth(false);
			setErrorMessage("Digital inválida");
		}
	};

	return (
		<View style={styles.container}>
			{isValidAuth ? (
				<Text>Digital válida!</Text>
			) : (
				<Text>Digital inválida!</Text>
			)}
			<Text>({errorMessage})</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
