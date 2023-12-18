import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LogingForm";
import Greeting from "./src/components/Greeting";
import { NavigationContainer } from "@react-navigation/native";

// View fundemental container on React Native

export default function App() {
	return (
		<NavigationContainer>
			<View style={styles.container}>
				<Text>React Native course</Text>
				<Greeting firstname="Jose" lastname="Smith" />
				<Greeting firstname="David " lastname="Smith" />
				<Greeting />

				<StatusBar style="auto" />

				<LoginForm />
			</View>
		</NavigationContainer>
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

// import GestureHandlerRootView from "./src/components/GestureHandlerRootView";
