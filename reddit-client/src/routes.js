import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Content from "./pages/Content";

export default function Routes() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: true }}>
				<Stack.Screen name="Home" component={Home} options={ScreenStyle} />
				<Stack.Screen
					name="Content"
					component={Content}
					options={ScreenStyle}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

function ScreenStyle() {
	return {
		headerStyle: {
			backgroundColor: "#0079d3",
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "bold",
		},
	};
}
