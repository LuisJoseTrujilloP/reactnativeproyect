import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LogingForm";

export default function App() {
	return (
		// View fundemental container on React Native
		<View style={styles.container}>
			<Text>First component</Text>
			<StatusBar style="auto" />
			<LoginForm />
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
