import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LogingForm";
import Greeting from "./src/components/Greeting";

export default function App() {
	return (
		// View fundemental container on React Native
		<View style={styles.container}>
			<Text>React Native course</Text>
			<Greeting name="Jose Juaquin" />
			<Greeting name="David Smith" />
			<Greeting name="Marcelo Di Maria" />

			<StatusBar style="auto" />
			{/* <LoginForm /> */}
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
