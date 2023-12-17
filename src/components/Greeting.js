import React from "react";
import { Text } from "react-native";

export default function Greeting(props) {
	const { firstname, lastname } = props;
	return (
		<Text>
			Hey {firstname} {lastname}
		</Text>
	);
}

Greeting.defaultProps = {
	firstname: "Marcela",
	lastname: "Damian",
};
