import { View, Text, Button } from "react-native";
import React from "react";

export default function HomeScreen(props) {
	const { navigation } = props;

	const goToSettings = () => {
		navigation.navigate("Settings");
	};

	return (
		<View>
			<Text>Hey budy</Text>
			<Text>We Are in HomeScreen</Text>

			<Text>We Are in HomeScreen</Text>

			<Text>We Are in HomeScreen</Text>

			<Button onPress={goToSettings} title="Ir a Ajustes" />
		</View>
	);
}
