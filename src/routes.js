import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Routes() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator></Stack.Navigator>
		</NavigationContainer>
	);
}
